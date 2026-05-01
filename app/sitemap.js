import { portfolioData } from "@/data/portfolio";

export default function sitemap() {
  const baseUrl = "https://rubankumar.dev"; // Update this with your actual domain

  const routes = ["", "/projects", "/architecture", "/comms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
