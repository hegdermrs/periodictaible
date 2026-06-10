"use client";

import { useEffect, useRef } from "react";
import { SeamlessAudioLoop } from "@/components/audio/seamlessLoop";
import { useTableStore } from "@/store/useTableStore";

export const BACKGROUND_MUSIC_SRC = "/audio/music.wav";

export function BackgroundMusic() {
  const looperRef = useRef<SeamlessAudioLoop | null>(null);
  const audioEnabled = useTableStore((s) => s.audioEnabled);
  const volume = useTableStore((s) => s.volume);

  useEffect(() => {
    const looper = new SeamlessAudioLoop(1.5);
    looperRef.current = looper;

    void looper.init(BACKGROUND_MUSIC_SRC).then(() => {
      const { audioEnabled: enabled, volume: vol } = useTableStore.getState();
      looper.setVolume(vol);
      if (enabled) void looper.play();
    });

    return () => {
      void looper.destroy();
      looperRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once
  }, []);

  useEffect(() => {
    looperRef.current?.setVolume(volume);
  }, [volume]);

  useEffect(() => {
    const looper = looperRef.current;
    if (!looper?.isReady) return;

    if (audioEnabled) {
      void looper.play();
    } else {
      looper.stop();
    }
  }, [audioEnabled]);

  useEffect(() => {
    function unlock() {
      const looper = looperRef.current;
      if (!looper?.isReady || !useTableStore.getState().audioEnabled) return;
      void looper.play();
      document.removeEventListener("pointerdown", unlock);
    }

    document.addEventListener("pointerdown", unlock);
    return () => document.removeEventListener("pointerdown", unlock);
  }, []);

  return null;
}
