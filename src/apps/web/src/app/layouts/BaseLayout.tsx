import type { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-surface text-text-main font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent-soft-hover rounded-full blur-[100px] opacity-30" />
      </div>
      {children}
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-999 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

BaseLayout.displayName = "BaseLayout";
