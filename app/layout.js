import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { ViewportProvider } from "@/context/ViewportContext";
import GlobalViewportWrapper from "@/components/GlobalViewportWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.title}`,
    template: `%s | ${portfolioData.personalInfo.name}`,
  },
  description: portfolioData.home.heroDescription,
  icons: {
    icon: "/favicon.png",
  },
  keywords: ["Python Backend Developer", "FastAPI", "Next.js Portfolio", "Software Engineer Chennai", "Data Engineering"],
  authors: [{ name: portfolioData.personalInfo.name }],
  creator: portfolioData.personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rubankumar.dev",
    title: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.title}`,
    description: portfolioData.home.heroDescription,
    siteName: `${portfolioData.personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.title}`,
    description: portfolioData.home.heroDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.personalInfo.name,
    "jobTitle": portfolioData.personalInfo.title,
    "url": "https://rubankumar.dev",
    "sameAs": [
      portfolioData.personalInfo.github,
      portfolioData.personalInfo.linkedin
    ],
    "description": portfolioData.home.heroDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressCountry": "India"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0F19]">
        <ViewportProvider>
          <GlobalViewportWrapper>
            {children}
          </GlobalViewportWrapper>
        </ViewportProvider>
      </body>
    </html>
  );
}
