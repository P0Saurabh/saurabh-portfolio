// src/components/sections/AboutSection.tsx
import React from "react";

export const AboutSection: React.FC = () => (
  <section
    id="about"
    className="panel mt-10 bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70"
  >
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
        <h2 className="text-lg md:text-xl font-semibold mb-3">About</h2>
        <p className="text-sm md:text-base text-[#fcfaff]/80 leading-relaxed">
          Motivated Software and DevOps Engineer with strong foundations in Python,
          JavaScript, and Cloud Computing. Experienced in building scalable
          full-stack applications, automating CI/CD pipelines, and deploying
          containerized solutions on AWS &amp; Kubernetes. Passionate about combining
          software craftsmanship with DevOps and AI automation to deliver secure,
          reliable, and high-performance systems.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-[#101010] p-4 rounded-2xl border border-[#2a2a2a]">
        <h3 className="text-sm font-semibold text-[#ea5c2a] mb-2 uppercase tracking-wider">
          Education
        </h3>
        <p className="text-sm font-medium text-[#fcfaff]">
          B.Tech in Computer Science
        </p>
        <p className="text-xs text-[#fcfaff]/60 mt-1">
          MGM’s College of Engineering, Nanded
        </p>
        <p className="text-xs text-[#fcfaff]/50 mt-1">
          Aug 2021 – Sep 2025
        </p>
        <p className="text-xs text-[#ea5c2a]/80 mt-2 font-mono">
          CGPA: 6.8 / 10
        </p>
      </div>
    </div>
  </section>
);
