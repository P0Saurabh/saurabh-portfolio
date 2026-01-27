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
  title: "Saurabh Satish Pawar | DevOps & Software Engineer",
  description: "Portfolio of Saurabh Satish Pawar - Full Stack Developer, DevOps Engineer, and AI Automation expert. Specialized in cloud-native infrastructure, CI/CD, and scalable applications.",
  keywords: ["DevOps", "Software Engineer", "React", "GSAP", "Cloud Native", "Kubernetes", "AWS", "Full Stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
