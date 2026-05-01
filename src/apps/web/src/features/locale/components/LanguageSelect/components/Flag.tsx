interface FlagProps {
  country: "cz" | "en";
  className?: string;
}

export const Flag = ({ country, className }: FlagProps) => {
  if (country === "cz") {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="white" />
        <path d="M0 16H32V32H0V16Z" fill="#D7141A" />
        <path d="M0 0L16 16L0 32V0Z" fill="#11457E" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H32V32H0V0Z" fill="#012169" />
      <path d="M0 0L32 32M32 0L0 32" stroke="white" strokeWidth="4" />
      <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M16 0V32M0 16H32" stroke="white" strokeWidth="6" />
      <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="4" />
    </svg>
  );
};

Flag.displayName = "Flag";
