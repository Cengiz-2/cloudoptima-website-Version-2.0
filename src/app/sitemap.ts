import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

const base = "https://cloudoptima.de";

/**
 * Generierte Sitemap statt handgepflegter public/sitemap.xml.
 *
 * lastModified ist bewusst ein gepflegtes Datum je Seite, nicht die Build-Zeit.
 * Vorher stand hier für alle Seiten `new Date()`. Damit meldete jeder Deploy
 * die komplette Seite als "gerade geändert", auch wenn nur eine Datei angefasst
 * wurde. Suchmaschinen lernen daraus, dass das Feld nichts aussagt, und crawlen
 * dann ausgerechnet langsamer nach, wenn sich wirklich etwas ändert.
 *
 * WICHTIG: Beim inhaltlichen Ändern einer Seite hier das Datum mitziehen.
 * Reine Layout- oder Technik-Änderungen brauchen das nicht.
 */
const staticRoutes: {
  path: string;
  lastModified: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", lastModified: "2026-08-14", priority: 1.0, changeFrequency: "weekly" },
  { path: "/leistungen", lastModified: "2026-08-14", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nis2", lastModified: "2026-08-14", priority: 0.9, changeFrequency: "weekly" },
  { path: "/preise", lastModified: "2026-08-14", priority: 0.9, changeFrequency: "monthly" },
  { path: "/control-check", lastModified: "2026-07-11", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", lastModified: "2026-08-14", priority: 0.7, changeFrequency: "weekly" },
  { path: "/ueber", lastModified: "2026-07-12", priority: 0.6, changeFrequency: "monthly" },
  { path: "/impressum", lastModified: "2026-07-11", priority: 0.3, changeFrequency: "yearly" },
  { path: "/datenschutz", lastModified: "2026-08-14", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Für Artikel zählt die letzte Überarbeitung, sonst das Veröffentlichungsdatum.
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
