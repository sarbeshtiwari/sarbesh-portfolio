"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "../components/ui";
export default function ContactClient() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const data = new FormData(e.currentTarget);
    setBusy(true);
    setMessage("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/sendQuery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        signal: controller.signal,
      });
      if (response.ok) {
        router.push("/thank-you");
        return;
      }
      setMessage(
        "Your message could not be sent. Please try again or email me directly.",
      );
    } catch {
      setMessage("Unable to connect. Please try again or use the email link.");
    } finally {
      clearTimeout(timeout);
      setBusy(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} aria-busy={busy}>
      <h2>Tell me what you're thinking.</h2>
      <div className="form-field">
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Alex Morgan"
          required
          maxLength={100}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="alex@company.com"
          required
          maxLength={254}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">What's on your mind?</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="A project, an opportunity, or just a hello…"
          rows={5}
          required
          maxLength={5000}
        />
      </div>
      <button className="btn-primary" type="submit" disabled={busy}>
        {busy ? "Sending your message…" : "Send message"}
        <Icon name="arrow" />
      </button>
      <p className="form-status" role="status">
        {message}
      </p>
    </form>
  );
}
