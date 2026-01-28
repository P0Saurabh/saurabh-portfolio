"use client";
import React, { useState } from "react";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconPhone,
  IconCopy,
  IconCheck,
  IconArrowRight
} from "@tabler/icons-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("saurabhsp0402@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-20 md:mt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="relative bg-[#101010] rounded-[3rem] border border-[#2a2a2a] p-8 md:p-16 overflow-hidden">
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea5c2a]/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ea5c2a]/5 blur-[80px] rounded-full -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Call to Action */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea5c2a]/10 border border-[#ea5c2a]/20 text-[#ea5c2a] text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ea5c2a] animate-pulse" />
              Open to Opportunities
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#fcfaff] tracking-tighter leading-[0.9] mb-8">
              Let&apos;s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea5c2a] to-[#ff8f6b]">The Future.</span>
            </h2>

            <p className="text-[#fcfaff]/60 text-lg md:text-xl font-light max-w-md leading-relaxed mb-10">
              Reliability Engineer, Full-Stack Developer, or System Architect? However you define the role, I bring the engineering precision to fill it.
            </p>

            {/* Email Copy Interaction */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleCopy}
                className="group relative flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222222] border border-[#333] hover:border-[#ea5c2a]/50 px-6 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-2 rounded-lg bg-[#ea5c2a]/10 text-[#ea5c2a]">
                  <IconMail className="w-6 h-6" />
                </div>
                <div className="text-left mr-8">
                  <div className="text-[10px] uppercase text-[#fcfaff]/40 font-bold tracking-wider">Mail me directly</div>
                  <div className="text-[#fcfaff] font-mono text-sm md:text-base font-medium">saurabhsp0402@gmail.com</div>
                </div>
                <div className="absolute right-4 text-[#fcfaff]/30 group-hover:text-[#ea5c2a] transition-colors">
                  {copied ? <IconCheck className="w-5 h-5" /> : <IconCopy className="w-5 h-5" />}
                </div>
              </button>
            </div>
          </div>

          {/* Right: Connect Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/saurabh-pawar04"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-[2rem] bg-[#1a1a1a]/50 border border-[#2a2a2a] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5 transition-all duration-300 flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <IconBrandLinkedin className="w-8 h-8 text-[#fcfaff]/50 group-hover:text-[#0077b5] transition-colors" />
                <IconArrowRight className="w-5 h-5 text-[#fcfaff]/20 -rotate-45 group-hover:rotate-0 group-hover:text-[#0077b5] transition-all duration-300" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#fcfaff]">LinkedIn</div>
                <div className="text-sm text-[#fcfaff]/40">Professional network</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/P0Saurabh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-[2rem] bg-[#1a1a1a]/50 border border-[#2a2a2a] hover:border-[#fcfaff]/50 hover:bg-[#fcfaff]/5 transition-all duration-300 flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <IconBrandGithub className="w-8 h-8 text-[#fcfaff]/50 group-hover:text-[#fcfaff] transition-colors" />
                <IconArrowRight className="w-5 h-5 text-[#fcfaff]/20 -rotate-45 group-hover:rotate-0 group-hover:text-[#fcfaff] transition-all duration-300" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#fcfaff]">GitHub</div>
                <div className="text-sm text-[#fcfaff]/40">Code & Contributions</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919284091637"
              className="group sm:col-span-2 p-6 rounded-[2rem] bg-[#1a1a1a]/50 border border-[#2a2a2a] hover:border-[#ea5c2a]/50 hover:bg-[#ea5c2a]/5 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#ea5c2a]/10 text-[#ea5c2a]">
                  <IconPhone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#fcfaff]">+91 92840 91637</div>
                  <div className="text-sm text-[#fcfaff]/40">Available for calls</div>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full bg-[#fcfaff] text-black text-xs font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                Call Now
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
