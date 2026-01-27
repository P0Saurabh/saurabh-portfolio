"use client";

import React, { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { NowPlayingStrip } from "@/components/layout/NowPlayingStrip";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectOverlay } from "@/components/shared/ProjectOverlay";
import type { Project } from "@/data/projects";

// Ensure GSAP plugins are registered safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Isomorphic layout effect to avoid server-side warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projectOverlayOpen, setProjectOverlayOpen] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl
        .from(".hero-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-subtitle",
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hero-tags",
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        );

      gsap.to(".hero-avatar", {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-blobs", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils
        .toArray<HTMLElement>(".panel")
        .forEach((panel: HTMLElement) => {
          gsap.from(panel, {
            y: 60,
            opacity: 0,
            rotateX: -8,
            duration: 0.7,
            ease: "power3.out",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='chip']")
        .forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 10,
            duration: 0.4,
            delay: i * 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((card: HTMLElement) => {
          // Entrance animation (no opacity change)
          gsap.from(card, {
            y: 24,
            scale: 0.96,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });

          // Subtle idle float effect
          gsap.to(card, {
            y: -4,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
    });

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setProjectOverlayOpen(true);
  };

  return (
    <div className="min-h-screen text-[#fcfaff] relative">
      <AnimatedBackground />
      <FloatingNav />
      <NowPlayingStrip />

      <Hero />

      <main className="max-w-6xl mx-auto px-4 pb-8">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onProjectClick={handleProjectClick} />
        <ExperienceSection />
        <ContactSection />
      </main>

      <ProjectOverlay
        open={projectOverlayOpen && !!activeProject}
        project={activeProject}
        onClose={() => setProjectOverlayOpen(false)}
      />

      <footer className="py-12 text-center text-xs text-[#fcfaff]/40 bg-[#101010] border-t border-[#2a2a2a] flex flex-col items-center gap-4 relative z-10">
        <Image
          src="/logo.png"
          alt="Saurabh Satish Pawar Logo"
          width={40}
          height={40}
          className="rounded-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
        />
        <p className="max-w-xs mx-auto leading-relaxed">
          &copy; {new Date().getFullYear()} Saurabh Satish Pawar<br />
          <span className="text-[10px] opacity-60">Crafted with Next.js · GSAP · DevOps Precision</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
