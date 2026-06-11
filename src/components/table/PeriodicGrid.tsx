"use client";

import { motion } from "framer-motion";
import { gridContainerVariants } from "@/animations/presets";
import { GROUPS } from "@/core/data/groups";
import { ROWS } from "@/core/data/rows";
import { getGridMatrix } from "@/core/utils/selectors";
import { type TableLayout, useTableLayout } from "@/hooks/useTableLayout";
import { CurvedColumn } from "./CurvedColumn";
import { CurvedStage } from "./CurvedStage";
import { ElementCell } from "./ElementCell";
import { GroupHeader } from "./GroupHeader";
import { RowLabelsRail } from "./RowLabelsRail";
import { getColumnCurve } from "@/animations/curve";

function ColumnContent({
  groupIndex,
  layout,
}: {
  groupIndex: number;
  layout: TableLayout;
}) {
  const matrix = getGridMatrix();
  const column = matrix[groupIndex]!;
  const group = GROUPS[groupIndex]!;

  return (
    <div className="flex h-full flex-col" style={{ gap: `${layout.gap}px` }}>
      <div className="shrink-0" style={{ height: layout.headerH }}>
        <GroupHeader group={group} />
      </div>
      {column.map((element) => (
        <ElementCell
          key={element.id}
          element={element}
          delay={element.index * 0.02}
          cellHeight={layout.cellH}
        />
      ))}
    </div>
  );
}

function ResponsiveGrid({ curved }: { curved: boolean }) {
  const { ref, layout } = useTableLayout(curved);
  const matrix = getGridMatrix();
  const total = matrix.length;

  if (!layout) {
    return <div ref={ref} className="h-full w-full" />;
  }

  const firstColumnCurve = getColumnCurve(0, total, layout.radius);
  const leftmostCardEdge = firstColumnCurve.translateX - layout.colW / 2;
  const rowRailSpacing = 30;
  const rowRailTranslateX = leftmostCardEdge - rowRailSpacing - 28;
  const rowRailTranslateZ = firstColumnCurve.translateZ + 8;

  const content = curved ? (
    <div className="relative h-full w-full">
      <CurvedStage>
        <div
          className="relative"
          style={{
            width: layout.tableW,
            height: layout.tableH,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute top-0 pointer-events-none"
            style={{
              left: "50%",
              width: 56,
              marginLeft: -28,
              transformStyle: "preserve-3d",
              transform: `translateX(${rowRailTranslateX}px) translateZ(${rowRailTranslateZ}px) rotateY(17deg)`,
            }}
          >
            <RowLabelsRail layout={layout} mobile={false} />
          </div>

          {/* G1-G8 Columns */}
          {matrix.map((column, i) => (
            <CurvedColumn
              key={column[0]?.group}
              index={i}
              total={total}
              radius={layout.radius}
              colW={layout.colW}
            >
              <ColumnContent groupIndex={i} layout={layout} />
            </CurvedColumn>
          ))}
        </div>
      </CurvedStage>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <RowLabelsRail layout={layout} mobile={true} />
      <div
        className="grid"
        style={{
          width: layout.tableW,
          height: layout.tableH,
          columnGap: `${layout.gap}px`,
          gridTemplateColumns: `repeat(${total}, ${layout.colW}px)`,
        }}
      >
        {matrix.map((column, i) => (
          <div key={column[0]?.group} className="flex min-w-0 flex-col">
            <ColumnContent groupIndex={i} layout={layout} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex h-full w-full items-start justify-center overflow-visible pt-8"
    >
      {content}
    </div>
  );
}

export function PeriodicGrid() {
  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="h-full w-full overflow-visible animate-sway"
    >
      <div className="h-full md:hidden">
        <ResponsiveGrid curved={false} />
      </div>
      <div className="hidden h-full md:block">
        <ResponsiveGrid curved />
      </div>
    </motion.div>
  );
}
