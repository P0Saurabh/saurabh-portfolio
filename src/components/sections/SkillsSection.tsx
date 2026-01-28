import React from "react";
import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGit,
  IconDatabase,
  IconServer,
  IconCloud,
  IconTerminal,
  IconCode,
  IconCpu
} from "@tabler/icons-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="mt-20 relative">
      <div className="flex flex-col items-center mb-16 px-4 text-center">
        <span className="text-[#ea5c2a] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
          Technological Arsenal
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#fcfaff] tracking-tight">
          Engineering <span className="text-[#ea5c2a] selection:bg-[#ea5c2a] selection:text-white">Capacities</span>
        </h2>
        <p className="mt-4 text-[#fcfaff]/50 max-w-lg text-sm md:text-base leading-relaxed">
          A curated stack of tools and frameworks I leverage to build robust, scalable, and automated systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 relative z-10">

        {/* Core Langs - Large Block */}
        <div className="md:col-span-3 lg:col-span-4 bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#ffffff]/5 rounded-[2rem] p-8 hover:border-[#ea5c2a]/30 transition-all duration-500 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ea5c2a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-[#ea5c2a]/10 flex items-center justify-center mb-6">
              <IconCode className="w-6 h-6 text-[#ea5c2a]" />
            </div>
            <h3 className="text-xl font-bold text-[#fcfaff] mb-2">Core Languages</h3>
            <p className="text-[#fcfaff]/40 text-xs font-mono mb-6 uppercase tracking-wider">The Foundation</p>

            <div className="mt-auto space-y-4">
              {[
                { name: "Python", icon: <IconBrandPython className="w-5 h-5" /> },
                { name: "JavaScript (ES6+)", icon: <IconBrandJavascript className="w-5 h-5" /> },
                { name: "TypeScript", icon: <IconCode className="w-5 h-5" /> }, // Fallback for TS icon
                { name: "Bash / Shell", icon: <IconTerminal className="w-5 h-5" /> },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#ffffff]/5 flex items-center justify-center text-[#fcfaff]/60 group-hover/item:text-[#ea5c2a] group-hover/item:bg-[#ea5c2a]/10 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-[#fcfaff]/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Stack - Wide Block */}
        <div className="md:col-span-3 lg:col-span-4 bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#ffffff]/5 rounded-[2rem] p-8 hover:border-[#ea5c2a]/30 transition-all duration-500 group relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea5c2a]/10 blur-[50px] rounded-full group-hover:bg-[#ea5c2a]/20 transition-all duration-500" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#ea5c2a]/10 flex items-center justify-center mb-6">
              <IconServer className="w-6 h-6 text-[#ea5c2a]" />
            </div>
            <h3 className="text-xl font-bold text-[#fcfaff] mb-2">Modern Stack</h3>
            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "Next.js", "Node.js", "Express", "FastAPI", "TailwindCSS", "Framer Motion"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#ffffff]/5 border border-[#ffffff]/5 text-xs text-[#fcfaff]/70 hover:bg-[#ea5c2a] hover:text-white hover:border-[#ea5c2a] transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#ffffff]/5">
              <div className="flex items-center justify-between text-xs text-[#fcfaff]/40 font-mono">
                <span>BACKEND</span>
                <span className="w-16 h-px bg-[#ffffff]/10" />
                <span>FRONTEND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps - Tall/Large Block */}
        <div className="md:col-span-6 lg:col-span-4 bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#ffffff]/5 rounded-[2rem] p-8 hover:border-[#ea5c2a]/30 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#ea5c2a]/5 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#ea5c2a]/10 flex items-center justify-center">
                <IconCloud className="w-6 h-6 text-[#ea5c2a]" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#ea5c2a] bg-[#ea5c2a]/10 px-3 py-1 rounded-full">Primary Focus</span>
            </div>

            <h3 className="text-xl font-bold text-[#fcfaff] mb-6">DevOps & Cloud</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "AWS", icon: <IconBrandAws className="w-5 h-5" /> },
                { name: "Docker", icon: <IconBrandDocker className="w-5 h-5" /> },
                { name: "Kubernetes", icon: <IconCloud className="w-5 h-5" /> },
                { name: "Terraform", icon: <IconDatabase className="w-5 h-5" /> },
                { name: "CI/CD", icon: <IconCpu className="w-5 h-5" /> },
                { name: "Linux", icon: <IconTerminal className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#ffffff]/5 hover:bg-[#ffffff]/10 hover:scale-105 transition-all duration-300 border border-[#ffffff]/5 hover:border-[#ea5c2a]/30 group/box">
                  <span className="mb-3 text-[#fcfaff]/50 group-hover/box:text-[#ea5c2a] transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-[#fcfaff]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Databases - Horizontal Strip */}
        <div className="md:col-span-6 lg:col-span-8 bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#ffffff]/5 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#ea5c2a]/30 transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#2a2a2a] flex items-center justify-center shrink-0">
              <IconDatabase className="w-5 h-5 text-[#fcfaff]/70" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#fcfaff]">Data Persistence</h4>
              <p className="text-xs text-[#fcfaff]/40">Robust storage solutions</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {["MongoDB", "PostgreSQL", "Redis", "Firebase"].map(db => (
              <span key={db} className="px-4 py-2 rounded-xl bg-[#101010] border border-[#2a2a2a] text-xs font-semibold text-[#fcfaff]/70">
                {db}
              </span>
            ))}
          </div>
        </div>

        {/* Tools - Remaining Strip */}
        <div className="md:col-span-6 lg:col-span-4 bg-[#gradient-to-br] from-[#ea5c2a] to-[#ff8f6b] rounded-[2rem] p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#ea5c2a] opacity-90" />
          {/* Decor */}
          <IconBrandGit className="absolute -right-4 -bottom-4 w-32 h-32 text-black/10 rotate-12" />

          <div className="relative z-10 text-white">
            <h4 className="text-lg font-black uppercase italic tracking-wider mb-1">Version Control</h4>
            <p className="text-white/80 text-xs font-medium mb-4">Mastery over Git flows</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <IconBrandGit className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <IconCode className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
