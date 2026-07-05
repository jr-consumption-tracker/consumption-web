import authHeroImage from "@web/assets/images/auth-hero.jpg";
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
    <section className="relative w-full md:w-3/5 flex flex-col min-h-48 md:min-h-auth">
      {/* Hero image */}
      <img
        src={authHeroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center"
        loading="eager"
        fetchPriority="high"
      />

      {/* Brand overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-700 via-brand-600 to-brand-500 opacity-85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <AuthLayoutInfoDetail header={header} description={description} />
      </div>
    </section>
  );
};
