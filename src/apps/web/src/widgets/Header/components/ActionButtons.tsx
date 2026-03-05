import { useTranslation } from "react-i18next";
import { ControlModule } from "./ControlModule";

export const ActionButtons = () => {
  const { t } = useTranslation("common");

  return (
    <div className="hidden lg:flex items-center gap-3">
      <ControlModule />

      <button className="group relative h-10 px-6 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] active:scale-95 overflow-hidden">
        <span className="relative z-10">{t("header.cta.startFree")}</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/50 transition-colors" />
      </button>
    </div>
  );
};

ActionButtons.displayName = "ActionButtons";
