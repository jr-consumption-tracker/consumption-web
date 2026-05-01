/**
 * @entities/pricing - Pricing Plan domain entity
 *
 * Represents a subscription plan with its pricing and features.
 */
export interface PricingPlan {
  name: string;
  price: number;
  interval?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  badge?: string;
  highlighted?: boolean;
}
