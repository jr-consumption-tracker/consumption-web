import type { ComponentType, SVGProps } from "react";
import type { FeatureColor } from "./FeatureColor";

/**
 * Represents a single feature item with its visual and content-related properties
 */
export interface FeatureProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  titleKey: string;
  descriptionKey: string;
  isPremium: boolean;
  accentColor?: FeatureColor;
}
