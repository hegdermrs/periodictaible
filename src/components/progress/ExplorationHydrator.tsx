"use client";

import { useEffect } from "react";
import { loadOpenedIds } from "@/store/explorationPersist";
import { useTableStore } from "@/store/useTableStore";

export function ExplorationHydrator() {
  const hydrateOpened = useTableStore((s) => s.hydrateOpened);

  useEffect(() => {
    hydrateOpened(loadOpenedIds());
  }, [hydrateOpened]);

  return null;
}
