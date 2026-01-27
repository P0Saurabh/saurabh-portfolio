// src/components/shared/TimelineItem.tsx
import React from "react";

type Props = {
  role: string;
  time: string;
  bullets: string[];
};

export const TimelineItem: React.FC<Props> = ({ role, time, bullets }) => (
  <div className="relative group pl-2">
    <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#1a1a1a] border-2 border-[#ea5c2a] shadow-[0_0_15px_rgba(234,92,42,0.3)] group-hover:bg-[#ea5c2a] transition-all duration-300 flex items-center justify-center z-10">
      <div className="w-1.5 h-1.5 rounded-full bg-[#ea5c2a] group-hover:bg-[#fcfaff]" />
    </div>
    <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:gap-3">
      <h3 className="text-[#fcfaff] font-bold text-base md:text-lg group-hover:text-[#ea5c2a] transition-colors">{role}</h3>
      <span className="text-[10px] md:text-xs font-semibold text-[#fcfaff]/40 bg-[#2a2a2a] px-2 py-0.5 rounded-full border border-[#2a2a2a] w-fit">
        {time}
      </span>
    </div>
    <ul className="text-sm text-[#fcfaff]/70 space-y-2 mt-3 list-none">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea5c2a]/40 mt-1.5 shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);
