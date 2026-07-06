/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reiner statischer Export: in Produktion läuft kein Next.js-Server, damit
  // entfallen sämtliche server-seitigen Angriffsflächen (Image-Optimizer,
  // Middleware, SSRF, Cache-Poisoning). Netlify liefert nur statische Dateien.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
