import { useTranslation } from "react-i18next";

import { Button } from "@heroui/react";

import { Flag } from "./components/Flag";
import { useLanguageSelect } from "./hooks/useLanguageSelect";
import { languageSelectStyles } from "./styles/languageSelectVariants";

export const LanguageSelect = () => {
  const { t } = useTranslation("common");
  const { isCzech, handleSelectLanguage } = useLanguageSelect();

  const styles = languageSelectStyles();

  return (
    <div className={styles.container()}>
      <div className={styles.glowEffect()} />
      <Button
        isIconOnly
        variant="ghost"
        size="lg"
        onPress={handleSelectLanguage}
        className={styles.button()}
        aria-label={t("header.aria.language")}
      >
        <div className={styles.innerGradient()} />
        <div className={styles.iconContainer()}>
          <Flag country={isCzech ? "en" : "cz"} className={styles.icon()} />
        </div>
        <div className={styles.energyWave()} />
      </Button>
    </div>
  );
};

LanguageSelect.displayName = "LanguageSelect";
