import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/providers/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabhpawar.com"),
  title: "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
  description: "Architecting AI-Driven Digital Ecosystems. Portfolio of Google Cloud Professional DevOps Engineer & Red Hat System Administrator specializing in Scalable Automated Infrastructures and High-Performance Web Architectures.",
  keywords: [
    "Saurabh portfolio",
    "Cloud DevOps",
    "GCP Professional",
    "Red Hat Certified",
    "RHCSA",
    "AI Automation",
    "System Design",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "Kubernetes",
    "AWS",
    "Market Dominance",
    "Pune",
    "India"
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
    description: "Bridging the gap between Enterprise-Grade Engineering and Strategic Growth. Architecting AI-driven digital ecosystems.",
    images: ["/logo.png"],
    url: "https://saurabhpawar.com",
    siteName: "Saurabh Pawar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saurabh Satish Pawar",
  "url": "https://saurabhpawar.com", // Replace with actual URL if known, but keeping it generic or using a placeholder is fine
  "logo": "/logo.png",
  "image": "/logo.png",
  "jobTitle": "DevOps & Software Engineer",
  "sameAs": [
    "https://github.com/P0Saurabh",
    "https://linkedin.com/in/saurabh-pawar04"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
