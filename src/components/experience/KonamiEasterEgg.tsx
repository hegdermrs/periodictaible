"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTableStore } from "@/store/useTableStore";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
];

export function KonamiEasterEgg() {
  const unlock = useTableStore((s) => s.unlockKonami);
  const indexRef = useRef(0);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === KONAMI[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === KONAMI.length) {
          indexRef.current = 0;
          unlock();
          setToast(true);
          setTimeout(() => setToast(false), 3000);
        }
      } else {
        indexRef.current = 0;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [unlock]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="fixed left-1/2 top-1/2 z-[160] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ scale: 0.6, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white drop-shadow-lg">
              🎮 Konami Code activated!
            </div>
            <div className="mt-1 text-sm text-white/60">
              All elements discovered — rainbow mode engaged
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
