"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTableStore } from "@/store/useTableStore";

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function SparkBurst() {
  const lastBurst = useTableStore((s) => s.lastBurst);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!lastBurst) return;

    setOrigin({ x: lastBurst.x, y: lastBurst.y });
    const batch = Array.from({ length: 14 }, (_, i) => ({
      id: lastBurst.tick + i,
      x: (Math.random() - 0.5) * 140,
      y: (Math.random() - 0.5) * 140,
      color: lastBurst.color,
    }));

    setSparks(batch);
    const timer = setTimeout(() => setSparks([]), 750);
    return () => clearTimeout(timer);
  }, [lastBurst]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ opacity: 1, scale: 0, x: origin.x, y: origin.y }}
            animate={{
              opacity: 0,
              scale: 2.5,
              x: origin.x + spark.x,
              y: origin.y + spark.y,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute h-2 w-2 rounded-full"
            style={{
              background: spark.color,
              boxShadow: `0 0 14px ${spark.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
