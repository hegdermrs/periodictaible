export interface AIRow {
  id: number;
  label: string;
  name: string;
  shortLabel: string;
}

export const ROWS: AIRow[] = [
  { id: 1, label: "R1", name: "Start", shortLabel: "R1" },
  { id: 2, label: "R2", name: "Choose", shortLabel: "R2" },
  { id: 3, label: "R3", name: "Build", shortLabel: "R3" },
  { id: 4, label: "R4", name: "Ground", shortLabel: "R4" },
  { id: 5, label: "R5", name: "Control", shortLabel: "R5" },
  { id: 6, label: "R6", name: "Scale", shortLabel: "R6" },
];

export const ROW_MAP = Object.fromEntries(
  ROWS.map((r) => [r.id, r]),
) as Record<AIRow["id"], AIRow>;

export type RowId = (typeof ROWS)[number]["id"];
