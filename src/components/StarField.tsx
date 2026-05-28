/**
 * Shared star-field + constellation utilities for Octo Manus
 */
import { ROSE } from "@/components/site-chrome";

export type StarData = {
  top: number;
  left: number;
  size: number;
  opacityMin: number;
  opacityMax: number;
  duration: number;
  delay: number;
  blur: number;
};

/**
 * Generate deterministic, galaxy-style star positions.
 * Default size is small (0.7–2.2 px) — distant stars, not Christmas baubles.
 * brightnessScale 1.0 → opacityMax 0.55–1.0.
 */
export function makeStars(
  count: number,
  seedOffset: number,
  area: { top: [number, number]; left: [number, number] },
  sizeRange: [number, number] = [0.7, 2.2],
  brightnessScale = 1.0
): StarData[] {
  const rand = (seed: number) => {
    const x = Math.sin(seed + seedOffset) * 10000;
    return x - Math.floor(x);
  };
  return Array.from({ length: count }, (_, i) => {
    const oMax = brightnessScale * (0.55 + rand(i * 4.3 + 3) * 0.45);
    return {
      top: area.top[0] + rand(i * 1.3) * (area.top[1] - area.top[0]),
      left: area.left[0] + rand(i * 2.7 + 1) * (area.left[1] - area.left[0]),
      size: sizeRange[0] + rand(i * 3.1 + 2) * (sizeRange[1] - sizeRange[0]),
      opacityMin: rand(i * 9.1 + 7) * 0.06,
      opacityMax: Math.min(oMax, 1.0),
      duration: 1.8 + rand(i * 6.1 + 5) * 3.5,
      delay: rand(i * 7.7 + 6) * 8,
      blur: rand(i * 5.7 + 4) > 0.88 ? 0.6 : 0,
    };
  });
}

/**
 * Thin constellation lines between nearby "anchor" stars.
 * Picks every `every`-th star as an anchor, then connects each to
 * its nearest 1–2 neighbours within `maxDist` percent of page.
 */
export function ConstellationLines({
  stars,
  every = 9,
  maxDist = 20,
  color = ROSE,
  lineOpacity = 0.18,
}: {
  stars: StarData[];
  every?: number;
  maxDist?: number;
  color?: string;
  lineOpacity?: number;
}) {
  // Evenly-spaced anchor nodes, capped at 40
  const nodes = stars.filter((_, i) => i % every === 0).slice(0, 40);

  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const used = new Set<string>();

  nodes.forEach((a, i) => {
    let count = 0;
    const sorted = nodes
      .map((b, j) => ({
        b,
        j,
        // Correct for typical aspect ratio so distances look natural
        d: Math.hypot((a.left - b.left) * 1.7, a.top - b.top),
      }))
      .filter(({ j }) => j !== i)
      .sort((x, y) => x.d - y.d);

    for (const { b, j, d } of sorted) {
      if (count >= 2) break;
      if (d < 5 || d > maxDist) continue;
      const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
      if (used.has(key)) continue;
      used.add(key);
      lines.push({ x1: a.left, y1: a.top, x2: b.left, y2: b.top });
      count++;
    }
  });

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
      style={{ overflow: "hidden" }}
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={`${l.x1}%`}
          y1={`${l.y1}%`}
          x2={`${l.x2}%`}
          y2={`${l.y2}%`}
          stroke={color}
          strokeWidth="0.45"
          opacity={lineOpacity}
        />
      ))}
    </svg>
  );
}

export function StarField({
  stars,
  className = "",
}: {
  stars: StarData[];
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {stars.map((s, i) => {
        const g1 = Math.max(2, Math.round(s.size * 2));
        const g2 = Math.max(4, Math.round(s.size * 4));
        const g3 = Math.max(7, Math.round(s.size * 6));
        return (
          <span
            key={i}
            className="star-shimmer absolute rounded-full"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: ROSE,
              boxShadow: `0 0 ${g1}px rgba(233,181,166,0.95), 0 0 ${g2}px rgba(244,199,185,0.55), 0 0 ${g3}px rgba(233,181,166,0.2)`,
              filter: s.blur ? `blur(${s.blur}px)` : "none",
              ["--star-opacity-min" as never]: s.opacityMin,
              ["--star-opacity-max" as never]: s.opacityMax,
              ["--star-duration" as never]: `${s.duration}s`,
              ["--star-delay" as never]: `-${s.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
