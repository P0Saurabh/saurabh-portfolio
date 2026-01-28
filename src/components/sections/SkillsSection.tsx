import React from "react";
import { SkillGroup } from "../shared/SkillGroup";
import { IconDatabase } from "@tabler/icons-react";

export const SkillsSection: React.FC = () => (
  <section
    id="skills"
    className="panel mt-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/80"
  >
    <div className="mb-10">
      <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#fcfaff] relative inline-block">
        Skill Stack
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#ea5c2a] rounded-full" />
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6 text-sm">
      <SkillGroup title="Languages" items={["Python", "JavaScript", "Bash"]} />
      <SkillGroup
        title="Frameworks & Tools"
        items={["React.js", "Node.js", "Express.js", "Django", "Flask", "FastAPI"]}
      />
      <SkillGroup title="Databases" items={["MongoDB", "MySQL", "Firebase"]} />
      <SkillGroup
        title="Cloud & DevOps"
        items={[
          "AWS (EC2, S3, Lambda, CloudWatch)",
          "Azure (AZ-900)",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Terraform (Basic)",
          "CI/CD Pipelines",
        ]}
      />
      <SkillGroup title="Version Control" items={["Git", "GitHub", "GitLab"]} />
      <SkillGroup
        title="Core Concepts"
        items={[
          "RESTful APIs",
          "Microservices",
          "System Design",
          "Linux Administration",
        ]}
      />
    </div>
  </section>
);
