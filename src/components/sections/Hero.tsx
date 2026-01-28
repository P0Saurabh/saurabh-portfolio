import React from "react";
import Image from "next/image";
import {
    IconPhone,
    IconMail,
    IconBrandLinkedin,
    IconBrandGithub,
    IconMapPin,
    IconCircleCheck
} from "@tabler/icons-react";

export const Hero: React.FC = () => (
    <section
        id="hero"
        className="relative overflow-hidden border-b border-[#2a2a2a] min-h-screen flex items-center justify-center pt-20 pb-32 md:py-0 md:pb-20"
    >
        <div className="hero-blobs pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-32 w-80 h-80 bg-[#ea5c2a]/40 rounded-full blur-3xl opacity-40" />
            <div className="absolute right-[-80px] top-10 w-80 h-80 bg-[#ea5c2a]/25 rounded-full blur-3xl" />
            <div className="absolute bottom-[-120px] left-1/4 w-96 h-96 bg-[#ea5c2a]/20 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                {/* Left Content Side */}
                <div className="flex-1 flex flex-col items-start text-left w-full max-w-4xl">
                    <p className="text-xs tracking-[0.25em] uppercase text-[#fcfaff]/40 mb-4 font-black">
                        Full-Stack Engineer · DevOps Architect
                    </p>
                    <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#fcfaff] leading-[0.85] mb-8">
                        SAURABH <span className="text-[#ea5c2a]">SATISH</span>
                        <span className="block">PAWAR</span>
                    </h1>
                    <div className="space-y-6 max-w-xl">
                        <p className="hero-subtitle text-xl md:text-2xl font-bold text-[#fcfaff]/90 leading-tight">
                            Building scalable apps &amp; <span className="text-[#ea5c2a]">automating cloud infrastructure</span> with precision.
                        </p>
                        <p className="text-sm md:text-base text-[#fcfaff]/40 leading-relaxed uppercase tracking-widest font-bold">
                            Motivated Software and DevOps Engineer specializing in Python, JavaScript, and Cloud Automation.
                        </p>
                    </div>

                    <div className="hero-tags flex flex-wrap gap-2 mt-8 mb-10">
                        {["Kubernetes", "AWS", "CI/CD", "TypeScript", "Python", "Docker"].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[10px] font-black text-[#ea5c2a] border border-[#ea5c2a]/20 uppercase tracking-widest"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/P0Saurabh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-2xl bg-[#ea5c2a] text-[#fcfaff] font-black shadow-[0_15px_40px_rgba(234,92,42,0.4)] hover:bg-[#ff6c3b] transition-all active:scale-95 flex items-center gap-2 uppercase text-[10px] tracking-[0.2em]"
                        >
                            <IconBrandGithub className="w-5 h-5" />
                            Source Code
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-2xl border border-[#ea5c2a]/30 bg-[#ea5c2a]/5 text-[#fcfaff] font-black hover:bg-[#ea5c2a]/20 hover:border-[#ea5c2a] transition-all active:scale-95 uppercase text-[10px] tracking-[0.2em]"
                        >
                            View Projects
                        </a>
                    </div>
                </div>

                {/* Right - Profile Card (Always on Right for Desktop) */}
                <div className="w-full max-w-[400px] md:w-auto shrink-0 flex justify-center md:justify-end">
                    <div className="bg-[#101010]/80 backdrop-blur-3xl border border-[#ea5c2a]/20 rounded-[3rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group overflow-visible w-full max-w-sm">
                        {/* Ambient Shadow/Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#ea5c2a]/20 to-transparent blur-2xl opacity-50 rounded-[3rem] -z-10" />

                        <div className="relative z-10 flex flex-col gap-8">
                            {/* Identity Section */}
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#ea5c2a]/40 p-2.5 shadow-2xl flex items-center justify-center -mt-20 bg-[#101010] ring-4 ring-[#050505]">
                                    <Image
                                        src="/logo.png"
                                        alt="Saurabh Logo"
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-3xl font-black text-[#fcfaff] tracking-tighter">Saurabh S. Pawar</h3>
                                    <div className="flex items-center justify-center gap-2 text-[#ea5c2a] text-[12px] font-black uppercase tracking-[0.2em] mt-3">
                                        <IconCircleCheck className="w-4 h-4" />
                                        <span>Software & DevOps</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status Row */}
                            <div className="flex gap-3">
                                <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#ea5c2a]/10 border border-[#ea5c2a]/20 text-[10px] font-black text-[#ea5c2a] uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-[#ea5c2a] animate-pulse" />
                                    Active
                                </div>
                                <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#2a2a2a]/40 border border-[#2a2a2a] text-[10px] font-black text-[#fcfaff]/30 uppercase tracking-widest">
                                    <IconMapPin className="w-4 h-4" />
                                    India
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent w-full" />

                            {/* Contact/Social List */}
                            <div className="space-y-3">
                                <a href="mailto:saurabhsp0402@gmail.com" className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-[#1a1a1a]/50 border border-transparent hover:border-[#ea5c2a]/30 hover:bg-[#222222] transition-all group/link">
                                    <IconMail className="w-5 h-5 text-[#ea5c2a] opacity-50 group-hover/link:opacity-100 group-hover/link:scale-110 transition-all" />
                                    <span className="text-[13px] text-[#fcfaff]/60 font-bold truncate group-hover/link:text-[#fcfaff]">saurabhsp0402@gmail.com</span>
                                </a>
                                <div className="grid grid-cols-2 gap-3">
                                    <a href="https://linkedin.com/in/saurabh-pawar04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#1a1a1a]/50 border border-transparent hover:border-[#ea5c2a]/30 hover:bg-[#222222] transition-all group/link">
                                        <IconBrandLinkedin className="w-5 h-5 text-[#ea5c2a] opacity-50" />
                                        <span className="text-[11px] text-[#fcfaff]/60 font-black uppercase tracking-wider group-hover/link:text-[#fcfaff]">LinkedIn</span>
                                    </a>
                                    <a href="https://github.com/P0Saurabh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#1a1a1a]/50 border border-transparent hover:border-[#ea5c2a]/30 hover:bg-[#222222] transition-all group/link">
                                        <IconBrandGithub className="w-5 h-5 text-[#ea5c2a] opacity-50" />
                                        <span className="text-[11px] text-[#fcfaff]/60 font-black uppercase tracking-wider group-hover/link:text-[#fcfaff]">GitHub</span>
                                    </a>
                                </div>
                                <a href="tel:+919284091637" className="flex items-center gap-4 py-4 px-6 rounded-2xl border border-[#2a2a2a] hover:border-[#ea5c2a]/40 transition-all group/link">
                                    <IconPhone className="w-5 h-5 text-[#ea5c2a] opacity-50" />
                                    <span className="text-[13px] text-[#fcfaff]/40 font-bold group-hover/link:text-[#fcfaff] tracking-widest">+91 92840 91637</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
