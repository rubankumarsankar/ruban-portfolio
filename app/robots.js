export default function robots() {
  const baseUrl = "https://rubankumar.dev"; // Update this with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
