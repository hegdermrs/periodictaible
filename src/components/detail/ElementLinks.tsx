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
    <section>
      <h3
        className="mb-1 text-xs font-bold uppercase tracking-widest"
        style={{ color: accentColor }}
      >
        Explore & learn
      </h3>
      <p className="mb-3 text-sm text-white/45">
        Tap a link below — each one opens in a new tab.
      </p>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => {
          const Icon = link.icon ? ELEMENT_LINK_ICONS[link.icon] : null;

          return (
            <a
              key={`${link.url}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 bg-white/[0.03] px-4 py-3.5 transition hover:scale-[1.01] hover:bg-white/[0.06] active:scale-[0.99]"
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
              <span className="flex min-w-0 items-center gap-3">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30"
                  style={{ color: accentColor }}
                >
                  {Icon ? (
                    <Icon className="size-4" />
                  ) : (
                    <ExternalLink className="size-4" />
                  )}
                </span>
                <span
                  className="truncate text-base font-semibold underline decoration-2 underline-offset-4 transition group-hover:text-white"
                  style={{
                    color: accentColor,
                    textDecorationColor: `${accentColor}88`,
                  }}
                >
                  {link.label}
                </span>
              </span>
              <ArrowUpRight
                className="size-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
