import React from "react";
import { TimelineItem } from "../shared/TimelineItem";
import {
  IconAward,
  IconExternalLink
} from "@tabler/icons-react";


export const ExperienceSection: React.FC = () => (
  <section id="experience" className="mt-32 relative">
    {/* Section Header */}
    <div className="flex flex-col items-start mb-16 px-4">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-[2px] bg-[#ea5c2a]" />
        <span className="text-[#ea5c2a] font-mono text-xs uppercase tracking-[0.3em] font-bold">
          Professional Journey
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-[#fcfaff] tracking-tight leading-none">
        Experience & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea5c2a] to-[#ff8f6b]">Leadership</span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 relative z-10">

      {/* Timeline Column */}
      <div className="relative pl-4 md:pl-0">
        {/* Glass Panel Background for Timeline */}
        <div className="absolute inset-0 bg-[#1a1a1a]/20 backdrop-blur-3xl -z-10 rounded-[2rem] border border-[#ffffff]/5" />

        <div className="p-6 md:p-8 space-y-12">
          <div className="relative border-l-2 border-[#ffffff]/10 space-y-16 pl-8 ml-3">
            <TimelineItem
              role="Freelancer – Full-Stack Consultant"
              time="Ongoing"
              bullets={[
                "Architecting scalable digital solutions (MERN/Next.js) aligned with client revenue goals.",
                "Implementing AI Process Automation (n8n) to reduce operational overhead.",
                "Delivering technical SEO strategies alongside robust backend architecture.",
              ]}
            />
            <TimelineItem
              role="Vice Organizer – GDG on Campus"
              time="Sep 2024 – Sep 2025"
              bullets={[
                "Orchestrated large-scale hackathons focused on Docker & Kubernetes.",
                "Managed community growth and technical content delivery strategy.",
              ]}
            />
            <TimelineItem
              role="Project Head – GDG on Campus"
              time="Aug 2023 – Aug 2024"
              bullets={[
                "Led technical projects and workshops enabling student developers.",
                "Fostered an environment of open-source contribution and peer learning.",
              ]}
            />
            <TimelineItem
              role="Microsoft Student Ambassador"
              time="Apr 2024 – Present"
              bullets={[
                "Leading technical workshops on Azure Cloud & DevOps methodologies.",
                "Reached Beta milestone: Organizing larger events and mentoring new ambassadors.",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Right Column: Certifications & Research */}
      <div className="space-y-8">

        {/* Certifications Block */}
        <div className="bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#ffffff]/5 rounded-[2rem] p-8 hover:border-[#ea5c2a]/30 transition-all duration-500 group">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-[#ea5c2a]/10 text-[#ea5c2a]">
              <IconAward className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#fcfaff]">Certifications</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Red Hat Certified System Administrator (RHCSA)",
                issuer: "Red Hat",
                bg: "bg-red-500/10",
                text: "text-red-500",
                border: "border-red-500/20",
                url: "https://www.credly.com/badges/a170e5d9-45ad-45d1-82e5-161f0947caef/linked_in_profile"
              },
              {
                title: "Professional Cloud DevOps Engineer",
                issuer: "Google Cloud",
                bg: "bg-blue-500/10",
                text: "text-blue-500",
                border: "border-blue-500/20",
                url: "https://www.credly.com/badges/605192a5-d2bf-4e26-8783-f59ffc69daee/linked_in_profile"
              },
              {
                title: "Microsoft Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                bg: "bg-sky-500/10",
                text: "text-sky-500",
                border: "border-sky-500/20",
                url: null
              }
            ].map((cert, i) => (
              <a
                key={i}
                href={cert.url || "#"}
                target={cert.url ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`block relative overflow-hidden rounded-xl p-4 border ${cert.border} bg-[#101010]/50 hover:bg-[#151515] transition-all group/cert`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${cert.text} mb-1 block`}>{cert.issuer}</span>
                    <h4 className="text-sm font-bold text-[#fcfaff] group-hover/cert:text-white leading-snug pr-4">{cert.title}</h4>
                  </div>
                  {cert.url && <IconExternalLink className="w-4 h-4 text-[#fcfaff]/20 group-hover/cert:text-[#ea5c2a] transition-colors" />}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Research Papers Block */}
        <div className="bg-gradient-to-bl from-[#1a1a1a] to-[#0d0d0d] border border-[#ffffff]/5 rounded-[2rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea5c2a]/10 blur-[40px] rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#fcfaff]">Research</h3>
              <span className="px-3 py-1 rounded-full bg-[#ea5c2a]/10 border border-[#ea5c2a]/20 text-[#ea5c2a] text-[10px] font-black uppercase tracking-widest">
                2 Papers
              </span>
            </div>

            <p className="text-sm text-[#fcfaff]/60 mb-6 leading-relaxed">
              Contributing to the academic understanding of <strong className="text-[#fcfaff]">AI-driven Systems</strong> and Cloud Automation.
            </p>

            <div className="space-y-3">
              <a href="https://doi.org/10.36948/ijfmr.2024.v06i05.26970" target="_blank" rel="noopener noreferrer" aria-label="Read IJFMR Publication on AI Systems" className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff]/5 hover:bg-[#ea5c2a]/10 transition-colors group/paper">
                <div className="w-8 h-8 rounded-lg bg-[#000] flex items-center justify-center text-[#fcfaff]/50 font-serif font-bold text-xs border border-[#ffffff]/10">1</div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#fcfaff] group-hover/paper:text-[#ea5c2a] transition-colors">IJFMR Publication</div>
                  <div className="text-[10px] text-[#fcfaff]/40">2024 · AI Systems</div>
                </div>
                <IconExternalLink className="w-4 h-4 text-[#fcfaff]/20 group-hover/paper:text-[#ea5c2a]" />
              </a>
              <a href="https://doi.org/10.56025/IJARESM.2025.130225474" target="_blank" rel="noopener noreferrer" aria-label="Read IJARESM Publication" className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff]/5 hover:bg-[#ea5c2a]/10 transition-colors group/paper">
                <div className="w-8 h-8 rounded-lg bg-[#000] flex items-center justify-center text-[#fcfaff]/50 font-serif font-bold text-xs border border-[#ffffff]/10">2</div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#fcfaff] group-hover/paper:text-[#ea5c2a] transition-colors">IJARESM Publication</div>
                  <div className="text-[10px] text-[#fcfaff]/40">2025 · Impact Factor 8.5</div>
                </div>
                <IconExternalLink className="w-4 h-4 text-[#fcfaff]/20 group-hover/paper:text-[#ea5c2a]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

