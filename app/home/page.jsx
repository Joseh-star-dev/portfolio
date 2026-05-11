import HeroSection from "@/components/Hero";
import React from "react";
import AboutPage from "../about/page";
import Contact from "../contact/page";
import ServicesPage from "../services/page";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

// HIGH-LEVEL SEO CONFIGURATION
export const metadata = {
  title: "JMMLabs | Software Development Agency in Kenya",
  description:
    "JMMLabs is a leading digital transformation agency in Nairobi, Kenya. We specialize in custom software development, high-performance Next.js websites, and scalable enterprise solutions for modern businesses.",
  keywords: [
    "Software Development Agency Kenya",
    "Custom Business Systems Nairobi",
    "Hire Next.js Developers Kenya",
    "Professional Web Design Kenya",
    "Mobile App Development Nairobi",
    "Enterprise Software Solutions East Africa",
    "SEO Experts Kenya",
    "JMMLabs Software",
  ],
  authors: [{ name: "JMMLabs Team" }],
  creator: "JMMLabs",
  publisher: "JMMLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "JMMLabs | Cutting-Edge Software Solutions in Kenya",
    description:
      "Transform your business with JMMLabs. We build fast, secure, and profit-driven digital products using React, Next.js, and Node.js.",
    url: "https://novastackdigital.co.ke",
    siteName: "JMMLabs Software Solutions",
    images: [
      {
        url: "/og-image.png", // Create a professional OG image with your Blue/Red branding
        width: 1200,
        height: 630,
        alt: "JMMLabs Software Development Team Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JMMLabs | Top-Rated Developers in Kenya",
    description:
      "Expert software engineering and digital marketing to scale your business.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://novastackdigital.co.ke",
  },
};

export default function HomePage() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* 
          STRATEGIC SEO TIP: 
          Wrap sections in semantic tags and ensure your 
          child components (About, Services) use <h2> instead of <h1> 
          to keep the page's SEO hierarchy perfect.
      */}

      <HeroSection />

      {/* Services Section - Usually focused on core offerings */}
      <section id="services" className="py-10 bg-gray-50/50">
        <ServicesPage />
      </section>

      {/* About Section - Focused on trust and authority */}
      <section id="about" className="py-10 border-t border-gray-100">
        <AboutPage />
      </section>

      <section id="testimonials" className="py-10 bg-white">
        <Testimonials />
      </section>
      {/* Contact Section - The primary conversion point */}
      <section id="contact" className="py-10 bg-white">
        <Contact />
      </section>

      {/* Structured Data for SEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "JMMLabs",
            image: "https://novastackdigital.co.ke/jmmlabslogo.png",
            url: "https://novastackdigital.co.ke",
            telephone: "+254113822842",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nairobi, Kenya",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            serviceType: "Software Development, Web Design, SEO",
            areaServed: "Kenya",
            priceRange: "$$",
          }),
        }}
      />
    </main>
  );
}
