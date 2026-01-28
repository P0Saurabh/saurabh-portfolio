import React from "react";
import Image from "next/image";
import {
    IconMail,
    IconBrandLinkedin,
    IconBrandGithub,
    IconTerminal2,
    IconArrowRight
} from "@tabler/icons-react";

export const Hero: React.FC = () => (
    <section
        id="hero"
        className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-32 md:py-0 md:pb-20"
    >
        {/* Background Gradients */}
        <div className="hero-blobs pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#ea5c2a]/10 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-screen" />
            <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-[#ea5c2a]/5 rounded-full blur-[100px] -z-10" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                {/* Left Content Side */}
                <div className="flex-1 flex flex-col items-start text-left w-full">

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#ffffff]/5 border border-[#ffffff]/10 backdrop-blur-md mb-8 hover:border-[#ea5c2a]/30 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea5c2a] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea5c2a]"></span>
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fcfaff]/60 font-medium">
                            System Status: Online
                        </span>
                    </div>

                    <h1 className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-[#fcfaff] leading-[0.9] mb-8">
                        SAURABH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea5c2a] via-[#ff8f6b] to-[#ea5c2a] bg-[length:200%_auto] animate-gradient">
                            S. PAWAR
                        </span>
                    </h1>

                    <div className="space-y-8 max-w-2xl">
                        <p className="hero-subtitle text-xl md:text-2xl font-light text-[#fcfaff]/80 leading-relaxed">
                            <strong className="text-[#fcfaff] font-bold">Architecting AI-Driven Digital Ecosystems.</strong><br />
                            Bridging the gap between Enterprise-Grade Engineering and Strategic Growth.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <a
                            href="#projects"
                            className="group px-8 py-4 rounded-full bg-[#fcfaff] text-[#101010] font-black hover:bg-[#eaeaea] transition-all flex items-center gap-2 uppercase text-[11px] tracking-[0.2em]"
                        >
                            <IconTerminal2 className="w-4 h-4" />
                            View Work
                        </a>
                        <a
                            href="https://github.com/P0Saurabh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 rounded-full border border-[#ffffff]/20 bg-[#ffffff]/5 text-[#fcfaff] font-black hover:bg-[#ffffff]/10 hover:border-[#ea5c2a]/50 transition-all flex items-center gap-2 uppercase text-[11px] tracking-[0.2em]"
                        >
                            Github
                            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right - Profile Specs Card */}
                <div className="w-full max-w-[420px] lg:w-auto shrink-0 relative lg:mt-12">
                    <div className="absolute inset-0 bg-[#ea5c2a] blur-[60px] opacity-20" />

                    <div className="bg-[#121212]/80 backdrop-blur-2xl border border-[#ffffff]/10 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl">
                        {/* Card Header with Avatar */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-2xl bg-[#1e1e1e] border border-[#333] overflow-hidden relative">
                                <Image
                                    src="/logo.png"
                                    alt="Saurabh Logo"
                                    fill
                                    className="object-cover p-2"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#fcfaff] tracking-tight">Saurabh Pawar</h3>
                                <p className="text-xs text-[#ea5c2a] font-mono uppercase mt-1 tracking-widest">DevOps Engineer</p>
                            </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-[#2a2a2a]">
                                <div className="text-[10px] text-[#fcfaff]/40 uppercase font-bold tracking-wider mb-1">Focus</div>
                                <div className="text-sm font-bold text-[#fcfaff]">Cloud Native</div>
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-[#2a2a2a]">
                                <div className="text-[10px] text-[#fcfaff]/40 uppercase font-bold tracking-wider mb-1">Stack</div>
                                <div className="text-sm font-bold text-[#fcfaff]">Full-Stack</div>
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-[#2a2a2a]">
                                <div className="text-[10px] text-[#fcfaff]/40 uppercase font-bold tracking-wider mb-1">Location</div>
                                <div className="text-sm font-bold text-[#fcfaff]">India</div>
                            </div>
                            <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-[#2a2a2a]">
                                <div className="text-[10px] text-[#fcfaff]/40 uppercase font-bold tracking-wider mb-1">Exp</div>
                                <div className="text-sm font-bold text-[#fcfaff]">4+ Years</div>
                            </div>
                        </div>

                        {/* Social Row */}
                        <div className="flex items-center gap-3 pt-6 border-t border-[#ffffff]/10">
                            <a href="https://github.com/P0Saurabh" className="flex-1 flex items-center justify-center py-3 bg-[#fcfaff] text-[#1a1a1a] rounded-xl font-bold hover:opacity-90 transition-opacity">
                                <IconBrandGithub className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/saurabh-pawar04" className="flex-1 flex items-center justify-center py-3 bg-[#1a1a1a] text-[#fcfaff] border border-[#333] rounded-xl font-bold hover:bg-[#222] transition-colors">
                                <IconBrandLinkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:saurabhsp0402@gmail.com" className="flex-1 flex items-center justify-center py-3 bg-[#1a1a1a] text-[#fcfaff] border border-[#333] rounded-xl font-bold hover:bg-[#222] transition-colors">
                                <IconMail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

