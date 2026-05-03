import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

const linkClass =
  "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 whitespace-nowrap";

/**
 * Support - Support and legal links section in footer
 */
export const Support = () => {
  const { t } = useTranslation("common");

  return (
    <div className="text-center md:text-left">
      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-6 whitespace-nowrap">
        {t("footer.support.title")}
      </h3>
      <ul className="space-y-4">
        <li>
          <Link to="/" className={linkClass}>
            {t("footer.support.privacy")}
          </Link>
        </li>
        <li>
          <Link to="/" className={linkClass}>
            {t("footer.support.terms")}
          </Link>
        </li>
        <li>
          <Link to="/" className={linkClass}>
            {t("footer.support.cookies")}
          </Link>
        </li>
      </ul>
    </div>
  );
};
