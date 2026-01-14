import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

export const metadata = {
  title: "NovaStack Digital | Web Development Company in Kenya",
  description:
    "NovaStack Digital is a professional web development company in Kenya specializing in fast, SEO-optimized websites, React, Next.js, and scalable backend solutions.",
  keywords: [
    "Web development company in Kenya",
    "Next.js developer Kenya",
    "React developer Kenya",
    "Full-stack developer Kenya",
    "SEO optimized websites Kenya",
  ],
  openGraph: {
    title: "NovaStack Digital | Web Development Company in Kenya",
    description:
      "We build fast, secure, and SEO-optimized websites using Next.js, React, and modern backend technologies.",
    url: "https://novastackdigital.com",
    siteName: "NovaStack Digital",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "NovaStack Digital Web Development",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

function homePage() {
  return (
    <main className="main">
      <HeroSection />
      <section>
        <Services />
      </section>
    </main>
  );
}

export default homePage;
