"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let audioDone = false;
    let fontsDone = false;

    downloadProgress("/audio/music.wav", (pct) => {
      if (!cancelled) setProgress(pct);
    }).finally(() => {
      audioDone = true;
      checkReady();
    });

    document.fonts.ready.then(() => {
      fontsDone = true;
      checkReady();
    });

    function checkReady() {
      if (audioDone && fontsDone && !cancelled) {
        setExiting(true);
        setTimeout(() => {
          if (!cancelled) onDone();
        }, 500);
      }
    }

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
        <div
          className="text-5xl font-bold tracking-tight text-transparent lg:text-7xl"
          style={{
            textShadow:
              "-1px -1px 0 rgba(255,255,255,0.5), 1px -1px 0 rgba(255,255,255,0.5), -1px 1px 0 rgba(255,255,255,0.5), 1px 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          periodict
          <span>ai</span>
          ble
        </div>

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

async function downloadProgress(
  url: string,
  onProgress: (pct: number) => void,
): Promise<void> {
  try {
    const res = await fetch(url);
    if (!res.ok || !res.body) {
      onProgress(100);
      return;
    }
    const total = Number(res.headers.get("Content-Length") ?? 0);
    if (!total) {
      onProgress(100);
      return;
    }
    const reader = res.body.getReader();
    let received = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      received += value.length;
      onProgress(Math.min(Math.round((received / total) * 100), 100));
    }
  } catch {
    onProgress(100);
  }
}