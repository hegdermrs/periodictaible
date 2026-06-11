"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ELEMENT_LINK_ICONS } from "@/components/detail/elementIconMap";
import type { ElementLink } from "@/core/types";

interface ElementLinksProps {
  links: ElementLink[];
  accentColor: string;
  glowColor: string;
}

export function ElementLinks({ links, accentColor, glowColor }: ElementLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="shrink-0">
      <h3
        className="mb-2 text-[10px] font-bold uppercase tracking-widest sm:text-xs"
        style={{ color: accentColor }}
      >
        Explore & learn
      </h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {links.map((link) => {
          const Icon = link.icon ? ELEMENT_LINK_ICONS[link.icon] : null;

          return (
            <a
              key={`${link.url}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white/[0.03] px-3 py-2 transition hover:scale-[1.01] hover:bg-white/[0.06] active:scale-[0.99]"
              style={{
                borderColor: `${accentColor}55`,
                boxShadow: `0 0 0 0 ${glowColor}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${accentColor}55`;
                e.currentTarget.style.boxShadow = `0 0 0 0 ${glowColor}`;
              }}
            >
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/30"
                  style={{ color: accentColor }}
                >
                  {Icon ? (
                    <Icon className="size-3.5" />
                  ) : (
                    <ExternalLink className="size-3.5" />
                  )}
                </span>
                <span
                  className="truncate text-sm font-semibold underline decoration-2 underline-offset-4 transition group-hover:text-white"
                  style={{
                    color: accentColor,
                    textDecorationColor: `${accentColor}88`,
                  }}
                >
                  {link.label}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: accentColor }}
                aria-hidden
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
