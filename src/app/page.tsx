"use client";

import { useCallback, useState } from "react";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { DetailPanel } from "@/components/detail/DetailPanel";
import { BrowserGate } from "@/components/experience/BrowserGate";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { Loader } from "@/components/experience/Loader";
import { ExplorationProgress } from "@/components/progress/ExplorationProgress";
import { PeriodicGrid } from "@/components/table/PeriodicGrid";

export default function Home() {
  return (
    <BrowserGate>
      <HomeContent />
    </BrowserGate>
  );
}

function HomeContent() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  if (!loaded) return <Loader onDone={handleDone} />;
  return (
    <ExperienceShell>
      <main className="relative flex h-dvh flex-col overflow-hidden">
        <AmbientBackground />

        <div className="pointer-events-none fixed inset-0 z-[1] bg-grid-faded" />

        <header className="pointer-events-none absolute inset-x-0 top-4 z-20 select-none text-center lg:top-8">
          <h1 className="text-3xl font-bold text-white lg:text-4xl">
            periodict
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-lime-400 bg-clip-text text-transparent">
              ai
            </span>
            ble
          </h1>
          <p className="mt-1 text-sm text-white/40 lg:text-base">
            The periodic table, but for AI.
          </p>
        </header>

        <div className="relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col overflow-visible px-2 pb-2 pt-16 sm:px-4 sm:pt-20 lg:px-12">

          <div className="min-h-0 flex-1">
            <PeriodicGrid />
          </div>

          <footer className="grid shrink-0 grid-cols-1 items-center gap-3 border-t border-white/10 py-2 md:grid-cols-[minmax(0,1fr)_minmax(20rem,34rem)_minmax(0,1fr)] md:gap-4 lg:py-3">
            <p className="order-2 text-center text-[11px] leading-tight text-white/40 md:order-1 md:text-left md:text-xs">
              &copy; 2026 AI Execution Accelerator. All rights reserved. Designed by{" "}
              <a
                href="https://github.com/hegdermrs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 underline underline-offset-2 transition-colors hover:text-white/80"
              >
                Kai
              </a>
            </p>
            <ExplorationProgress className="order-1 md:order-2" />
            <div className="hidden md:order-3 md:block" aria-hidden />
          </footer>
        </div>

        <DetailPanel />
      </main>
    </ExperienceShell>
  );
}
