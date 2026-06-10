"use client";

import { motion } from "framer-motion";

const ORBS = [
  { x: "10%", y: "20%", size: 400, color: "rgba(30, 58, 110, 0.12)", delay: 0 },
  { x: "80%", y: "10%", size: 350, color: "rgba(56, 189, 248, 0.08)", delay: 2 },
  { x: "60%", y: "70%", size: 500, color: "rgba(132, 204, 22, 0.06)", delay: 4 },
  { x: "20%", y: "80%", size: 300, color: "rgba(234, 179, 8, 0.06)", delay: 1 },
];

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
