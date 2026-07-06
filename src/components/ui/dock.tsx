"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  BarChart3,
  CircleHelp,
  Columns2,
  Home,
  Mail,
  ShieldCheck,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { EASE } from "@/lib/motion";

type DockLink = { label: string; href: string; icon: LucideIcon };

const links: DockLink[] = [
  { label: "Start", href: "#start", icon: Home },
  { label: "Leistungen", href: "#leistungen", icon: ShieldCheck },
  { label: "Vergleich", href: "#vergleich", icon: Columns2 },
  { label: "Reporting", href: "#reporting", icon: BarChart3 },
  { label: "Preise", href: "#preise", icon: Tag },
  { label: "FAQ", href: "#faq", icon: CircleHelp },
  { label: "Kontakt", href: "#kontakt", icon: Mail },
];

function DockItem({ mouseX, link }: { mouseX: MotionValue<number>; link: DockLink }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-110, 0, 110], [44, 68, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  const Icon = link.icon;

  return (
    <motion.a
      ref={ref}
      href={link.href}
      aria-label={link.label}
      style={{ width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex aspect-square items-center justify-center rounded-xl border border-line bg-raised/80 text-ink-soft transition-colors hover:border-azure/40 hover:text-azure-bright"
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="absolute -top-9 whitespace-nowrap rounded-md border border-line bg-void px-2 py-1 font-mono text-xs text-ink"
          >
            {link.label}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon className="h-5 w-5" />
    </motion.a>
  );
}

/** Schwebendes Apple-Dock zur Sektions-Navigation (Desktop, 21st.dev apple-dock). */
export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      aria-label="Schnellnavigation"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="glass fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 items-end gap-2 rounded-2xl px-3 py-2 lg:flex"
    >
      {links.map((link) => (
        <DockItem key={link.href} mouseX={mouseX} link={link} />
      ))}
    </motion.nav>
  );
}
