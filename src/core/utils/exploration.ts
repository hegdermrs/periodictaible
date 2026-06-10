import { ELEMENTS } from "@/core/data/elements";
import { GROUPS } from "@/core/data/groups";
import type { GroupId } from "@/core/types";

export const TOTAL_ELEMENTS = ELEMENTS.length;

export function getGroupExploredCount(
  groupId: GroupId,
  openedIds: string[],
): number {
  return ELEMENTS.filter(
    (e) => e.group === groupId && openedIds.includes(e.id),
  ).length;
}

export function getExplorationByGroup(openedIds: string[]) {
  return GROUPS.map((group) => ({
    group,
    explored: getGroupExploredCount(group.id, openedIds),
    total: ELEMENTS.filter((e) => e.group === group.id).length,
  }));
}
