export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://josephjack.vercel.app/sitemap.xml",
  };
}
