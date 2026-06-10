export interface ColumnCurve {
  translateX: number;
  translateZ: number;
  rotateY: number;
}

export const ARC_SPAN = 0.46;

function toDeg(rad: number) {
  return (rad * 180) / Math.PI;
}

export function getArcChordStep(total: number) {
  const dTheta = ARC_SPAN / (total - 1);
  return dTheta;
}

/** Radius so arc chord between columns = colW + gap */
export function getRadiusForSpacing(colW: number, gap: number, total: number) {
  const dTheta = getArcChordStep(total);
  return (colW + gap) / (2 * Math.sin(dTheta / 2));
}

export function getArcStageWidth(radius: number, colW: number) {
  const half = ARC_SPAN / 2;
  return 2 * radius * Math.sin(half) + colW;
}

export function getColumnCurve(
  index: number,
  total: number,
  radius: number,
): ColumnCurve {
  const half = ARC_SPAN / 2;
  const theta = -half + (index / (total - 1)) * ARC_SPAN;

  return {
    translateX: radius * Math.sin(theta),
    translateZ: radius * (1 - Math.cos(theta)),
    rotateY: -toDeg(theta),
  };
}
