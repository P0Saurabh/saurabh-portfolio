// src/components/sections/Hero.tsx
import React from "react";

export const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative overflow-hidden border-b border-[#2a2a2a]"
  >
    <div className="hero-blobs pointer-events-none absolute inset-0">
      <div className="absolute -left-24 -top-32 w-80 h-80 bg-[#ea5c2a]/40 rounded-full blur-3xl" />
      <div className="absolute right-[-80px] top-10 w-80 h-80 bg-[#ea5c2a]/25 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/4 w-96 h-96 bg-[#ea5c2a]/20 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 md:pb-24 relative">
      <div className="grid md:grid-cols-[3fr,2fr] gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#fcfaff]/60 mb-2">
            SOFTWARE · DEVOPS · AI AUTOMATION
          </p>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#fcfaff]">
            SAURABH <span className="text-[#ea5c2a]">SATISH</span> PAWAR
          </h1>
          <p className="hero-subtitle mt-4 text-xl md:text-2xl font-semibold text-[#fcfaff]/80">
            Building cloud-native apps, automation systems & DevOps solutions.
          </p>
          <p className="mt-4 text-sm md:text-base text-[#fcfaff]/75 max-w-xl">
            Software &amp; DevOps Engineer focused on scalable full-stack apps,
            CI/CD pipelines, and AI-powered automation across cloud-native
            infrastructure (Docker, Kubernetes, AWS).
          </p>

          <div className="hero-tags mt-5 flex flex-wrap gap-2 text-xs">
            {[
              "Full-Stack",
              "DevOps",
              "Cloud-Native",
              "CI/CD",
              "Kubernetes",
              "Infrastructure as Code",
              "AI Automation",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#2a2a2a] text-[#fcfaff]/90 border border-[#ea5c2a]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/P0Saurabh"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center px-5 py-2.5 rounded-full bg-[#ea5c2a] text-[#fcfaff] font-semibold shadow-lg shadow-[0_0_20px_rgba(234,92,42,0.7)] hover:bg-[#ff6c3b] transition"
            >
              View GitHub
            </a>
            <a
              href="#projects"
              className="hero-cta inline-flex items-center px-5 py-2.5 rounded-full border border-[#ea5c2a] text-[#fcfaff] hover:bg-[#2a2a2a] transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 shadow-2xl shadow-black/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="hero-avatar w-10 h-10 rounded-full bg-[#ea5c2a] flex items-center justify-center text-lg font-bold text-[#fcfaff]">
                SP
              </div>
              <div>
                <p className="text-sm font-semibold">Software &amp; DevOps</p>
                <p className="text-xs text-[#fcfaff]/60">
                  India · Remote Ready
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ea5c2a]/15 text-[10px] tracking-[0.18em] uppercase text-[#ea5c2a] border border-[#ea5c2a]/60">
              Open to Job Opportunities
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-[#fcfaff]/50 text-[11px] uppercase tracking-[0.2em]">
                CONTACT
              </p>
              <p className="text-[#fcfaff] mt-1 text-xs">
                +91-9284091637 ·{" "}
                <a
                  href="mailto:saurabhsp0402@gmail.com"
                  className="underline underline-offset-2"
                >
                  saurabhsp0402@gmail.com
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[#fcfaff]/50 text-[11px] uppercase tracking-[0.2em]">
                  LINKEDIN
                </p>
                <a
                  href="https://linkedin.com/saurabh-pawar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcfaff] mt-1 block hover:underline text-xs"
                >
                  /saurabh-pawar04
                </a>
              </div>
              <div>
                <p className="text-[#fcfaff]/50 text-[11px] uppercase tracking-[0.2em]">
                  GITHUB
                </p>
                <a
                  href="https://github.com/P0Saurabh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcfaff] mt-1 block hover:underline text-xs"
                >
                  /P0Saurabh
                </a>
              </div>
            </div>
            <div className="pt-3 border-t border-[#2a2a2a]">
              <p className="text-[#fcfaff]/50 text-[11px] uppercase tracking-[0.2em]">
                EDUCATION
              </p>
              <p className="mt-1 text-[#fcfaff] text-sm">
                B.Tech – Computer Science &amp; Engineering
              </p>
              <p className="text-[#fcfaff]/70 text-xs">
                Mahatma Gandhi Mission&apos;s College of Engineering · CGPA 8.4/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
