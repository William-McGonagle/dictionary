import React, { ReactElement } from "react";

export function BackgroundDots({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen dark:bg-slate-950 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
      {/* Radial gradient for the container to give a faded look */}
      <div className="z-20 w-full h-full">{children}</div>
      <div className="z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
