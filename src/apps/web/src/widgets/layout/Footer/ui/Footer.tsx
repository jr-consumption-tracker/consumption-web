import { useTranslation } from "react-i18next";

import { Separator } from "@heroui/react";

import { BrandSection } from "./BrandSection";
import { Company } from "./Company";
import { Legal } from "./Legal";
import { Product } from "./Product";

export const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();
  const copyrightText = currentYear === 2026 ? "2026" : `2026 - ${currentYear}`;

  return (
    <footer className="relative bg-surface-alt border-t border-border">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-11 md:gap-8">
            <div className="md:col-span-5">
              <BrandSection />
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:contents">
              <div className="md:col-span-2">
                <Product />
              </div>
              <div className="md:col-span-2">
                <Company />
              </div>
              <div className="col-span-2 md:col-span-2">
                <Legal />
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span>
                © {copyrightText} {t("site.name")}
              </span>
              <span>•</span>
              <span>{t("footer.operator")}</span>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span>{t("footer.rights")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
