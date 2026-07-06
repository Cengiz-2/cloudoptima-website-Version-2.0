"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Hero3D = dynamic(() => import("./hero-3d"), { ssr: false });

/**
 * Lädt die 3D-Szene nur auf Desktop mit feinem Zeiger und ohne
 * Reduced-Motion-Wunsch. Hält die mobile Ladezeit sauber.
 */
export function Hero3DLazy({ className }: { className?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) setShow(true);
  }, []);

  if (!show) return null;
  return (
    <div className={className} aria-hidden>
      <Hero3D />
    </div>
  );
}
