// src/components/layout/NowPlayingStrip.tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const DEFAULT_STATUSES = [
  "Currently hacking on: JSVoice AI-powered voice commands",
  "Experimenting with: Kubernetes + GitHub Actions CI/CD lab",
  "Exploring: AI-based real-time proctoring workflows",
];

type Props = {
  statuses?: string[];
};

export const NowPlayingStrip: React.FC<Props> = ({ statuses = DEFAULT_STATUSES }) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!textRef.current) {
        setIndex((prev) => (prev + 1) % statuses.length);
        return;
      }
      gsap
        .timeline()
        .to(textRef.current, {
          opacity: 0,
          y: 8,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            setIndex((prev) => (prev + 1) % statuses.length);
          },
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        });
    }, 4000);

    return () => clearInterval(interval);
  }, [statuses.length]);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="flex items-center gap-3 rounded-full bg-[#101010]/85 border border-[#2a2a2a] px-4 py-2 shadow-lg shadow-black/60 backdrop-blur-md">
        <div className="flex items-end gap-[3px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[3px] h-3 rounded-full bg-[#ea5c2a]"
              style={{
                animation: `equalizer-bar 0.9s ease-in-out ${i * 0.15}s infinite`,
                transformOrigin: "bottom center",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#fcfaff]/60">
            Now Playing
          </span>
          <div
            ref={textRef}
            className="text-xs text-[#fcfaff]/85 whitespace-nowrap"
          >
            {statuses[index]}
          </div>
        </div>
      </div>
    </div>
  );
};
