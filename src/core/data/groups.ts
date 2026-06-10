import type { AIGroup } from "@/core/types";

export const GROUPS: AIGroup[] = [
  {
    id: 1,
    label: "G1",
    name: "Fundamentals",
    description: "The basics every AI tool uses — tokens, models, prompts, and settings.",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.55)",
    leverageTier: "foundation",
  },
  {
    id: 2,
    label: "G2",
    name: "Data & Knowledge",
    description: "How you give AI your own information to work with.",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.5)",
    leverageTier: "foundation",
  },
  {
    id: 3,
    label: "G3",
    name: "Intelligence Layer",
    description: "Making AI smarter, safer, and more useful for real work.",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.55)",
    leverageTier: "foundation",
  },
  {
    id: 4,
    label: "G4",
    name: "Models & Providers",
    description:
      "The AI engines you pick from — GPT, Claude, Gemini, DeepSeek, and more.",
    color: "#e879f9",
    glowColor: "rgba(232, 121, 249, 0.5)",
    leverageTier: "foundation",
  },
  {
    id: 5,
    label: "G5",
    name: "Infrastructure",
    description: "How AI connects to your apps and other tools.",
    color: "#84cc16",
    glowColor: "rgba(132, 204, 22, 0.5)",
    leverageTier: "high",
  },
  {
    id: 6,
    label: "G6",
    name: "Agents & Automation",
    description: "AI that takes action — agents, workflows, and automation.",
    color: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.5)",
    leverageTier: "high",
  },
  {
    id: 7,
    label: "G7",
    name: "No-Code Builders",
    description: "Build AI systems without writing much code.",
    color: "#6ee7b7",
    glowColor: "rgba(110, 231, 183, 0.45)",
    leverageTier: "high",
  },
  {
    id: 8,
    label: "G8",
    name: "Business Layer",
    description: "Turn AI into a real business — strategy, ROI, and use cases.",
    color: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.5)",
    leverageTier: "business",
  },
];

export const GROUP_MAP = Object.fromEntries(
  GROUPS.map((g) => [g.id, g]),
) as Record<AIGroup["id"], AIGroup>;
