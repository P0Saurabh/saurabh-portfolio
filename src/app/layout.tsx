import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Saurabh Satish Pawar | DevOps & Software Engineer",
  description: "Portfolio of Saurabh Satish Pawar - Full Stack Developer, DevOps Engineer, and AI Automation expert. Specialized in cloud-native infrastructure, CI/CD, and scalable applications.",
  keywords: ["DevOps", "Software Engineer", "React", "GSAP", "Cloud Native", "Kubernetes", "AWS", "Full Stack"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Saurabh Satish Pawar | DevOps & Software Engineer",
    description: "Portfolio of Saurabh Satish Pawar - Full Stack Developer",
    images: ["/logo.png"],
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
        {children}
      </body>
    </html>
  );
}
