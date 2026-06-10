"use client";

import { BackgroundMusic } from "@/components/audio/BackgroundMusic";
import { AudioControls } from "@/components/audio/AudioControls";
import { DevMode } from "@/components/experience/DevMode";
import { SparkBurst } from "@/components/experience/SparkBurst";
import { Celebration } from "@/components/progress/Celebration";
import { ExplorationHydrator } from "@/components/progress/ExplorationHydrator";
import { ExplorationProgress } from "@/components/progress/ExplorationProgress";

interface ExperienceShellProps {
  children: React.ReactNode;
}

export function ExperienceShell({ children }: ExperienceShellProps) {
  return (
    <>
      <ExplorationHydrator />
      <BackgroundMusic />
      <SparkBurst />
      <DevMode />
      <AudioControls />
      <ExplorationProgress />
      <Celebration />
      {children}
    </>
  );
}
