// src/components/layout/AnimatedBackground.tsx
import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20 overflow-hidden bg-[#101010]">
        <div className="animated-gradient absolute -inset-1 opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.5),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.7),transparent_55%)]" />
      </div>

      <style>{`
        .animated-gradient {
          background: linear-gradient(
            120deg,
            #101010,
            #1e1e1e,
            #ea5c2a,
            #1e1e1e,
            #101010
          );
          background-size: 300% 300%;
          animation: gradient-flow 18s ease-in-out infinite;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes equalizer-bar {
          0% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.3); }
        }
      `}</style>
    </>
  );
};
