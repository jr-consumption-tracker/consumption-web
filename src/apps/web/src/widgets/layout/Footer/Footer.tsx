import { useTranslation } from "react-i18next";

import { Separator } from "@heroui/react";
import { siteConfig } from "@web/app/config/site";

import { BrandSection } from "./components/BrandSection";
import { Company } from "./components/Company";
import { Legal } from "./components/Legal";
import { Product } from "./components/Product";

export const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();
  const copyrightText = currentYear === 2025 ? "2025" : `2025 - ${currentYear}`;

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-secondary/30 to-primary/5" />

      {/* Floating shapes */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-linear-to-tr from-secondary/20 to-primary/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-5">
              <BrandSection />
            </div>
            <div className="lg:col-span-2">
              <Product />
            </div>
            <div className="lg:col-span-2">
              <Company />
            </div>
            <div className="lg:col-span-2">
              <Legal />
            </div>
          </div>
        </div>

        <Separator className="bg-linear-to-r from-transparent via-primary/20 to-transparent" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span>
                © {copyrightText} {siteConfig.name}
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
