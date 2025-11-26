export type Pricing = {
  amount: number;
  currency: string;
  interval: "month" | "year";
};

export type FeatureInfo = {
  highlight: string;
  compareUrl: string;
};

export type Addon = {
  id: string;
  name: string;
  quantity: number;
  pricePerUnit: number;
};

export type Plan = {
  id: string;
  title: string;
  tier: "starter" | "business" | "enterprise";
  current: boolean;
  pricing: Pricing;
  features: FeatureInfo;
  addons: Addon[];
};
