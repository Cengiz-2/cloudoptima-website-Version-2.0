import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

const base = "https://cloudoptima.de";

/**
 * Generierte Sitemap statt handgepflegter public/sitemap.xml.
 * lastModified für statische Seiten = Build-Zeit (bleibt automatisch aktuell),
 * für Blog-Artikel das jeweilige Veröffentlichungsdatum.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nis2", priority: 0.9, changeFrequency: "weekly" },
    { path: "/preise", priority: 0.9, changeFrequency: "monthly" },
    { path: "/control-check", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/ueber", priority: 0.6, changeFrequency: "monthly" },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
