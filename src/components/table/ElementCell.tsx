"use client";

import { Check } from "lucide-react";
import { type MouseEvent } from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { GROUP_MAP } from "@/core/data/groups";
import type { AIElement } from "@/core/types";
import { formatElementSymbol } from "@/core/utils/formatElement";
import { useTableStore } from "@/store/useTableStore";

interface ElementCellProps {
  element: AIElement;
  delay?: number;
  cellHeight?: number;
}

export function ElementCell({
  element,
  delay = 0,
  cellHeight,
}: ElementCellProps) {
  const group = GROUP_MAP[element.group];
  const {
    selectedElementId,
    dimOthers,
    openedIds,
    selectElement,
    markOpened,
    triggerBurst,
  } = useTableStore();

  const isSelected = selectedElementId === element.id;
  const isOpened = openedIds.includes(element.id);
  const isDimmed = dimOthers && selectedElementId !== element.id;
  const h = cellHeight ?? 72;

  const symbolSize = Math.max(14, Math.round(h * 0.32));
  const indexSize = Math.max(6, Math.round(symbolSize * 0.48 * 0.7));
  const nameSize = Math.max(8, Math.round(h * 0.11));

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerBurst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      group.color,
    );
    markOpened(element.id);
    selectElement(isSelected ? null : element.id);
  }

  return (
    <GlowCard
      color={group.color}
      glowColor={group.glowColor}
      isSelected={isSelected}
      isOpened={isOpened}
      isDimmed={isDimmed}
      delay={delay}
      onClick={handleClick}
      className="w-full p-0"
      style={{ height: h }}
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-0.5 px-1">
        {isOpened && (
          <span
            className="pointer-events-none absolute right-1.5 top-1.5 z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full"
            style={{
              background: `${group.color}22`,
              border: `1px solid ${group.color}55`,
            }}
            aria-hidden
          >
            <Check
              className="h-2 w-2"
              strokeWidth={3}
              style={{ color: group.color }}
            />
          </span>
        )}

        <div className="relative flex items-center justify-center leading-none">
          <span
            className="font-bold tracking-tight"
            style={{ fontSize: symbolSize, color: group.color }}
          >
            {formatElementSymbol(element.symbol)}
          </span>
          <span
            className="pointer-events-none absolute font-mono font-medium tabular-nums text-white/45"
            style={{
              fontSize: indexSize,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              top: -Math.round(symbolSize * 0.3),
              right: "100%",
              marginRight: Math.max(1, Math.round(symbolSize * 0.05)),
            }}
          >
            {element.index}
          </span>
        </div>

        <span
          className="max-w-full truncate px-0.5 text-center font-medium leading-tight text-white/90"
          style={{ fontSize: nameSize }}
        >
          {element.name}
        </span>
      </div>
    </GlowCard>
  );
}
