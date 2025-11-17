// src/components/sections/ProjectsSection.tsx
import React from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "../shared/ProjectCard";

type Props = {
  onProjectClick: (project: Project) => void;
};

export const ProjectsSection: React.FC<Props> = ({ onProjectClick }) => (
  <section
    id="projects"
    className="panel mt-8 bg-[#1e1e1e]/95 border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-xl shadow-black/70"
  >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg md:text-xl font-semibold">Selected Projects</h2>
      <span className="text-xs text-[#fcfaff]/60">
        Tap a card to open the overlay.
      </span>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  </section>
);
