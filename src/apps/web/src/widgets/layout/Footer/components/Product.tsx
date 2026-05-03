import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

const linkClass =
  "inline-block text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 hover:translate-x-1 transform";

/**
 * Product - Product links section in footer
 */
export const Product = () => {
  const { t } = useTranslation("common");

  return (
    <div className="text-center md:text-left">
      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-6">
        {t("footer.product.title")}
      </h3>
      <ul className="space-y-4">
        <li>
          <Link to="/" className={linkClass}>
            {t("footer.product.features")}
          </Link>
        </li>
        <li>
          <Link to="/" className={linkClass}>
            {t("footer.product.pricing")}
          </Link>
        </li>
      </ul>
    </div>
  );
};
