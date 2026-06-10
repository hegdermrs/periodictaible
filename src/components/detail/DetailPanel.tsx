"use client";

import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants, panelVariants } from "@/animations/presets";
import { ElementLinks } from "@/components/detail/ElementLinks";
import { GROUP_MAP } from "@/core/data/groups";
import { formatElementSymbol } from "@/core/utils/formatElement";
import { getElementById, getRelatedElements } from "@/core/utils/selectors";
import { useTableStore } from "@/store/useTableStore";

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
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-2xl flex-col overflow-y-auto border-l border-white/10 bg-[#0d0d14]/95 shadow-2xl backdrop-blur-xl"
            style={{ boxShadow: `-20px 0 60px ${group.glowColor}` }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d0d14]/90 px-8 py-5 backdrop-blur-md">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: group.color }}
              >
                {group.label} · {group.name}
              </span>
              <button
                type="button"
                onClick={() => selectElement(null)}
                className="rounded-xl border border-white/10 px-4 py-2 text-base text-white/60 transition hover:border-white/20 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-8 px-8 py-10">
              <div className="flex items-center gap-6">
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border text-4xl font-bold"
                  style={{
                    borderColor: group.color,
                    color: group.color,
                    boxShadow: `0 0 30px ${group.glowColor}`,
                    background: "#12121a",
                  }}
                >
                  {formatElementSymbol(element.symbol)}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{element.name}</h2>
                  <p className="mt-2 text-base text-white/55">{element.tagline}</p>
                </div>
              </div>

              {element.links.length > 0 && (
                <ElementLinks
                  links={element.links}
                  accentColor={group.color}
                  glowColor={group.glowColor}
                />
              )}

              <section>
                <h3
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  What it is
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  {element.whatItIs}
                </p>
              </section>

              <section>
                <h3
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  Good for
                </h3>
                <p className="text-lg leading-relaxed text-white/85">
                  {element.whenToUse}
                </p>
              </section>

              <section>
                <h3
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  Heads up
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                  {element.watchOut}
                </p>
              </section>

              {related.length > 0 && (
                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">
                    Related
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {related.map((rel) => {
                      const relGroup = GROUP_MAP[rel.group];
                      return (
                        <button
                          key={rel.id}
                          type="button"
                          onClick={() => selectElement(rel.id)}
                          className="rounded-xl border px-4 py-3 text-left transition hover:scale-105"
                          style={{
                            borderColor: `${relGroup.color}66`,
                            background: `${relGroup.glowColor.replace(/[\d.]+\)$/, "0.12)")}`,
                          }}
                        >
                          <span
                            className="text-base font-bold"
                            style={{ color: relGroup.color }}
                          >
                            {formatElementSymbol(rel.symbol)}
                          </span>
                          <span className="ml-2 text-base text-white/75">
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
