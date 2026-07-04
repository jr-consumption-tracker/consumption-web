import type { ReactNode } from "react";

interface AuthLayoutContentProps {
  children?: ReactNode;
}

export const AuthLayoutContent = ({ children }: AuthLayoutContentProps) => {
  return (
    <section className="relative w-full md:w-2/5 md:min-h-auth flex items-center justify-center p-6 md:p-6 lg:p-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />

      {/* Content container */}
      <div className="relative w-full h-full max-w-md">
        <div className="relative h-full p-8">
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
