"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { AIGroup } from "@/core/types";

interface GroupHeaderProps {
  group: AIGroup;
}

export function GroupHeader({ group }: GroupHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="pointer-events-auto flex h-full w-full flex-col items-center justify-end px-0.5 pb-1 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ opacity: isHovered ? 1 : 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <span
        className="text-[9px] font-bold uppercase leading-tight text-white/55 sm:text-xs"
        style={{
          color: group.color,
          textShadow: isHovered ? `0 0 16px ${group.glowColor}` : "none",
        }}
      >
        {group.label}
        <span className="hidden sm:inline">: {group.name}</span>
      </span>
    </motion.div>
  );
}
