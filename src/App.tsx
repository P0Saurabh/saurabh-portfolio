// src/App.tsx
"use client";

import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatedBackground } from "./components/layout/AnimatedBackground";
import { FloatingNav } from "./components/layout/FloatingNav";
import { NowPlayingStrip } from "./components/layout/NowPlayingStrip";
import { Hero } from "./components/sections/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ProjectOverlay } from "./components/shared/ProjectOverlay";
import type { PROJECTS, Project } from "./data/projects";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projectOverlayOpen, setProjectOverlayOpen] = useState(false);

  useLayoutEffect(() => {
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
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });
          tl.from(card, {
            opacity: 0,
            scale: 0.92,
            y: 24,
            duration: 0.5,
            ease: "power3.out",
          }).to(card, {
            y: -4,
            duration: 2,
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

      <main className="max-w-6xl mx-auto px-4 pb-20">
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

      <footer className="py-5 text-center text-xs text-[#fcfaff]/60 bg-[#101010] border-t border-[#2a2a2a]">
        &copy; {new Date().getFullYear()} Saurabh Satish Pawar · React · GSAP · DevOps &amp; AI.
      </footer>
    </div>
  );
};

export default App;
