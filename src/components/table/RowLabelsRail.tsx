"use client";

import { motion } from "framer-motion";
import { ROWS } from "@/core/data/rows";
import type { TableLayout } from "@/hooks/useTableLayout";

interface RowLabelsRailProps {
  layout: TableLayout;
  mobile: boolean;
}

const ROW_GLOW = "rgba(255, 255, 255, 0.08)";

export function RowLabelsRail({ layout, mobile }: RowLabelsRailProps) {
  const railW = mobile ? 28 : 56;

  return (
    <div
      className="relative shrink-0 select-none"
      style={{ width: railW, height: layout.tableH }}
    >
      {ROWS.map((row) => {
        const top =
          layout.headerH + layout.gap + (row.id - 1) * (layout.cellH + layout.gap);
        const height = layout.cellH;

        return (
          <motion.div
            key={row.id}
            className="absolute left-0 right-0 flex flex-col items-center justify-center leading-none"
            style={{ top, height }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.12 + row.id * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span
              className="text-[9px] font-bold uppercase leading-tight text-white/55 sm:text-xs"
              style={{
                textShadow: mobile
                  ? "0 0 6px rgba(255,255,255,0.08)"
                  : `0 0 12px rgba(255,255,255,0.08), 0 0 1px rgba(255,255,255,0.12)`,
              }}
            >
              {row.label}
            </span>
            {!mobile && (
              <span
                className="mt-0.5 text-[9px] font-bold uppercase leading-tight text-white/55 sm:text-xs"
                style={{
                  textShadow: `0 0 12px rgba(255,255,255,0.08), 0 0 1px rgba(255,255,255,0.12)`,
                }}
              >
                {row.name}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
