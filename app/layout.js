import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joseph Jack | Frontend Developer",
  description:
    "I build modern, fast, and scalable web applications using React, Next.js, Node.js, and Express — including e-commerce, dashboards, APIs, and full-stack systems.",
  keywords: [
    "frontend developer kenya",
    "react developer kenya",
    "nextjs developer",
    "fullstack developer kenya",
    "software developer portfolio",
    "react dev",
    "web developer kenya"
  ],
  openGraph: {
    title: "Joseph Jack | Full Stack Developer",
    description:
      "Explore my portfolio showcasing modern React, Next.js, and Node.js projects. I develop e-commerce sites, dashboards, APIs, and custom software solutions.",
    url: "https://josephjack.vercel.app",
    siteName: "Joseph Jack Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <script
             type="application/ld+json"
             dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Joseph Jack",
            jobTitle: "Full Stack Developer",
            url: "https://josephjack.vercel.app",
            sameAs: [
            "https://github.com/YOUR_GITHUB", // <-- GIVE ME SO I UPDATE
            "https://linkedin.com/in/YOUR_LINKEDIN" // <-- GIVE ME SO I UPDATE
            ]
           }),
          }}
        />

      </body>
    </html>
  );
}
