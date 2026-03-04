/**
 * FeaturesBackground - Decorative background elements for the features section.
 * Includes animated blur blobs, a noise texture, and a subtle grid pattern to create depth
 * and a premium atmospheric feel across both light and dark modes.
 *
 * @example
 * <FeaturesBackground />
 */
export const FeaturesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Decorative Blur Blobs - Atmospheric glows with transitions */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-white/10 dark:bg-white/5 blur-[120px] rounded-full opacity-70 transition-colors duration-700"
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-blue-300/20 dark:bg-primary-200/10 blur-[130px] rounded-full opacity-50 transition-colors duration-700"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-500/10 blur-[120px] rounded-full opacity-60 transition-colors duration-700"
        aria-hidden="true"
      />

      {/* Noise/Grain Texture - Created atmospheric depth with overlay mix-blend */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Subtle Grid pattern for structural depth */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

FeaturesBackground.displayName = "FeaturesBackground";
