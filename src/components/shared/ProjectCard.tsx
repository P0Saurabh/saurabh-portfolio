// src/components/shared/ProjectCard.tsx
import React from "react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

import { IconExternalLink, IconCode, IconBrowser, IconTerminal2 } from "@tabler/icons-react";

export const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  const getIcon = () => {
    if (project.id === 'jsvoice') return <IconCode className="w-5 h-5" />;
    if (project.id === 'proctor') return <IconBrowser className="w-5 h-5" />;
    return <IconTerminal2 className="w-5 h-5" />;
  };

  return (
    <button
      onClick={onClick}
      className="project-card group relative flex flex-col h-full rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] hover:bg-[#1f1f1f] p-6 text-left transition-all duration-300 hover:border-[#ea5c2a]/40 hover:shadow-[0_20px_40px_-20px_rgba(234,92,42,0.3)] focus:outline-none"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-[#2a2a2a] text-[#ea5c2a] group-hover:bg-[#ea5c2a] group-hover:text-[#fcfaff] transition-colors duration-300">
          {getIcon()}
        </div>
        <IconExternalLink className="w-4 h-4 text-[#fcfaff]/20 group-hover:text-[#ea5c2a] transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-[#fcfaff] mb-2 leading-tight group-hover:text-[#ea5c2a] transition-colors">
        {project.title}
      </h3>

      <p className="text-xs text-[#fcfaff]/50 font-bold uppercase tracking-wider mb-3">
        {project.tech.split('•')[0]} + More
      </p>

      <p className="text-sm text-[#fcfaff]/60 mb-6 line-clamp-3 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="mt-auto flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#ea5c2a]">
        View Analysis
        <div className="w-4 h-px bg-[#ea5c2a] scale-x-50 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#ea5c2a]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
    </button>
  );
};
