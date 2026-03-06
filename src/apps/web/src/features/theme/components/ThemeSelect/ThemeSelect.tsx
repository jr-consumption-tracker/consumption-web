import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@heroui/react";

import { useThemeToggle } from "../../hooks/useThemeToggle";
import { themeSelectStyles } from "./styles/themeSelectVariants";

export const ThemeSelect = () => {
  const { t } = useTranslation("common");
  const { isDark, handleThemeToggle } = useThemeToggle();

  const styles = themeSelectStyles();

  return (
    <div className={styles.container()}>
      <div className={styles.glowEffect()} />
      <Button
        isIconOnly
        variant="ghost"
        size="lg"
        onPress={handleThemeToggle}
        className={styles.button()}
        aria-label={t("header.aria.theme")}
      >
        <div className={styles.innerGradient()} />
        <div className={styles.iconContainer()}>
          {isDark ? (
            <Sun className={styles.sunIcon()} />
          ) : (
            <Moon className={styles.moonIcon()} />
          )}
        </div>
        <div className={styles.energyWave()} />
      </Button>
    </div>
  );
};

ThemeSelect.displayName = "ThemeSelect";
