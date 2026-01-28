import React from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "../shared/ProjectCard";
import {
  IconCode,
  IconClick,
  IconRocket
} from "@tabler/icons-react";

type Props = {
  onProjectClick: (project: Project) => void;
};

export const ProjectsSection: React.FC<Props> = ({ onProjectClick }) => (
  <section
    id="projects"
    className="panel mt-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/80"
  >
    <div className="flex items-center justify-between gap-4 mb-10">
      <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#fcfaff] relative inline-block">
        Selected Projects
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#ea5c2a] rounded-full" />
      </h2>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a2a2a]/50 border border-[#2a2a2a] text-[10px] uppercase tracking-widest font-black text-[#ea5c2a]">
        <IconClick className="w-3.5 h-3.5" />
        Tap to explore
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
