import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { Project } from "../../data/projects";
import {
  IconX,
  IconBrandGithub,
  IconExternalLink,
  IconCpu
} from "@tabler/icons-react";

type Props = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
};

export const ProjectOverlay: React.FC<Props> = ({ open, project, onClose }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !modalRef.current || !backdropRef.current) return;

    const container = containerRef.current;
    const modal = modalRef.current;
    const backdrop = backdropRef.current;

    if (open) {
      gsap.set(container, { display: "flex", pointerEvents: "auto" });
      gsap.timeline()
        .to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" })
        .fromTo(modal,
          { scale: 0.95, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power4.out" },
          "-=0.2"
        );
    } else {
      gsap.timeline({
        onComplete: () => {
          gsap.set(container, { display: "none", pointerEvents: "none" });
        },
      })
        .to(modal, { scale: 0.95, opacity: 0, y: 10, duration: 0.2, ease: "power2.in" })
        .to(backdrop, { opacity: 0, duration: 0.2, ease: "power2.in" }, "-=0.1");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 hidden pointer-events-none"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm opacity-0"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#0f0f0f] border border-[#ea5c2a]/30 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col opacity-0"
      >
        {/* Compact Header */}
        <div className="p-6 pb-4 border-b border-[#2a2a2a] bg-[#1a1a1a]/50 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ea5c2a] mb-1 block">Analysis Mode</span>
            <h2 className="text-xl font-black text-[#fcfaff] tracking-tight">{project?.title || "Project"}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#2a2a2a] text-[#fcfaff]/50 hover:text-[#ea5c2a] transition-all"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Dense Content - No Scroll Needed */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-[#fcfaff]/70 leading-relaxed font-medium">
            {project?.shortDescription}
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#fcfaff]/40">
              <IconCpu className="w-3.5 h-3.5" />
              Core Implementation
            </div>
            <div className="grid gap-2">
              {project?.details.map((detail, i) => (
                <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ea5c2a]" />
                  <p className="text-[13px] text-[#fcfaff]/80 font-medium">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project?.tech.split('•').map((t, idx) => (
                <span key={idx} className="px-2 py-1 rounded-md bg-[#2a2a2a] text-[9px] font-bold text-[#fcfaff]/50 border border-[#2a2a2a]">
                  {t.trim()}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {project?.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea5c2a] text-[#fcfaff] text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all"
                >
                  {link.label.toLowerCase().includes('github') ? <IconBrandGithub className="w-3.5 h-3.5" /> : <IconExternalLink className="w-3.5 h-3.5" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Footer */}
        <div className="px-6 py-3 bg-[#101010] border-t border-[#2a2a2a] text-center">
          <p className="text-[9px] font-bold text-[#fcfaff]/20 uppercase tracking-[0.3em]">
            Optimized for Technical Review
          </p>
        </div>
      </div>
    </div>
  );
};
