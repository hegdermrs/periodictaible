export type GroupId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type LeverageTier = "foundation" | "high" | "business";

export type LinkIconKey =
  | "simple-icons/openai"
  | "simple-icons/anthropic"
  | "simple-icons/google"
  | "simple-icons/mistralai"
  | "simple-icons/x"
  | "simple-icons/zapier"
  | "simple-icons/integromat"
  | "simple-icons/n8n"
  | "simple-icons/cursor";

export interface ElementLink {
  label: string;
  url: string;
  icon?: LinkIconKey;
}

export interface AIGroup {
  id: GroupId;
  label: string;
  name: string;
  description: string;
  color: string;
  glowColor: string;
  leverageTier: LeverageTier;
}

export interface AIElement {
  id: string;
  symbol: string;
  name: string;
  group: GroupId;
  row: 1 | 2 | 3 | 4 | 5 | 6;
  index: number;
  tagline: string;
  whatItIs: string;
  whenToUse: string;
  watchOut: string;
  links: ElementLink[];
  image?: string;
  relatedIds: string[];
}
