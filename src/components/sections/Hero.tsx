"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconChevronDown,
    IconTerminal2
} from "@tabler/icons-react";

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12"
        >
            {/* 1. Dynamic Background Grid (The "Ecosystem") */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#ea5c2a] opacity-20 blur-[100px]" />
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
            >
                {/* 2. Status Indicator - "System Operational" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea5c2a]/5 border border-[#ea5c2a]/20 backdrop-blur-md mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea5c2a] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea5c2a]"></span>
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#ea5c2a]">
                        System Status: Scalable
                    </span>
                </motion.div>

                {/* 3. Main Headlines - Name & Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-[#fcfaff] leading-[0.85] mb-6"
                >
                    SAURABH <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea5c2a] via-[#ff8f6b] to-[#ea5c2a] bg-[length:200%_auto] animate-gradient">
                        S. PAWAR
                    </span>
                </motion.h1>

                {/* 4. Subheadline - The Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col items-center gap-4 mb-10"
                >
                    <h2 className="text-xl md:text-3xl font-bold text-[#fcfaff]">
                        Architecting <span className="text-[#ea5c2a]">AI-Driven</span> Digital Ecosystems.
                    </h2>
                    <p className="max-w-2xl text-base md:text-lg text-[#fcfaff]/60 font-light leading-relaxed">
                        Bridging <strong className="text-[#fcfaff] font-medium">Enterprise Engineering</strong> &amp; <strong className="text-[#fcfaff] font-medium">Strategic Growth</strong>.
                        We build market dominance through autonomous cloud infrastructures.
                    </p>
                </motion.div>

                {/* 5. Command Center / CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-[#fcfaff] text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#ea5c2a] hover:text-white transition-all duration-300 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10">Explore Systems</span>
                        <IconTerminal2 className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-4">
                        <SocialLink href="https://github.com/P0Saurabh" icon={<IconBrandGithub className="w-5 h-5" />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/saurabh-pawar04" icon={<IconBrandLinkedin className="w-5 h-5" />} label="LinkedIn" />
                        <SocialLink href="mailto:saurabhsp0402@gmail.com" icon={<IconMail className="w-5 h-5" />} label="Email" />
                    </div>
                </motion.div>
            </motion.div>

            {/* 6. Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#fcfaff]/20"
            >
                {/* Removed Initialize Text */}
                <IconChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-[#fcfaff]/10 bg-[#fcfaff]/5 flex items-center justify-center text-[#fcfaff]/60 hover:text-[#ea5c2a] hover:border-[#ea5c2a]/40 hover:scale-110 transition-all duration-300 group relative"
        aria-label={label}
    >
        {icon}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded text-[10px] text-[#fcfaff] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
        </span>
    </a>
);
