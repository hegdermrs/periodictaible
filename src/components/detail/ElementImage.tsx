"use client";

import Image from "next/image";
import { useState } from "react";
import { GROUP_MAP } from "@/core/data/groups";
import type { AIElement } from "@/core/types";

interface ElementImageProps {
  element: AIElement;
}

export function ElementImage({ element }: ElementImageProps) {
  const [failed, setFailed] = useState(false);
  const group = GROUP_MAP[element.group];
  const src = element.image ?? `/images/elements/${element.id}.jpg`;

  if (failed) {
    return (
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15"
        style={{
          background: `linear-gradient(135deg, ${group.glowColor.replace(/[\d.]+\)$/, "0.12)")} 0%, #12121a 100%)`,
        }}
      >
        <span
          className="text-5xl font-bold"
          style={{ color: group.color }}
        >
          {element.symbol}
        </span>
        <p className="px-6 text-center text-sm text-white/40">
          Add an image at{" "}
          <code className="text-sky-400/80">
            public/images/elements/{element.id}.jpg
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={src}
        alt={`${element.name} example`}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>
  );
}
