// src/components/shared/ProjectOverlay.tsx
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { Project } from "../../data/projects";

type Props = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
};

export const ProjectOverlay: React.FC<Props> = ({ open, project, onClose }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !sheetRef.current || !backdropRef.current) return;

    const container = containerRef.current;
    const sheet = sheetRef.current;
    const backdrop = backdropRef.current;

    if (open) {
      gsap.set(container, { pointerEvents: "auto" });
      gsap
        .timeline()
        .to(backdrop, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        })
        .fromTo(
          sheet,
          { y: "100%", scale: 0.98 },
          { y: "0%", scale: 1, duration: 0.45, ease: "back.out(1.4)" },
          "<"
        );
    } else {
      gsap
        .timeline({
          onComplete: () => {
            gsap.set(container, { pointerEvents: "none" });
          },
        })
        .to(sheet, {
          y: "100%",
          duration: 0.4,
          ease: "power3.in",
        })
        .to(
          backdrop,
          { opacity: 0, duration: 0.25, ease: "power2.in" },
          "<"
        );
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
      className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/70 opacity-0"
        onClick={onClose}
      />
      <div
        ref={sheetRef}
        className="relative w-full max-w-3xl bg-[#1e1e1e] border-t border-[#2a2a2a] rounded-t-3xl shadow-2xl shadow-black/90 overflow-hidden"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#2a2a2a] bg-[#101010]">
          <h3 className="text-sm font-semibold text-[#fcfaff]">
            {project?.title || "Project Details"}
          </h3>
          <button
            onClick={onClose}
            className="text-xs px-3 py-1 rounded-full border border-[#ea5c2a] text-[#fcfaff] hover:bg-[#ea5c2a]/15"
          >
            Close
          </button>
        </div>
        <div className="max-h-[65vh] overflow-y-auto px-5 py-4 text-sm">
          {project ? (
            <>
              <p className="text-[#fcfaff]/85 mb-2">
                {project.shortDescription}
              </p>
              <p className="text-xs text-[#fcfaff]/60 mb-4">
                Tech: {project.tech}
              </p>
              <h4 className="text-xs font-semibold text-[#fcfaff]/60 uppercase tracking-[0.2em] mb-2">
                Details
              </h4>
              <ul className="list-disc ml-4 space-y-2 text-[#fcfaff]/85 mb-4">
                {project.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <>
                  <h4 className="text-xs font-semibold text-[#fcfaff]/60 uppercase tracking-[0.2em] mb-2">
                    Links
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-full bg-[#ea5c2a] text-[#fcfaff] font-medium hover:bg-[#ff6c3b] transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <p className="text-[#fcfaff]/70 text-sm">No project selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};
