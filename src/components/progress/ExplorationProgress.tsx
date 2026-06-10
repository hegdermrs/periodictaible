"use client";

import { motion } from "framer-motion";
import { TOTAL_ELEMENTS } from "@/core/utils/exploration";
import { useTableStore } from "@/store/useTableStore";

interface ExplorationProgressProps {
  variant?: "fixed" | "inline";
  className?: string;
}

export function ExplorationProgress({
  variant = "fixed",
  className = "",
}: ExplorationProgressProps) {
  const openedIds = useTableStore((s) => s.openedIds);
  const count = openedIds.length;
  const pct = TOTAL_ELEMENTS > 0 ? (count / TOTAL_ELEMENTS) * 100 : 0;

  const content = (
    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
      <p className="text-[10px] uppercase tracking-wider text-white/40">
        Explored
      </p>
      <p className="text-xs font-medium text-white/70">
        {count}{" "}
        <span className="font-normal text-white/35">/ {TOTAL_ELEMENTS}</span>
      </p>
      <div className="mt-1.5 h-0.5 w-28 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-sky-400/80 to-lime-400/60"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  if (variant === "inline") {
    return (
      <div className={`flex justify-center ${className}`}>{content}</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      className={`fixed bottom-6 left-6 z-50 hidden md:block ${className}`}
    >
      {content}
    </motion.div>
  );
}
