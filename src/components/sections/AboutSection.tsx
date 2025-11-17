// src/components/sections/AboutSection.tsx
import React from "react";

export const AboutSection: React.FC = () => (
  <section
    id="about"
    className="panel mt-10 bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70"
  >
    <h2 className="text-lg md:text-xl font-semibold mb-3">About</h2>
    <p className="text-sm md:text-base text-[#fcfaff]/80 leading-relaxed">
      Motivated Software and DevOps Engineer with strong foundations in Python,
      JavaScript, and Cloud Computing. Experienced in building scalable
      full-stack applications, automating CI/CD pipelines, and deploying
      containerized solutions on AWS &amp; Kubernetes. Passionate about combining
      software craftsmanship with DevOps and AI automation to deliver secure,
      reliable, and high-performance systems.
    </p>
  </section>
);
