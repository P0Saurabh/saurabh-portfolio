import { IconSend } from "@tabler/icons-react";

export const ContactSection: React.FC = () => (
  <section
    id="contact"
    className="panel mt-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-4 md:p-6 shadow-2xl shadow-black/80 mb-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,92,42,0.2)] hover:border-[#ea5c2a]/30"
  >
    <div className="flex flex-col items-center text-center gap-4">
      <div className="mb-2">
        <h2 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#fcfaff] relative inline-block">
          Let&apos;s build something.
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#ea5c2a] rounded-full" />
        </h2>
      </div>
      <p className="text-sm md:text-base text-[#fcfaff]/80 max-w-xl">
        Open to internships and roles at the intersection of Software, DevOps,
        and AI automation. Reach out for projects, ideas or collaborations.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-1">
        <a href="tel:+919284091637" className="group flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-[#ea5c2a]/5 border border-transparent hover:border-[#ea5c2a]/20 transition-all duration-300 min-w-[140px]">
          <span className="text-[#fcfaff]/60 text-[10px] uppercase tracking-widest font-bold">Phone</span>
          <span className="text-[#fcfaff] font-medium group-hover:text-[#ea5c2a] transition-colors text-xs md:text-sm">+91 92840 91637</span>
        </a>
        <a href="mailto:saurabhsp0402@gmail.com" className="group flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-[#ea5c2a]/5 border border-transparent hover:border-[#ea5c2a]/20 transition-all duration-300 min-w-[140px]">
          <span className="text-[#fcfaff]/60 text-[10px] uppercase tracking-widest font-bold">Email</span>
          <span className="text-[#fcfaff] font-medium underline-offset-4 group-hover:text-[#ea5c2a] group-hover:underline transition-all text-xs md:text-sm">saurabhsp0402@gmail.com</span>
        </a>
      </div>
    </div>
  </section>
);
