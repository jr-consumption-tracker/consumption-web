import AuthLayoutInfoDetail from "./AuthLayoutInfoDetail";

interface AuthLayoutInfoProps {
  header: string;
  description: string;
}

export const AuthLayoutInfo = ({
  header,
  description,
}: AuthLayoutInfoProps) => {
  return (
    <section className="relative w-full lg:w-3/5 flex flex-col min-h-72 lg:min-h-auth">
      {/* Dynamic background with multiple layers */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-red-500 to-pink-500" />

      {/* Animated overlay patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 right-10 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1000" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-500" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <AuthLayoutInfoDetail header={header} description={description} />
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};
