export interface PricingPlan {
  name: string;
  price: number;
  interval?: string;
  features: string[];
  unavailableFeatures?: string[];
  cta: string;
  ctaLink: string;
  badge?: string;
  highlighted?: boolean;
}
