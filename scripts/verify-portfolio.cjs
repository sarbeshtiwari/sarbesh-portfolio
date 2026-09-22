const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright-core");
const fs = require("node:fs");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const consoleErrors = [];
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      !/status of (400|503)/.test(message.text())
    )
      consoleErrors.push(message.text());
  });
  const origin = process.env.PORTFOLIO_URL || "http://localhost:3100";
  const result = {
    layouts: [],
    routes: [],
    interactions: [],
    errors,
    consoleErrors,
  };
  await page.goto(origin, { waitUntil: "networkidle" });
  await page
    .locator(".loading-screen")
    .waitFor({ state: "detached", timeout: 10000 });
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator("section[id]").count(), 7);
  assert.equal(
    await page.evaluate(() => sessionStorage.getItem("portfolio-intro")),
    "seen",
  );
  const metadata = await page
    .locator('meta[property="og:image"]')
    .getAttribute("content");
  assert.ok(metadata.includes("/opengraph-image"));
  const og = await page.request.get(
    origin + new URL(metadata).pathname + new URL(metadata).search,
  );
  assert.equal(og.status(), 200);
  assert.match(og.headers()["content-type"], /image\/png/);
  await page.screenshot({ path: "artifacts/desktop-home.png" });
  assert.match(await page.locator("h1").innerText(), /Sarbesh/);
  assert.equal(await page.locator(".engineering-map, .proof-strip").count(), 0);
  assert.equal(await page.locator("section[id]").nth(1).getAttribute("id"), "projects");
  result.interactions.push("Personal introduction and projects-first layout");
  await page
    .getByRole("button", { name: "AI & Machine Learning", exact: true })
    .click();
  assert.equal(await page.locator(".skill-card").count(), 1);
  await page.getByRole("button", { name: "All disciplines" }).click();
  await page.locator(".showcase summary").first().click();
  assert.equal(await page.locator(".showcase details[open]").count(), 1);
  result.interactions.push("Skills filtering and case-study expansion");
  for (const width of [320, 375, 390, 640, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => ({
      viewport: innerWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    assert.ok(overflow.scroll <= width, JSON.stringify(overflow));
    result.layouts.push({ width, overflow: false });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "artifacts/mobile-home.png" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Skills", exact: true })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.waitForFunction(() =>
    Math.abs(document.getElementById("skills").getBoundingClientRect().top - 88) < 5,
  );
  assert.ok(
    Math.abs(
      (await page
        .locator("#skills")
        .evaluate((el) => el.getBoundingClientRect().top)) - 88,
    ) < 5,
    "Section navigation should reach its target",
  );
  assert.equal(
    await page.locator('nav a[href="/#skills"]').getAttribute("aria-current"),
    "location",
  );
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  result.interactions.push(
    "Mobile navigation, active section, Escape dismissal",
  );
  for (const route of [
    "/about",
    "/experience",
    "/projects",
    "/certifications",
    "/contact",
    "/thank-you",
  ]) {
    const response = await page.goto(origin + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200);
    assert.equal(await page.locator("h1").count(), 1);
    if (route !== "/thank-you")
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute("href"),
        "https://sarbeshtiwari.vercel.app" + route,
      );
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route + " overflows",
    );
    result.routes.push({ route, status: 200 });
  }
  await page.goto(origin + "/projects?filter=ai", { waitUntil: "networkidle" });
  assert.equal(await page.locator(".archive-card").count(), 4);
  await page.getByRole("button", { name: "Mobile apps", exact: true }).click();
  assert.equal(await page.locator(".archive-card").count(), 3);
  result.interactions.push("Project deep-link and archive filters");
  await page.goto(origin + "/certifications", { waitUntil: "networkidle" });
  const cert = page.getByRole("button", {
    name: "View Smart India Hackathon Finalist certificate",
  });
  await cert.click();
  assert.equal(await page.locator("dialog").evaluate((el) => el.open), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("dialog").evaluate((el) => el.open), false);
  await cert.focus();
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: "Close certificate" }).click();
  assert.ok(await cert.evaluate((el) => el === document.activeElement));
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((el) => el.decode());
  }
  result.interactions.push(
    "Certificate images, keyboard dialog and focus restoration",
  );
  await page.goto(origin + "/contact", { waitUntil: "networkidle" });
  await page.getByLabel("Your name").fill("Portfolio test");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test@example.com");
  await page.getByLabel("What's on your mind?").fill("Local UI test only.");
  await page.route("**/api/sendQuery", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"message":"Unavailable"}',
    }),
  );
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await page
    .getByText("Your message could not be sent.", { exact: false })
    .waitFor();
  await page.unroute("**/api/sendQuery");
  await page.route("**/api/sendQuery", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"message":"Sent"}',
    }),
  );
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await page.waitForURL("**/thank-you");
  result.interactions.push(
    "Contact error and success states (mocked; no email sent)",
  );
  const invalid = await page.request.post(origin + "/api/sendQuery", {
    data: { name: "", email: "bad", message: "" },
  });
  assert.equal(invalid.status(), 400);
  const malformed = await page.request.post(origin + "/api/sendQuery", {
    data: "{",
    headers: { "Content-Type": "application/json" },
  });
  assert.equal(malformed.status(), 400);
  result.interactions.push("API rejects invalid and malformed payloads");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(origin, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".loading-screen").count(), 0);
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  result.interactions.push(
    "Reduced motion bypasses intro and smooth scrolling",
  );
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "artifacts/full-home.png", fullPage: true });
  result.contrastReview = await page.evaluate(() => {
    const rgb = (value) => (value.match(/[\d.]+/g) || []).map(Number);
    const luminance = (color) =>
      color
        .slice(0, 3)
        .map((v) => {
          v /= 255;
          return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        })
        .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
    const background = (el) => {
      if (!el) return [255, 255, 255];
      const c = rgb(getComputedStyle(el).backgroundColor);
      const alpha = c.length === 4 ? c[3] : 1;
      if (alpha === 1) return c;
      const parent = background(el.parentElement);
      return parent.map((v, i) => c[i] * alpha + v * (1 - alpha));
    };
    return [...document.querySelectorAll("main *,nav *,footer *")]
      .filter(
        (el) =>
          [...el.childNodes].some(
            (n) => n.nodeType === 3 && n.textContent.trim(),
          ) &&
          el.getClientRects().length &&
          getComputedStyle(el).visibility !== "hidden" &&
          !el.closest('[role="img"],[aria-hidden="true"],details:not([open])'),
      )
      .map((el) => {
        const style = getComputedStyle(el),
          fg = luminance(rgb(style.color)),
          bg = luminance(background(el));
        const ratio = (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
        return {
          text: el.textContent.trim().slice(0, 70),
          class: el.className,
          ratio: Number(ratio.toFixed(2)),
          size: style.fontSize,
        };
      })
      .filter((item) => item.ratio < 4.5 && parseFloat(item.size) < 24);
  });
  const links = await page
    .locator("a[href]")
    .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
  for (const href of [...new Set(links)].filter((h) => h.startsWith("/"))) {
    const url = new URL(href, origin);
    if (url.hash && url.pathname === "/")
      assert.equal(
        await page.locator(url.hash).count(),
        1,
        "Missing " + url.hash,
      );
    else {
      const r = await page.request.get(url.href);
      assert.ok(r.status() < 400, href + " " + r.status());
    }
  }
  result.interactions.push("Homepage local links and resume download resolve");
  const noJS = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const plain = await noJS.newPage();
  await plain.goto(origin, { waitUntil: "domcontentloaded" });
  assert.ok(await plain.locator("h1").isVisible());
  assert.equal(await plain.locator(".loading-screen").count(), 0);
  await noJS.close();
  result.interactions.push(
    "Server-rendered content remains readable without JavaScript",
  );
  result.externalLinks = await Promise.all(['https://starestate.com','https://maphomesrealestate.com','https://burocrazyindia.com'].map(async url => {
    try {const response=await page.request.get(url,{timeout:10000});return {url,status:response.status()};}
    catch {return {url,status:'Could not verify from this environment'};}
  }));
  assert.deepEqual(errors, []);
  assert.deepEqual(consoleErrors, []);
  assert.deepEqual(result.contrastReview, []);
  fs.writeFileSync(
    "artifacts/verification.json",
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
