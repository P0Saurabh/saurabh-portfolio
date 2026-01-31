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
  metadataBase: new URL("https://devops-porfolio-henna.vercel.app"),
  title: {
    default: "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
    template: "%s | Saurabh Pawar"
  },
  description: "Architecting AI-Driven Digital Ecosystems. Portfolio of Google Cloud Professional DevOps Engineer & Red Hat System Administrator specializing in Scalable Automated Infrastructures and High-Performance Web Architectures.",
  keywords: [
    "Saurabh Pawar",
    "Saurabh Satish Pawar",
    "DevOps Engineer",
    "Cloud DevOps Architect",
    "Full-Stack Developer",
    "GCP Professional DevOps Engineer",
    "Red Hat Certified System Administrator",
    "RHCSA",
    "Google Cloud Certified",
    "Kubernetes Expert",
    "Docker",
    "Terraform",
    "CI/CD Pipeline",
    "Infrastructure as Code",
    "AI Automation",
    "System Design",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AWS",
    "Azure",
    "Python Developer",
    "Pune Engineer",
    "India Tech",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Saurabh Satish Pawar", url: "https://devops-porfolio-henna.vercel.app" }],
  creator: "Saurabh Satish Pawar",
  publisher: "Saurabh Satish Pawar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://devops-porfolio-henna.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
    description: "Bridging the gap between Enterprise-Grade Engineering and Strategic Growth. Architecting AI-driven digital ecosystems with expertise in GCP, AWS, Kubernetes, and modern web technologies.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Saurabh Pawar - DevOps & Full-Stack Engineer Portfolio",
      },
    ],
    url: "https://devops-porfolio-henna.vercel.app",
    siteName: "Saurabh Pawar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
    description: "Architecting AI-Driven Digital Ecosystems. Google Cloud Professional DevOps Engineer & Red Hat System Administrator.",
    images: ["/logo.png"],
    creator: "@saurabhpawar04",
  },
  verification: {
    google: "5F58VJT4czWc-nVFCgw9adUc-tGCkAt9WZMzu158bOU",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://devops-porfolio-henna.vercel.app/#person",
      "name": "Saurabh Satish Pawar",
      "alternateName": "Saurabh Pawar",
      "url": "https://devops-porfolio-henna.vercel.app",
      "image": {
        "@type": "ImageObject",
        "url": "https://devops-porfolio-henna.vercel.app/logo.png",
        "width": 400,
        "height": 400
      },
      "jobTitle": "Cloud DevOps Architect & Full-Stack Engineer",
      "description": "Google Cloud Professional DevOps Engineer & Red Hat Certified System Administrator specializing in scalable cloud infrastructures and high-performance web applications.",
      "email": "saurabhsp0402@gmail.com",
      "telephone": "+919284091637",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "MGM's College of Engineering"
      },
      "knowsAbout": [
        "DevOps", "Cloud Computing", "Kubernetes", "Docker", "AWS", "GCP", "Azure",
        "Terraform", "CI/CD", "Python", "JavaScript", "TypeScript", "React", "Next.js",
        "System Design", "Infrastructure as Code", "Linux Administration"
      ],
      "sameAs": [
        "https://github.com/P0Saurabh",
        "https://linkedin.com/in/saurabh-pawar04"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Red Hat Certified System Administrator (RHCSA)",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "Red Hat" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Google Cloud Professional DevOps Engineer",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Microsoft Azure Fundamentals (AZ-900)",
          "credentialCategory": "certification",
          "recognizedBy": { "@type": "Organization", "name": "Microsoft" }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://devops-porfolio-henna.vercel.app/#website",
      "url": "https://devops-porfolio-henna.vercel.app",
      "name": "Saurabh Pawar Portfolio",
      "description": "Portfolio of Saurabh Pawar - Cloud DevOps Architect & Full-Stack Engineer",
      "publisher": { "@id": "https://devops-porfolio-henna.vercel.app/#person" },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://devops-porfolio-henna.vercel.app/#webpage",
      "url": "https://devops-porfolio-henna.vercel.app",
      "name": "Saurabh Pawar | Cloud DevOps Architect & Full-Stack Engineer",
      "isPartOf": { "@id": "https://devops-porfolio-henna.vercel.app/#website" },
      "about": { "@id": "https://devops-porfolio-henna.vercel.app/#person" },
      "description": "Architecting AI-Driven Digital Ecosystems. Portfolio showcasing DevOps, Cloud, and Full-Stack Engineering projects.",
      "inLanguage": "en-US"
    }
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
