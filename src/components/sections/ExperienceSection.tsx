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
            role="Microsoft Student Ambassador"
            time="Apr 2024 – Sept 2025"
            bullets={[
              "Ran workshops on Azure, GitHub & DevOps tooling.",
              "Mentored peers on cloud & AI automation.",
            ]}
          />
          <TimelineItem
            role="Vice Organiser – GDG Groups on Campus"
            time="Sept 2024 – Sept 2025"
            bullets={[
              "Organised hackathons & Docker / K8s sessions.",
              "Promoted open-source & collaborative DevOps culture.",
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
            <p className="text-[#fcfaff]/80">
              <a
                href="https://learn.microsoft.com/en-gb/users/saurabhpawar-0489/transcript"
                target="_blank"
                rel="noopener noreferrer"
                
              >
              Microsoft Azure Fundamentals (AZ-900)
              </a>
            </p>
          </div>
          <div className="bg-[#101010] border border-[#2a2a2a] rounded-2xl p-4 text-xs">
            <h3 className="text-[#fcfaff] font-semibold mb-2 text-sm">
              Research Papers
            </h3>
            <p className="mb-1">
              2024 ·{" "}
              <a
                href="https://doi.org/10.36948/ijfmr.2024.v06i05.26970"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                DOI Link
              </a>
            </p>
            <p>
              2025 · IJARESM (Impact Factor 8.536) ·{" "}
              <a
                href="https://doi.org/10.56025/IJARESM.2025.130225474"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
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
