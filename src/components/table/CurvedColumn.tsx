"use client";

import { getColumnCurve } from "@/animations/curve";
import type { ReactNode } from "react";

interface CurvedColumnProps {
  index: number;
  total: number;
  radius: number;
  colW: number;
  children: ReactNode;
}

export function CurvedColumn({
  index,
  total,
  radius,
  colW,
  children,
}: CurvedColumnProps) {
  const curve = getColumnCurve(index, total, radius);

  return (
    <div
      className="table-3d-column absolute top-0 h-full"
      style={{
        left: "50%",
        width: colW,
        marginLeft: -colW / 2,
        transformStyle: "preserve-3d",
        transform: `translateX(${curve.translateX}px) translateZ(${curve.translateZ}px) rotateY(${curve.rotateY}deg)`,
      }}
    >
      {children}
    </div>
  );
}
