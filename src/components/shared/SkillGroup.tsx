// src/components/shared/SkillGroup.tsx
import React from "react";

type Props = { title: string; items: string[] };

export const SkillGroup: React.FC<Props> = ({ title, items }) => (
  <div className="bg-[#101010] border border-[#2a2a2a] rounded-2xl p-4 shadow-lg shadow-black/60">
    <h3 className="text-[#fcfaff] font-semibold mb-3 text-sm">{title}</h3>
    <div className="flex flex-wrap gap-2 text-[11px]">
      {items.map((item) => (
        <span
          key={item}
          data-animate="chip"
          className="px-3 py-1 rounded-full bg-[#1e1e1e] border border-[#ea5c2a]/40 text-[#fcfaff]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
