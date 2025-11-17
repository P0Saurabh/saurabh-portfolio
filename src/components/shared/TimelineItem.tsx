// src/components/shared/TimelineItem.tsx
import React from "react";

type Props = {
  role: string;
  time: string;
  bullets: string[];
};

export const TimelineItem: React.FC<Props> = ({ role, time, bullets }) => (
  <div className="relative pl-5">
    <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-[#ea5c2a] shadow-[0_0_10px_rgba(234,92,42,0.9)]" />
    <h3 className="text-[#fcfaff] font-semibold text-sm md:text-base">{role}</h3>
    <p className="text-xs text-[#fcfaff]/60 mb-2">{time}</p>
    <ul className="list-disc text-xs md:text-sm text-[#fcfaff]/80 ml-4 space-y-1">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);
