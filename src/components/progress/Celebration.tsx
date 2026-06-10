"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TOTAL_ELEMENTS } from "@/core/utils/exploration";
import { useTableStore } from "@/store/useTableStore";
import { X } from "lucide-react";

const COLORS = [
  "#3b82f6", "#38bdf8", "#8b5cf6", "#e879f9",
  "#84cc16", "#eab308", "#6ee7b7", "#fb7185",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  type: "circle" | "star" | "line";
}

function randomFirework(): Particle[] {
  const p: Particle[] = [];
  const count = 30 + Math.floor(Math.random() * 30);
  for (let i = 0; i < count; i++) {
    p.push({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 3 + Math.random() * 8,
      rotation: Math.random() * 360,
      type: ["circle", "star", "line"][Math.floor(Math.random() * 3)] as Particle["type"],
    });
  }
  return p;
}

export function Celebration() {
  const openedIds = useTableStore((s) => s.openedIds);
  const [show, setShow] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (openedIds.length >= TOTAL_ELEMENTS && !hasTriggered.current) {
      hasTriggered.current = true;
      setShow(true);
      setParticles(randomFirework());
    }
  }, [openedIds.length]);

  function handleClose() {
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-6 top-6 z-10 rounded-full border border-white/20 bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close celebration"
          >
            <X size={20} />
          </button>

          {/* Fireworks */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                y: [0, -80 - Math.random() * 120, 20 + Math.random() * 40],
                x: [0, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 60],
                opacity: [1, 1, 0],
                scale: [0, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeOut",
                delay: Math.random() * 1.5,
              }}
            >
              {p.type === "circle" && (
                <div
                  className="rounded-full"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 6px ${p.color}`,
                  }}
                />
              )}
              {p.type === "star" && (
                <div
                  className="rounded-full"
                  style={{
                    width: p.size * 1.5,
                    height: p.size * 1.5,
                    background: p.color,
                    clipPath:
                      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    boxShadow: `0 0 8px ${p.color}`,
                  }}
                />
              )}
              {p.type === "line" && (
                <div
                  style={{
                    width: p.size * 3,
                    height: 2,
                    background: p.color,
                    borderRadius: 1,
                    transform: `rotate(${p.rotation}deg)`,
                    boxShadow: `0 0 4px ${p.color}`,
                  }}
                />
              )}
            </motion.div>
          ))}

          {/* Sparkle burst rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full border"
              style={{
                width: 20,
                height: 20,
                borderColor: COLORS[i * 2],
                left: `${30 + i * 20}%`,
                top: `${20 + Math.random() * 10}%`,
              }}
              animate={{
                scale: [0, 8, 12],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}

          <motion.div
            className="text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
          >
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Congratulations!
            </h2>
            <p className="mt-3 text-lg text-white/70 lg:text-xl">
              You explored all 48 elements of the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-lime-400 bg-clip-text text-transparent font-semibold">
                periodictaible
              </span>
            </p>
            <p className="mt-2 text-sm text-white/40">The periodic table, complete.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}