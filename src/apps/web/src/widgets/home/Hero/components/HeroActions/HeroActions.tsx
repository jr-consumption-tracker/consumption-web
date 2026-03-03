import { MoveRight } from "lucide-react";

import { Button } from "@heroui/react";
import { ButtonLink } from "@repo/components";

import { useHeroActions } from "./hooks/useHeroActions";

/**
 * HeroActions - UI-only component that renders call-to-action buttons
 */
export const HeroActions = () => {
  const { primaryAction, secondaryAction } = useHeroActions();

  return (
    <div className="mt-12 flex items-center justify-center gap-x-8">
      <ButtonLink
        to={primaryAction.to}
        variant="primary"
        size="lg"
        className="bg-primary px-10 py-8 text-xl font-bold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-primary/60 active:scale-95"
      >
        {primaryAction.label}
      </ButtonLink>

      <Button
        variant="ghost"
        onClick={secondaryAction.onClick}
        size="lg"
        className="text-xl font-bold leading-6 transition-all hover:text-primary hover:bg-transparent group"
      >
        {secondaryAction.label}
        <span className="inline-block transition-transform group-hover:translate-x-2">
          <MoveRight />
        </span>
      </Button>
    </div>
  );
};

export default HeroActions;
