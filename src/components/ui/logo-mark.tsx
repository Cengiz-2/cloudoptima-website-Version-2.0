import { useId } from "react";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-b`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0" stopColor="#0B1E33" />
          <stop offset="1" stopColor="#050B14" />
        </linearGradient>
        <linearGradient id={`${id}-s`} gradientUnits="userSpaceOnUse" x1="20" y1="20" x2="80" y2="75">
          <stop offset="0" stopColor="#6FD4FF" />
          <stop offset="1" stopColor="#1E6FD0" />
        </linearGradient>
      </defs>
      <rect
        width="100"
        height="100"
        rx="24"
        fill={`url(#${id}-b)`}
        stroke="#16324F"
        strokeWidth="2"
      />
      <g transform="translate(6,3)">
        <path
          d="M 67 40 A 17 17 0 0 0 35 31 A 11 11 0 0 0 21 48 A 10 10 0 0 0 29 64 L 62 64"
          fill="none"
          stroke={`url(#${id}-s)`}
          strokeWidth="9.5"
          strokeLinecap="round"
        />
        <circle cx="68" cy="54" r="6.5" fill="#9FE1FF" />
      </g>
    </svg>
  );
}
