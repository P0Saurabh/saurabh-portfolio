// src/components/layout/FloatingNav.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  IconHome,
  IconUser,
  IconStack2,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

type NavItem = { name: string; targetId: string; icon: React.ReactNode };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", targetId: "hero", icon: <IconHome className="w-4 h-4" /> },
  { name: "About", targetId: "about", icon: <IconUser className="w-4 h-4" /> },
  { name: "Skills", targetId: "skills", icon: <IconStack2 className="w-4 h-4" /> },
  { name: "Projects", targetId: "projects", icon: <IconCode className="w-4 h-4" /> },
  { name: "Contact", targetId: "contact", icon: <IconMail className="w-4 h-4" /> },
];

export const FloatingNav: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScroll.current + 5 && y > 160) setHidden(true);
      else if (y < lastScroll.current - 5) setHidden(false);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-4 left-1/2 z-40 -translate-x-1/2 transition-all duration-400 ${
        hidden ? "-translate-y-16 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <nav className="flex items-center gap-2 rounded-full bg-[#101010]/85 border border-[#2a2a2a] px-3 py-2 shadow-xl shadow-black/50 backdrop-blur-md">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.targetId}
            onClick={handleClick(item.targetId)}
            className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-[#fcfaff]/70 hover:text-[#fcfaff] hover:bg-[#2a2a2a] transition"
          >
            <span className="text-[#ea5c2a]">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
