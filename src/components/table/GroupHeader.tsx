"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { AIGroup } from "@/core/types";

interface GroupHeaderProps {
  group: AIGroup;
  compact?: boolean;
}

export function GroupHeader({ group, compact = false }: GroupHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pointer-events-auto flex h-full w-full flex-col items-center justify-center gap-0 px-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ opacity: isHovered ? 1 : 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <span
        className={
          compact
            ? "text-sm font-bold tracking-wide"
            : "text-base font-bold tracking-wide sm:text-lg"
        }
        style={{
          color: group.color,
          textShadow: isHovered ? `0 0 16px ${group.glowColor}` : "none",
        }}
      >
        {group.label}
      </span>
      {!compact && (
        <span className="hidden text-center text-[11px] leading-tight text-white/50 sm:block">
          {group.name}
        </span>
      )}
    </motion.div>
  );
}
