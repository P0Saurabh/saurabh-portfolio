import { IconUser } from "@tabler/icons-react";

export const AboutSection: React.FC = () => (
  <section
    id="about"
    className="panel mt-10 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/80"
  >
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <div className="mb-10">
          <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#fcfaff] relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#ea5c2a] rounded-full" />
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#fcfaff]/80 leading-relaxed">
          Motivated Software and DevOps Engineer with strong foundations in Python,
          JavaScript, and Cloud Computing. Experienced in building scalable
          full-stack applications, automating CI/CD pipelines, and deploying
          containerized solutions on AWS &amp; Kubernetes. Passionate about combining
          software craftsmanship with DevOps and AI automation to deliver secure,
          reliable, and high-performance systems.
        </p>
      </div>
      <div className="w-full md:w-1/3 bg-[#101010] p-4 rounded-2xl border border-[#2a2a2a]">
        <h3 className="text-sm font-semibold text-[#ea5c2a] mb-2 uppercase tracking-wider">
          Education
        </h3>
        <p className="text-sm font-medium text-[#fcfaff]">
          B.Tech in Computer Science
        </p>
        <p className="text-xs text-[#fcfaff]/60 mt-1">
          MGM’s College of Engineering, Nanded
        </p>
        <p className="text-xs text-[#fcfaff]/50 mt-1">
          Aug 2021 – Sep 2025
        </p>
        <p className="text-xs text-[#ea5c2a]/80 mt-2 font-mono">
          CGPA: 6.8 / 10
        </p>
      </div>
    </div>
  </section>
);
