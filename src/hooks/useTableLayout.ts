"use client";

import { getArcStageWidth, getRadiusForSpacing } from "@/animations/curve";
import { useEffect, useRef, useState } from "react";

export interface TableLayout {
  colW: number;
  cellH: number;
  gap: number;
  headerH: number;
  tableW: number;
  tableH: number;
  radius: number;
  curved: boolean;
}

const COLS = 8;
const ROWS = 6;
const PAD_X = 56;
const PAD_Y = 40;
const FIT = 0.9;
const HEADER_H = 34;
const MIN_GAP = 6;
const MIN_CELL_H = 52;
const MIN_COL_W = 72;

function compute(cw: number, ch: number, curved: boolean): TableLayout {
  const availW = Math.max(cw * FIT - PAD_X * 2, 400);
  const availH = Math.max(ch * FIT - PAD_Y * 2, 300);

  const gap = Math.max(
    MIN_GAP,
    Math.min(
      10,
      Math.floor(
        Math.min(
          (availH - HEADER_H - ROWS * MIN_CELL_H) / (ROWS + 1),
          (availW - COLS * MIN_COL_W) / (COLS + 1),
        ),
      ),
    ),
  );

  const cellH = Math.max(
    MIN_CELL_H,
    Math.floor((availH - HEADER_H - gap - (ROWS - 1) * gap) / ROWS),
  );

  const colW = Math.max(
    MIN_COL_W,
    Math.floor((availW - (COLS - 1) * gap) / COLS),
  );

  const tableH = HEADER_H + gap + ROWS * cellH + (ROWS - 1) * gap;

  let tableW: number;
  let radius = 0;

  if (curved) {
    radius = getRadiusForSpacing(colW, gap, COLS);
    tableW = getArcStageWidth(radius, colW);
  } else {
    tableW = COLS * colW + (COLS - 1) * gap;
  }

  return {
    colW,
    cellH,
    gap,
    headerH: HEADER_H,
    tableW,
    tableH,
    radius,
    curved,
  };
}

export function useTableLayout(curved: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<TableLayout | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const { clientWidth: cw, clientHeight: ch } = el;
      if (cw > 0 && ch > 0) setLayout(compute(cw, ch, curved));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [curved]);

  return { ref, layout };
}
