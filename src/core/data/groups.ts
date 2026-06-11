import type { AIGroup } from "@/core/types";

export const GROUPS: AIGroup[] = [
  {
    id: 1,
    label: "G1",
    name: "AI Basics",
    description: "The simple building blocks behind every AI tool.",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.55)",
    leverageTier: "foundation",
  },
  {
    id: 2,
    label: "G2",
    name: "Your Data",
    description: "How AI uses your files, notes, and company knowledge.",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.5)",
    leverageTier: "foundation",
  },
  {
    id: 3,
    label: "G3",
    name: "Quality & Safety",
    description: "How to make AI answers safer, steadier, and easier to trust.",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.55)",
    leverageTier: "foundation",
  },
  {
    id: 4,
    label: "G4",
    name: "AI Engines",
    description:
      "The model families you can choose from.",
    color: "#e879f9",
    glowColor: "rgba(232, 121, 249, 0.5)",
    leverageTier: "foundation",
  },
  {
    id: 5,
    label: "G5",
    name: "Connections",
    description: "How AI plugs into your apps and tools.",
    color: "#84cc16",
    glowColor: "rgba(132, 204, 22, 0.5)",
    leverageTier: "high",
  },
  {
    id: 6,
    label: "G6",
    name: "AI Workers",
    description: "AI that can follow steps, use tools, and get work done.",
    color: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.5)",
    leverageTier: "high",
  },
  {
    id: 7,
    label: "G7",
    name: "Builder Tools",
    description: "Tools for building AI systems faster.",
    color: "#6ee7b7",
    glowColor: "rgba(110, 231, 183, 0.45)",
    leverageTier: "high",
  },
  {
    id: 8,
    label: "G8",
    name: "Business Decisions",
    description: "How to decide what is worth building.",
    color: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.5)",
    leverageTier: "business",
  },
];

export const GROUP_MAP = Object.fromEntries(
  GROUPS.map((g) => [g.id, g]),
) as Record<AIGroup["id"], AIGroup>;
