import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artikel nicht gefunden | CloudOptima" };
  return {
    title: `${post.title} | CloudOptima Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.description,
      url: `https://cloudoptima.de/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogArticlePage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `https://cloudoptima.de/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "de-DE",
    author: { "@type": "Person", name: site.owner },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: "https://cloudoptima.de/logo.svg" },
    },
    mainEntityOfPage: url,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://cloudoptima.de/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://cloudoptima.de/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main className="relative overflow-hidden pb-24 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div
        aria-hidden
        className="grid-bg absolute inset-x-0 top-0 h-96 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
      />
      <article className="relative mx-auto max-w-2xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-ink-mute transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Alle Artikel
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-ink-mute">
          <span className="rounded-full border border-azure/25 bg-azure/10 px-3 py-1 text-azure-bright">
            {post.tag}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime} Lesezeit</span>
        </div>

        <h1 className="mt-6 text-balance font-display text-4xl font-semibold text-ink md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.description}</p>

        <div className="mt-10 space-y-6 border-t border-line pt-10">
          {post.blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="pt-4 font-display text-2xl font-semibold text-ink">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-2.5 pl-5">
                  {block.items.map((item) => (
                    <li key={item} className="list-disc leading-relaxed text-ink-soft marker:text-azure">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="leading-relaxed text-ink-soft">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-azure/25 bg-azure/5 p-7">
          <p className="font-display text-lg font-semibold text-ink">
            Wissen, wo Ihre Umgebung steht?
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Der 15-Minuten Control-Check gibt Ihnen eine ehrliche Ersteinschätzung.
            Acht Fragen, sofortiges Ergebnis, keine Anmeldung.
          </p>
          <Link
            href="/control-check"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-azure px-6 py-3 font-display text-sm font-medium text-void transition-transform hover:scale-[1.03] active:scale-95"
          >
            Control-Check starten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
