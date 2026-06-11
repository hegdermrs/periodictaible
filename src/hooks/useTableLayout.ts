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

function compute(cw: number, ch: number, curved: boolean): TableLayout {
  const mobile = cw < 640;
  const padX = mobile ? 8 : 56;
  const padY = mobile ? 18 : 40;
  const fit = mobile ? 0.98 : 0.9;
  const headerH = mobile ? 34 : 44;
  const minGap = mobile ? 4 : 6;
  const maxGap = mobile ? 6 : 10;
  const minCellH = mobile ? 42 : 52;
  const minColW = mobile ? 34 : 72;
  const minAvailW = mobile ? 280 : 400;
  const minAvailH = mobile ? 360 : 300;

  const availW = Math.max(cw * fit - padX * 2, minAvailW);
  const availH = Math.max(ch * fit - padY * 2, minAvailH);

  const gap = Math.max(
    minGap,
    Math.min(
      maxGap,
      Math.floor(
        Math.min(
          (availH - headerH - ROWS * minCellH) / (ROWS + 1),
          (availW - COLS * minColW) / (COLS + 1),
        ),
      ),
    ),
  );

  const cellH = Math.max(
    minCellH,
    Math.floor((availH - headerH - gap - (ROWS - 1) * gap) / ROWS),
  );

  const colW = Math.max(
    minColW,
    Math.floor((availW - (COLS - 1) * gap) / COLS),
  );

  const tableH = headerH + gap + ROWS * cellH + (ROWS - 1) * gap;

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
    headerH,
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
