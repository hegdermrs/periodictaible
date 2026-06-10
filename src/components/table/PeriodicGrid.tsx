"use client";

import { motion } from "framer-motion";
import { gridContainerVariants } from "@/animations/presets";
import { GROUPS } from "@/core/data/groups";
import { getGridMatrix } from "@/core/utils/selectors";
import { type TableLayout, useTableLayout } from "@/hooks/useTableLayout";
import { CurvedColumn } from "./CurvedColumn";
import { CurvedStage } from "./CurvedStage";
import { ElementCell } from "./ElementCell";
import { GroupHeader } from "./GroupHeader";

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
    <div className="flex h-full flex-col" style={{ gap: layout.gap }}>
      <div className="shrink-0" style={{ height: layout.headerH }}>
        <GroupHeader group={group} compact />
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

  const content = curved ? (
    <CurvedStage>
      <div
        className="relative"
        style={{
          width: layout.tableW,
          height: layout.tableH,
          transformStyle: "preserve-3d",
        }}
      >
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
  ) : (
    <div
      className="grid"
      style={{
        width: layout.tableW,
        height: layout.tableH,
        columnGap: layout.gap,
        gridTemplateColumns: `repeat(${total}, ${layout.colW}px)`,
      }}
    >
      {matrix.map((column, i) => (
        <div key={column[0]?.group} className="flex min-w-0 flex-col">
          <ColumnContent groupIndex={i} layout={layout} />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex h-full w-full items-center justify-center overflow-visible"
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
