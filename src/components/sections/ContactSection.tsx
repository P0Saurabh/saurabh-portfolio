// src/components/sections/ContactSection.tsx
import React from "react";

export const ContactSection: React.FC = () => (
  <section
    id="contact"
    className="panel mt-8 bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70 mb-10"
  >
    <div className="flex flex-col items-center text-center gap-4">
      <h2 className="text-lg md:text-xl font-semibold">Let&apos;s build something.</h2>
      <p className="text-sm md:text-base text-[#fcfaff]/80 max-w-xl">
        Open to internships and roles at the intersection of Software, DevOps,
        and AI automation. Reach out for projects, ideas or collaborations.
      </p>
      <div className="space-y-2 text-sm md:text-base">
        <p>
          <span className="text-[#fcfaff]/60">Phone · </span>
          <span className="text-[#fcfaff] font-medium">+91-9284091637</span>
        </p>
        <p>
          <span className="text-[#fcfaff]/60">Email · </span>
          <a
            href="mailto:saurabhsp0402@gmail.com"
            className="text-[#fcfaff] font-medium underline-offset-2 hover:underline"
          >
            saurabhsp0402@gmail.com
          </a>
        </p>
      </div>
    </div>
  </section>
);
