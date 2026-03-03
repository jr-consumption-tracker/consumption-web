const HeroBg = () => {
  return (
    <div className="absolute top-0 z-0 h-full w-full pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -left-20 h-125 w-125 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 -right-20 h-125 w-125 rounded-full bg-accent-soft-hover blur-[120px]" />
    </div>
  );
};

HeroBg.displayName = "HeroBg";

export default HeroBg;
