"use client";

import { motion } from "framer-motion";
import { useTableStore } from "@/store/useTableStore";

export function AudioControls() {
  const audioEnabled = useTableStore((s) => s.audioEnabled);
  const volume = useTableStore((s) => s.volume);
  const toggleAudio = useTableStore((s) => s.toggleAudio);
  const setVolume = useTableStore((s) => s.setVolume);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-2 backdrop-blur-md">
        <button
          type="button"
          onClick={toggleAudio}
          className="rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/5"
          aria-label={audioEnabled ? "Mute music" : "Play music"}
        >
          {audioEnabled ? "Mute" : "Sound"}
        </button>

        {audioEnabled && (
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-white/20 accent-sky-400"
            aria-label="Volume"
          />
        )}
      </div>
    </motion.div>
  );
}
