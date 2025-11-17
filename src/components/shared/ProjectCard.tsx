// src/components/shared/ProjectCard.tsx
import React from "react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
  <button
    onClick={onClick}
    className="project-card group rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-5 shadow-xl shadow-black/80 text-left transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(234,92,42,0.7)] focus:outline-none focus:ring-2 focus:ring-[#ea5c2a]"
  >
    <h3 className="text-lg font-semibold text-[#fcfaff] mb-2">
      {project.title}
    </h3>
    <p className="text-sm text-[#fcfaff]/80 mb-3 line-clamp-3">
      {project.shortDescription}
    </p>
    <p className="text-xs text-[#fcfaff]/60 mb-4">Tech: {project.tech}</p>
    <span className="inline-flex items-center text-xs text-[#ea5c2a] group-hover:text-[#ff6c3b]">
      View Details
      <span className="ml-1 transition-transform group-hover:translate-x-1">
        ↓
      </span>
    </span>
  </button>
);
