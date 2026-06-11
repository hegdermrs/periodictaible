"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { AIRow } from "@/core/data/rows";

interface RowHeaderProps {
  row: AIRow;
}

export function RowHeader({ row }: RowHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pointer-events-auto flex h-full w-full flex-col items-center justify-center px-0.5 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ opacity: isHovered ? 1 : 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <span
        className="text-[10px] font-bold tracking-wider sm:text-xs"
        style={{
          color: "#94a3b8",
          textShadow: isHovered ? "0 0 16px rgba(148, 163, 184, 0.55)" : "none",
        }}
      >
        {row.shortLabel}
      </span>
      <span className="mt-1 text-[8px] font-bold uppercase tracking-widest text-white/40 sm:text-[9px]">
        {row.name}
      </span>
    </motion.div>
  );
}
