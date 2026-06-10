import { ELEMENTS } from "@/core/data/elements";
import { GROUPS } from "@/core/data/groups";
import type { AIElement, GroupId } from "@/core/types";

export function getElementById(id: string): AIElement | undefined {
  return ELEMENTS.find((e) => e.id === id);
}

export function getElementsByGroup(group: GroupId): AIElement[] {
  return ELEMENTS.filter((e) => e.group === group).sort((a, b) => a.row - b.row);
}

export function getGridMatrix(): AIElement[][] {
  return GROUPS.map((group) => getElementsByGroup(group.id));
}

export function getRelatedElements(element: AIElement): AIElement[] {
  return element.relatedIds
    .map((id) => getElementById(id))
    .filter((e): e is AIElement => e !== undefined);
}
