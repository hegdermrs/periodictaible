"use client";

import { DevMode } from "@/components/experience/DevMode";
import { SparkBurst } from "@/components/experience/SparkBurst";
import { Celebration } from "@/components/progress/Celebration";
import { ExplorationHydrator } from "@/components/progress/ExplorationHydrator";

interface ExperienceShellProps {
  children: React.ReactNode;
}

export function ExperienceShell({ children }: ExperienceShellProps) {
  return (
    <>
      <ExplorationHydrator />
      <SparkBurst />
      <DevMode />
      <Celebration />
      {children}
    </>
  );
}
