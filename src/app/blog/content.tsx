"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { blogPosts } from "@/lib/content";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogIndexContent() {
  return (
    <main>
      <PageHero
        kicker="Blog"
        title="Praxiswissen ohne Marketing-Nebel"
        lead="Was in Microsoft-Umgebungen wirklich schiefgeht und wie Sie es verhindern. Geschrieben aus dem Betrieb, nicht aus der Broschüre."
      />

      <section className="section pt-0">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <SpotlightCard className="group h-full p-7">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-azure/25 bg-azure/10 px-3 py-1 font-mono text-xs text-azure-bright">
                        {post.tag}
                      </span>
                      <span className="font-mono text-xs text-ink-mute">{post.readingTime}</span>
                    </div>
                    <h2 className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-azure-bright">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {post.description}
                    </p>
                    <p className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <span className="font-mono text-xs text-ink-mute">
                        {formatDate(post.date)}
                      </span>
                      <ArrowRight className="h-4 w-4 text-azure-bright transition-transform duration-300 group-hover:translate-x-1" />
                    </p>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
