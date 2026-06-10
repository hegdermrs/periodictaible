"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { type CSSProperties, type MouseEvent, type ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  color: string;
  glowColor: string;
  isDimmed?: boolean;
  isSelected?: boolean;
  isOpened?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export function GlowCard({
  children,
  color,
  glowColor,
  isDimmed = false,
  isSelected = false,
  isOpened = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
  style,
  delay = 0,
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const cursorGlow = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, ${glowColor} 0%, transparent 60%)`,
  );

  const glowing = isHovered || isSelected;
  const active = glowing;

  function glowAlpha(alpha: number) {
    return glowColor.replace(/[\d.]+\)$/, `${alpha})`);
  }

  const cornerShade = `radial-gradient(ellipse 95% 80% at 0% 0%, ${glowAlpha(active ? 0.5 : 0.22)} 0%, transparent 68%), radial-gradient(ellipse 70% 55% at 100% 100%, ${glowAlpha(active ? 0.22 : 0.08)} 0%, transparent 62%)`;

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const borderColor = active
    ? color
    : isOpened
      ? `${color}88`
      : `${color}33`;

  const hoverGlow = active
    ? `0 0 22px ${glowAlpha(0.5)}, inset 0 0 18px ${glowAlpha(0.12)}`
    : "none";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(50);
        mouseY.set(50);
        onMouseLeave?.();
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isDimmed ? 0.4 : 1,
        y: 0,
      }}
      transition={{
        opacity: { duration: 0.25 },
        y: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`group relative isolate w-full cursor-pointer overflow-hidden rounded-xl border text-left outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${className}`}
      style={{
        // Re-enable hits on the card itself; the curved stage disables
        // pointer-events on all wrapper planes (inherited) so they can't
        // intercept. Inline style, since Tailwind classes lose to inherited
        // values applied via the cascade on some wrappers.
        pointerEvents: "auto",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        background: `#0c0c14`,
        boxShadow: hoverGlow,
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        ...style,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: cornerShade }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        animate={{ opacity: active ? 0.9 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ background: cursorGlow }}
      />

      {isOpened && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 rounded-[inherit]"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
      )}

      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.button>
  );
}
