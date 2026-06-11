"use client";

import { motion } from "framer-motion";
import { TOTAL_ELEMENTS } from "@/core/utils/exploration";
import { useTableStore } from "@/store/useTableStore";

interface ExplorationProgressProps {
  className?: string;
}

export function ExplorationProgress({
  className = "",
}: ExplorationProgressProps) {
  const openedIds = useTableStore((s) => s.openedIds);
  const count = openedIds.length;
  const pct = TOTAL_ELEMENTS > 0 ? (count / TOTAL_ELEMENTS) * 100 : 0;
  const progressColor = pct >= 100 ? "#84cc16" : "#38bdf8";
  const progressGlow =
    pct >= 100 ? "rgba(132, 204, 22, 0.28)" : "rgba(56, 189, 248, 0.28)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      className={`w-full ${className}`}
    >
      <div
        className="relative isolate overflow-hidden rounded-xl border px-3 py-2 sm:px-4"
        style={{
          borderColor: `${progressColor}55`,
          background:
            "radial-gradient(ellipse 70% 120% at 0% 0%, rgba(56, 189, 248, 0.12), transparent 62%), #0c0c14",
          boxShadow: `0 0 20px ${progressGlow}, inset 0 0 18px rgba(255, 255, 255, 0.03)`,
        }}
      >
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <p className="truncate text-[11px] font-bold uppercase tracking-widest text-white/45">
            Exploration
          </p>
          <div className="flex shrink-0 items-baseline gap-2">
            <p className="text-xs font-semibold text-white/75">
              {count}/{TOTAL_ELEMENTS}
            </p>
            <p
              className="font-mono text-sm font-bold tabular-nums"
              style={{ color: progressColor }}
            >
              {Math.round(pct)}%
            </p>
          </div>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/50">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${progressColor}, transparent)`,
              boxShadow: `0 0 14px ${progressGlow}`,
            }}
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
