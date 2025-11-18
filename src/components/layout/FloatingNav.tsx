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
    <>
      {/* 🖥️ Desktop / Tablet – top-center floating pill */}
      <div
        className={`fixed z-40 left-1/2 top-4 -translate-x-1/2 transition-all duration-300 
        hidden sm:block
        ${hidden ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <nav className="flex items-center gap-2 rounded-full bg-[#101010]/85 border border-[#2a2a2a] px-3 py-2 shadow-xl shadow-black/50 backdrop-blur-md max-w-[90vw]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.targetId}
              onClick={handleClick(item.targetId)}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium 
                         text-[#fcfaff]/70 hover:text-[#fcfaff] hover:bg-[#2a2a2a] transition"
            >
              <span className="text-[#ea5c2a]">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* 📱 Mobile – bottom sticky nav */}
      <div
        className={`fixed z-40 inset-x-0 bottom-3 px-3 sm:hidden transition-all duration-300
        ${hidden ? "translate-y-16 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <nav className="mx-auto max-w-md rounded-3xl bg-[#101010]/95 border border-[#2a2a2a] shadow-2xl shadow-black/70 backdrop-blur-md">
          <ul className="flex items-center justify-between px-2 py-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.targetId}>
                <button
                  onClick={handleClick(item.targetId)}
                  className="flex flex-col items-center justify-center px-2 py-1 text-[10px] text-[#fcfaff]/70 hover:text-[#fcfaff]"
                >
                  <span className="mb-[2px] flex items-center justify-center rounded-full p-1.5 bg-[#1e1e1e] border border-[#2a2a2a]">
                    {React.cloneElement(item.icon as React.ReactElement<any>, {
                      className: "w-4 h-4 text-[#ea5c2a]",
                    })}
                  </span>
                  <span className="leading-none mt-[1px]">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
