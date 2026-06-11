"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants, panelVariants } from "@/animations/presets";
import { ElementLinks } from "@/components/detail/ElementLinks";
import { GROUP_MAP } from "@/core/data/groups";
import { formatElementSymbol } from "@/core/utils/formatElement";
import { getElementById, getRelatedElements } from "@/core/utils/selectors";
import { useTableStore } from "@/store/useTableStore";

interface InfoBlockProps {
  title: string;
  color: string;
  children: ReactNode;
}

function InfoBlock({ title, color, children }: InfoBlockProps) {
  return (
    <section className="min-h-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3">
      <h3
        className="mb-1 text-[10px] font-bold uppercase tracking-widest sm:text-xs"
        style={{ color }}
      >
        {title}
      </h3>
      <p className="text-[11px] leading-snug text-white/85 sm:text-sm">
        {children}
      </p>
    </section>
  );
}

export function DetailPanel() {
  const { selectedElementId, selectElement } = useTableStore();
  const element = selectedElementId ? getElementById(selectedElementId) : null;
  const group = element ? GROUP_MAP[element.group] : null;
  const related = element ? getRelatedElements(element) : [];

  return (
    <AnimatePresence>
      {element && group && (
        <>
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => selectElement(null)}
          />
          <motion.aside
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col overflow-hidden border-l border-white/10 bg-[#0d0d14]/95 shadow-2xl backdrop-blur-xl sm:max-w-2xl"
            style={{
              height: "100dvh",
              boxShadow: `-20px 0 60px ${group.glowColor}`,
            }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#0d0d14]/90 px-4 py-3 backdrop-blur-md sm:px-5">
              <span
                className="min-w-0 truncate text-xs font-bold uppercase tracking-widest sm:text-sm"
                style={{ color: group.color }}
              >
                {group.label}: {group.name}
              </span>
              <button
                type="button"
                onClick={() => selectElement(null)}
                className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
                aria-label="Close detail panel"
              >
                Close
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
              <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border text-2xl font-bold sm:h-16 sm:w-16 sm:text-3xl"
                  style={{
                    borderColor: group.color,
                    color: group.color,
                    boxShadow: `0 0 24px ${group.glowColor}`,
                    background: "#12121a",
                  }}
                >
                  {formatElementSymbol(element.symbol)}
                </div>
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {element.name}
                  </h2>
                  <p className="mt-1 text-xs leading-snug text-white/55 sm:text-sm">
                    {element.tagline}
                  </p>
                </div>
              </div>

              {element.links.length > 0 && (
                <ElementLinks
                  links={element.links}
                  accentColor={group.color}
                  glowColor={group.glowColor}
                />
              )}

              <div className="grid min-h-0 flex-1 grid-rows-[repeat(3,minmax(0,1fr))] gap-2 sm:gap-3">
                <InfoBlock title="What it is" color={group.color}>
                  {element.whatItIs}
                </InfoBlock>
                <InfoBlock title="Good for" color={group.color}>
                  {element.whenToUse}
                </InfoBlock>
                <InfoBlock title="Heads up" color={group.color}>
                  {element.watchOut}
                </InfoBlock>
              </div>

              {related.length > 0 && (
                <section className="shrink-0">
                  <h3 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/40 sm:text-xs">
                    Related
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {related.map((rel) => {
                      const relGroup = GROUP_MAP[rel.group];
                      return (
                        <button
                          key={rel.id}
                          type="button"
                          onClick={() => selectElement(rel.id)}
                          className="min-w-0 rounded-lg border px-2 py-2 text-left transition hover:scale-[1.02]"
                          style={{
                            borderColor: `${relGroup.color}66`,
                            background: `${relGroup.glowColor.replace(/[\d.]+\)$/, "0.12)")}`,
                          }}
                        >
                          <span
                            className="block text-sm font-bold leading-none sm:text-base"
                            style={{ color: relGroup.color }}
                          >
                            {formatElementSymbol(rel.symbol)}
                          </span>
                          <span className="mt-1 block truncate text-xs text-white/75 sm:text-sm">
                            {rel.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
