// src/components/sections/SkillsSection.tsx
import React from "react";
import { SkillGroup } from "../shared/SkillGroup";

export const SkillsSection: React.FC = () => (
  <section
    id="skills"
    className="panel mt-8 bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70"
  >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg md:text-xl font-semibold">Skill Stack</h2>
      <span className="text-xs text-[#fcfaff]/60">From idea → code → cloud.</span>
    </div>
    <div className="grid md:grid-cols-2 gap-6 text-sm">
      <SkillGroup title="Languages" items={["Python", "JavaScript", "Bash"]} />
      <SkillGroup
        title="Frameworks & Tools"
        items={["React.js", "Node.js", "Express.js", "Django", "Flask", "FastAPI"]}
      />
      <SkillGroup title="Databases" items={["MongoDB", "MySQL", "Firebase"]} />
      <SkillGroup
        title="DevOps & Cloud"
        items={[
          "AWS (EC2, S3, Lambda, CloudWatch)",
          "Azure (AZ-900)",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Terraform (basic)",
          "CI/CD Pipelines",
        ]}
      />
      <SkillGroup title="Version Control" items={["Git", "GitHub", "GitLab"]} />
      <SkillGroup
        title="AI & Automation"
        items={[
          "AI Integrations in Workflows",
          "AI-based Proctoring & Monitoring",
          "Voice-based UI Automation (JSVoice)",
          "Automation of Cloud & DevOps Tasks",
        ]}
      />
    </div>
  </section>
);
