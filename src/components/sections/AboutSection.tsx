import React from "react";
import { IconCpu, IconBook, IconSchool, IconCode } from "@tabler/icons-react";

export const AboutSection: React.FC = () => (
  <section id="about" className="mt-20 lg:mt-32 max-w-5xl mx-auto px-4">

    <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-start">

      {/* Left Text Column */}
      <div className="md:col-span-7 lg:col-span-7">
        <span className="text-[#ea5c2a] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-6 block">
          01 // The Profile
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-[#fcfaff] mb-8 leading-tight">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea5c2a] to-[#ff8f6b]">AI-Driven Ecosystems.</span>
        </h2>

        <div className="space-y-6 text-[#fcfaff]/70 text-base md:text-lg leading-relaxed font-light">
          <p>
            I don't just build software; I build <strong className="text-[#fcfaff] font-bold">market dominance</strong>. Operating at the intersection of High-Performance DevOps and Commercial Strategy, I bridge the gap between Enterprise-Grade Engineering and Strategic Growth.
          </p>
          <p>
            Leveraging my background as a <span className="text-[#ea5c2a]">Google Professional Cloud DevOps Engineer</span>, I deploy resilient microservices, custom AI logic, and scalable web architectures that ensure your tech is an asset, not a liability.
          </p>
          <p>
            My Methodology: <em className="text-[#fcfaff] not-italic font-medium">"Robust, self-healing infrastructures. Code that talks to market strategy."</em>
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-8 mt-12 pt-12 border-t border-[#ffffff]/10">
          <div>
            <span className="block text-3xl md:text-4xl font-black text-[#fcfaff]">20+</span>
            <span className="text-xs uppercase tracking-widest text-[#fcfaff]/40 mt-1 block">Projects</span>
          </div>
          <div className="bg-[#ea5c2a] w-px h-12 opacity-20" />
          <div>
            <span className="block text-3xl md:text-4xl font-black text-[#fcfaff]">2</span>
            <span className="text-xs uppercase tracking-widest text-[#fcfaff]/40 mt-1 block">Papers</span>
          </div>
          <div className="bg-[#ea5c2a] w-px h-12 opacity-20" />
          <div>
            <span className="block text-3xl md:text-4xl font-black text-[#fcfaff]">4+</span>
            <span className="text-xs uppercase tracking-widest text-[#fcfaff]/40 mt-1 block">Yrs Coding</span>
          </div>
        </div>
      </div>

      {/* Right Decor/Education Column */}
      <div className="md:col-span-5 lg:col-span-5 w-full space-y-6">

        {/* Education Card */}
        <div className="group relative bg-[#1a1a1a] rounded-[2rem] border border-[#ffffff]/10 p-8 hover:border-[#ea5c2a]/30 transition-all duration-500 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea5c2a]/5 rounded-full blur-3xl -mr-10 -mt-10" />

          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 text-[#ea5c2a]">
              <IconSchool className="w-5 h-5" />
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#fcfaff]/40 font-bold mb-2">Education</h3>
            <div className="text-xl font-bold text-[#fcfaff] mb-1">B.Tech Computer Science</div>
            <div className="text-sm text-[#ea5c2a] font-medium mb-6">MGM’s College of Engineering</div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs pb-3 border-b border-[#ffffff]/5">
                <span className="text-[#fcfaff]/50">Term</span>
                <span className="font-mono text-[#fcfaff]">2021 — 2025</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#fcfaff]/50">CGPA</span>
                <span className="font-mono text-[#ea5c2a] bg-[#ea5c2a]/10 px-2 py-0.5 rounded">6.8 / 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests/Focus Mini-Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#101010] p-4 rounded-2xl border border-[#ffffff]/5 flex flex-col gap-3 hover:border-[#ea5c2a]/20 transition-colors">
            <IconCpu className="w-5 h-5 text-[#fcfaff]/30" />
            <span className="text-xs font-bold text-[#fcfaff]/80">System Design</span>
          </div>
          <div className="bg-[#101010] p-4 rounded-2xl border border-[#ffffff]/5 flex flex-col gap-3 hover:border-[#ea5c2a]/20 transition-colors">
            <IconCode className="w-5 h-5 text-[#fcfaff]/30" />
            <span className="text-xs font-bold text-[#fcfaff]/80">Automation</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);
