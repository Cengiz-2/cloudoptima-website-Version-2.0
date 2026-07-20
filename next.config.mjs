/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reiner statischer Export: in Produktion läuft kein Next.js-Server, damit
  // entfallen sämtliche server-seitigen Angriffsflächen (Image-Optimizer,
  // Middleware, SSRF, Cache-Poisoning). Netlify liefert nur statische Dateien.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  // Feineres Tree-Shaking für die großen Icon- und Animations-Pakete: es landen
  // nur die tatsächlich genutzten Module im Bundle statt der kompletten
  // Barrel-Exports. Rein technisch, ändert nichts an Optik oder Verhalten.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  // Entfernt console.*-Aufrufe im Produktions-Build (kleinere Bundles),
  // behält aber console.error für echte Fehler.
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
