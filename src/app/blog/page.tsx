import type { Metadata } from "next";
import { BlogIndexContent } from "./content";

export const metadata: Metadata = {
  title: "Blog | CloudOptima",
  description:
    "Praxiswissen zu Microsoft 365, Azure, NIS2 und Security für den Mittelstand. Ohne Marketing-Nebel.",
};

export default function BlogPage() {
  return <BlogIndexContent />;
}
