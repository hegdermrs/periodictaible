"use client";

import { GROUPS } from "@/core/data/groups";
import { getGroupExploredCount } from "@/core/utils/exploration";
import { ELEMENTS } from "@/core/data/elements";
import { useTableStore } from "@/store/useTableStore";

export function Legend({ compact = false }: { compact?: boolean }) {
  const openedIds = useTableStore((s) => s.openedIds);

  if (compact) {
    return (
      <div className="mb-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-2 py-2">
        {GROUPS.map((group) => {
          const explored = getGroupExploredCount(group.id, openedIds);
          const total = ELEMENTS.filter((e) => e.group === group.id).length;

          return (
            <div key={group.id} className="flex items-center gap-1.5">
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: group.color }}
              />
              <span className="text-[11px] text-white/50">
                <span style={{ color: group.color }}>{group.label}</span>{" "}
                {group.name}
                {explored > 0 && (
                  <span className="text-white/30">
                    {" "}
                    · {explored}/{total}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
      <h3 className="mb-6 text-base font-semibold uppercase tracking-widest text-white/60">
        The 8 Groups
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <div key={group.id} className="flex gap-4">
            <div
              className="mt-1.5 h-4 w-4 shrink-0 rounded-full"
              style={{
                backgroundColor: group.color,
                boxShadow: `0 0 10px ${group.glowColor}`,
              }}
            />
            <div>
              <p className="text-base font-semibold" style={{ color: group.color }}>
                {group.label} — {group.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/55">
                {group.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
