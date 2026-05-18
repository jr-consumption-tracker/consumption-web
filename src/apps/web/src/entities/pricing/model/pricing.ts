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
