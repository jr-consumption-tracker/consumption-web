import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ButtonLink } from "@repo/components";
import { useIsAuthenticated } from "@web/features/auth/model/store/authStore";
import { Section } from "@web/shared/ui/Section";

export const PricingCta = () => {
  const { t } = useTranslation("pricing");
  const isAuthenticated = useIsAuthenticated();

  return (
    <Section id="cta" className="bg-primary/5">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          {t("cta.description")}
        </p>

        <div className="mt-12 flex items-center justify-center gap-x-8">
          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            className="bg-primary p-6 text-xl font-bold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95"
          >
            {isAuthenticated
              ? t("cta.actions.goToApp")
              : t("cta.actions.startFree")}
          </ButtonLink>

          <ButtonLink
            to={"/features"}
            variant="ghost"
            size="lg"
            className="text-xl font-bold leading-6 transition-all hover:text-primary hover:bg-transparent group"
          >
            {t("cta.actions.moreInfo")}
            <span className="inline-block transition-transform group-hover:translate-x-2">
              <MoveRight />
            </span>
          </ButtonLink>
        </div>

        <div className="mt-8 flex items-center justify-center gap-x-8 text-sm text-text-muted">
          <span className="flex items-center gap-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("trust.noCredit")}
          </span>
          <span className="flex items-center gap-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("trust.cancel")}
          </span>
          <span className="flex items-center gap-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("trust.secure")}
          </span>
        </div>
      </div>
    </Section>
  );
};

PricingCta.displayName = "PricingCta";
