"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function OutlineText({ className }: { className?: string }) {
  return (
    <span className={className}>
      periodict<span>ai</span>ble
    </span>
  );
}

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    document.fonts.ready
      .then(() => {
        if (!cancelled) setProgress(100);
      })
      .finally(() => {
        if (!cancelled) {
          setExiting(true);
          setTimeout(() => {
            if (!cancelled) onDone();
          }, 500);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08080f]"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative select-none">
        {/* Outline — 4 offset layers create a uniform border */}
        <div className="relative text-5xl font-bold tracking-tight lg:text-7xl">
          <div aria-hidden className="absolute inset-0 text-white/35" style={{ transform: "translate(-1px, 0)" }}>
            <OutlineText />
          </div>
          <div aria-hidden className="absolute inset-0 text-white/35" style={{ transform: "translate(1px, 0)" }}>
            <OutlineText />
          </div>
          <div aria-hidden className="absolute inset-0 text-white/35" style={{ transform: "translate(0, -1px)" }}>
            <OutlineText />
          </div>
          <div aria-hidden className="absolute inset-0 text-white/35" style={{ transform: "translate(0, 1px)" }}>
            <OutlineText />
          </div>
          {/* Transparent base (invisible — just holds the position) */}
          <div className="text-transparent" aria-hidden>
            <OutlineText />
          </div>
        </div>

        {/* Fill layer — clips from left to right as progress increases */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
            transition: "clip-path 0.3s ease-out",
          }}
        >
          <div className="text-5xl font-bold tracking-tight text-white lg:text-7xl">
            periodict
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-lime-400 bg-clip-text text-transparent">
              ai
            </span>
            ble
          </div>
        </div>

        <p className="mt-3 text-center text-sm text-white/40 lg:text-base">
          The periodic table, but for AI.
        </p>
      </div>
    </motion.div>
  );
}
