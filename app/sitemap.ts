import type { MetadataRoute } from "next";
import { publicPages, site } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map(({ path }) => ({
    url: new URL(path, site.url).href,
    priority: path === "/" ? 1 : 0.8,
  }));
}
