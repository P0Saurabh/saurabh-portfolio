import React from "react";
import { TimelineItem } from "../shared/TimelineItem";
import {
  IconAward,
  IconFileText,
  IconCertificate,
  IconExternalLink,
  IconBriefcase,
  IconUsers
} from "@tabler/icons-react";

export const ExperienceSection: React.FC = () => (
  <section className="panel mt-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/80">
    <div className="mb-12">
      <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#fcfaff] relative inline-block">
        Experience & Leadership
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#ea5c2a] rounded-full" />
      </h2>
    </div>

    <div className="grid lg:grid-cols-[1.8fr,1.2fr] gap-12">
      {/* Experience Column */}
      <div>
        {/* Sub-header removed as we moved it to the main section header */}

        <div className="relative border-l-2 border-[#ea5c2a]/20 space-y-12 pl-8 ml-3">
          <TimelineItem
            role="Freelancer – Full-Stack Developer & Digital Solutions Consultant"
            time="Ongoing"
            bullets={[
              "Delivered custom software solutions aligned with client business requirements and growth objectives.",
              "Improved application visibility and performance through SEO optimization and system-level enhancements.",
              "Collaborated closely with stakeholders to translate ideas into reliable, production-ready digital solutions.",
            ]}
          />
          <TimelineItem
            role="Microsoft Student Ambassador"
            time="Apr 2024 – Sep 2025"
            bullets={[
              "Conducted hands-on workshops on Microsoft Azure, GitHub, and DevOps-related tools.",
              "Mentored peers on cloud fundamentals, automation, and emerging AI technologies.",
            ]}
          />
          <TimelineItem
            role="Vice Organiser – Google Developers Group on Campus"
            time="Sep 2024 – Sep 2025"
            bullets={[
              "Organised hackathons and technical sessions focused on Docker, Kubernetes, and cloud-native deployment practices.",
            ]}
          />
        </div>
      </div>

      {/* Certifications & Research Column */}
      <div className="space-y-10">
        {/* Certifications Card */}
        <div>
          <div className="mb-6">
            <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#fcfaff]/90 border-l-2 border-[#ea5c2a] pl-3">
              Certifications
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Red Hat Certified System Administrator (RHCSA)",
                url: "https://www.credly.com/badges/a170e5d9-45ad-45d1-82e5-161f0947caef/linked_in_profile",
                issuer: "Red Hat"
              },
              {
                title: "Professional Cloud DevOps Engineer – Google Cloud",
                url: "https://www.credly.com/badges/605192a5-d2bf-4e26-8783-f59ffc69daee/linked_in_profile",
                issuer: "Google Cloud"
              },
              {
                title: "Microsoft Azure Fundamentals (AZ-900)",
                url: null,
                issuer: "Microsoft"
              }
            ].map((cert, i) => (
              <div
                key={i}
                className="group relative bg-[#101010]/60 border border-[#2a2a2a] rounded-2xl p-4 hover:border-[#ea5c2a]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#ea5c2a] font-bold mb-1">
                      {cert.issuer}
                    </p>
                    <h3 className="text-sm font-semibold text-[#fcfaff] group-hover:text-[#ea5c2a] transition-colors leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#fcfaff]/40 hover:text-[#ea5c2a] transition-colors"
                    >
                      <IconExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers Card */}
        <div>
          <div className="mb-6">
            <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#fcfaff]/90 border-l-2 border-[#ea5c2a] pl-3">
              Research Papers
            </h2>
          </div>

          <div className="bg-[#101010]/60 border border-[#2a2a2a] rounded-2xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea5c2a]/5 blur-3xl rounded-full" />

            <p className="text-sm text-[#fcfaff]/70 mb-6 leading-relaxed">
              Published <span className="text-[#ea5c2a] font-bold">2 peer-reviewed</span> research papers focused on AI-driven systems and automation.
            </p>

            <div className="space-y-4">
              <div className="relative pl-4 border-l border-[#ea5c2a]/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-[#ea5c2a] bg-[#ea5c2a]/10 px-2 py-0.5 rounded">2024</span>
                  <span className="text-[11px] text-[#fcfaff]/50">IJFMR Publication</span>
                </div>
                <a
                  href="https://doi.org/10.36948/ijfmr.2024.v06i05.26970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium hover:text-[#ea5c2a] transition-colors inline-flex items-center gap-1 group/link"
                >
                  View Publication <IconExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="relative pl-4 border-l border-[#ea5c2a]/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-[#ea5c2a] bg-[#ea5c2a]/10 px-2 py-0.5 rounded">2025</span>
                  <span className="text-[11px] text-[#fcfaff]/50">Impact Factor: 8.536</span>
                </div>
                <a
                  href="https://doi.org/10.56025/IJARESM.2025.130225474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium hover:text-[#ea5c2a] transition-colors inline-flex items-center gap-1 group/link"
                >
                  IJARESM (DOI Link) <IconExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

