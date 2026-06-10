"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface CurvedStageProps {
  children: ReactNode;
}

export function CurvedStage({ children }: CurvedStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, 7]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      className="table-3d-stage flex items-center justify-center overflow-visible"
      style={{ perspective: "1400px", perspectiveOrigin: "50% 48%" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* pointer-events:none inherits to every wrapper plane in the 3D scene;
          interactive cells re-enable it on themselves. Without this, the tilted
          stage plane and column wrappers (closer in Z) steal hits from cells. */}
      <motion.div
        className="pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
