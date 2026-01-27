// src/components/sections/ExperienceSection.tsx
import React from "react";
import { TimelineItem } from "../shared/TimelineItem";

export const ExperienceSection: React.FC = () => (
  <section className="panel mt-8 bg-gradient-to-r from-[#101010]/90 via-[#1e1e1e] to-[#101010]/90 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70">
    <div className="grid md:grid-cols-[3fr,2fr] gap-8">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Experience &amp; Leadership
        </h2>
        <div className="border-l border-[#2a2a2a] space-y-8 pl-4">
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
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Certifications &amp; Research
        </h2>
        <div className="space-y-4 text-sm">
          <div className="bg-[#101010] border border-[#2a2a2a] rounded-2xl p-4">
            <h3 className="text-[#fcfaff] font-semibold mb-2 text-sm">
              Certifications
            </h3>
            <ul className="space-y-2 text-[#fcfaff]/80">
              <li>
                <a
                  href="https://www.credly.com/badges/a170e5d9-45ad-45d1-82e5-161f0947caef/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea5c2a] transition-colors"
                >
                  Red Hat Certified System Administrator (RHCSA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.credly.com/badges/605192a5-d2bf-4e26-8783-f59ffc69daee/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ea5c2a] transition-colors"
                >
                  Professional Cloud DevOps Engineer – Google Cloud
                </a>
              </li>
              <li>
                <span className="hover:text-[#ea5c2a] transition-colors cursor-default">
                  Microsoft Azure Fundamentals (AZ-900)
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-[#101010] border border-[#2a2a2a] rounded-2xl p-4 text-xs">
            <h3 className="text-[#fcfaff] font-semibold mb-2 text-sm">
              Research Papers
            </h3>
            <p className="mb-2 text-[#fcfaff]/70">
              Published 2 peer-reviewed research papers on AI-based systems.
            </p>
            <p className="mb-1">
              2024 ·{" "}
              <a
                href="https://doi.org/10.36948/ijfmr.2024.v06i05.26970"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#ea5c2a]"
              >
                IJFMR (DOI)
              </a>
            </p>
            <p>
              2025 · IJARESM (Impact Factor: 8.536) ·{" "}
              <a
                href="https://doi.org/10.56025/IJARESM.2025.130225474"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#ea5c2a]"
              >
                DOI Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
