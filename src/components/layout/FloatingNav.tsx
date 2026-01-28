// src/components/layout/FloatingNav.tsx
import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconUser,
  IconStack2,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

type NavItem = { name: string; targetId: string; icon: React.ReactNode };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", targetId: "hero", icon: <IconHome size={18} /> },
  { name: "About", targetId: "about", icon: <IconUser size={18} /> },
  { name: "Skills", targetId: "skills", icon: <IconStack2 size={18} /> },
  { name: "Projects", targetId: "projects", icon: <IconCode size={18} /> },
  { name: "Contact", targetId: "contact", icon: <IconMail size={18} /> },
];

export const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    // 1. Logic to hide nav at the very bottom (footer) or when scrolling down
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 60;

      // Hide if scrolling down OR if at the absolute bottom (to show footer)
      if (isBottom) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // 2. Intersection Observer for Active Tabs
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.targetId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className={`fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 w-full max-w-fit px-4 transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}>
      <nav className="flex items-center gap-1 p-1.5 rounded-[2rem] bg-[#101010]/80 backdrop-blur-xl border border-[#2a2a2a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.targetId;
          return (
            <button
              key={item.targetId}
              onClick={handleClick(item.targetId)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-500 group
                ${isActive ? "text-[#fcfaff]" : "text-[#fcfaff]/50 hover:text-[#fcfaff]/80"}`}
            >
              {/* Desktop background highlight */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ea5c2a] to-[#ff6c3b] -z-10 shadow-[0_0_20px_rgba(234,92,42,0.4)]" />
              )}

              <span className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                  className: isActive ? "text-[#fcfaff]" : "text-[#ea5c2a]",
                })}
              </span>

              <span className="hidden sm:block">
                {item.name}
              </span>

              {/* Mobile active indicator (bottom dot) */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ea5c2a] sm:hidden" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
