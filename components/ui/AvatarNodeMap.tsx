"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Skill definitions ────────────────────────────────────────────────────────
// distance is expressed as a ratio of the SVG half-size (0.0–1.0)
// so pills always stay proportionally placed regardless of canvas size
// 12 skills evenly spread at 30° increments (360/12 = 30)
// alternating distRatio 0.86 / 0.90 so adjacent pills don't collide
const SKILLS = [
  {
    label: "TypeScript",
    angle: 0,
    distRatio: 0.86,
    bg: "#EEF0FE",
    text: "#3C3489",
    border: "#AFA9EC",
    activeBg: "#3178C6",
    activeText: "#fff",
  },
  {
    label: "React",
    angle: 30,
    distRatio: 0.9,
    bg: "#E1F5EE",
    text: "#085041",
    border: "#5DCAA5",
    activeBg: "#61DAFB",
    activeText: "#0F0F0F",
  },
  {
    label: "Next.js",
    angle: 60,
    distRatio: 0.86,
    bg: "#F1EFE8",
    text: "#444441",
    border: "#B4B2A9",
    activeBg: "#000",
    activeText: "#fff",
  },
  {
    label: "UI / UX",
    angle: 90,
    distRatio: 0.9,
    bg: "#FAEEDA",
    text: "#633806",
    border: "#EF9F27",
    activeBg: "#FF9F43",
    activeText: "#0F0F0F",
  },
  {
    label: "Framer",
    angle: 120,
    distRatio: 0.86,
    bg: "#FBEAF0",
    text: "#72243E",
    border: "#ED93B1",
    activeBg: "#D4537E",
    activeText: "#fff",
  },
  {
    label: "Figma",
    angle: 150,
    distRatio: 0.9,
    bg: "#FAECE7",
    text: "#712B13",
    border: "#F0997B",
    activeBg: "#F24E1E",
    activeText: "#fff",
  },
  {
    label: "Node.js",
    angle: 180,
    distRatio: 0.86,
    bg: "#EAF3DE",
    text: "#27500A",
    border: "#97C459",
    activeBg: "#3C873A",
    activeText: "#fff",
  },
  {
    label: "Laravel",
    angle: 210,
    distRatio: 0.9,
    bg: "#FCEBEB",
    text: "#791F1F",
    border: "#F09595",
    activeBg: "#E24B4A",
    activeText: "#fff",
  },
  {
    label: "C# / .NET",
    angle: 240,
    distRatio: 0.86,
    bg: "#EEEDFE",
    text: "#3C3489",
    border: "#AFA9EC",
    activeBg: "#9B59B6",
    activeText: "#fff",
  },
  {
    label: "Java",
    angle: 270,
    distRatio: 0.9,
    bg: "#FAECE7",
    text: "#712B13",
    border: "#F0997B",
    activeBg: "#993C1D",
    activeText: "#fff",
  },
  {
    label: "SQL",
    angle: 300,
    distRatio: 0.86,
    bg: "#E6F1FB",
    text: "#0C447C",
    border: "#85B7EB",
    activeBg: "#378ADD",
    activeText: "#fff",
  },
  {
    label: "Supabase",
    angle: 330,
    distRatio: 0.9,
    bg: "#E1F5EE",
    text: "#085041",
    border: "#5DCAA5",
    activeBg: "#1D9E75",
    activeText: "#fff",
  },
] as const;

function polar(deg: number, dist: number) {
  const r = ((deg - 90) * Math.PI) / 180;
  return { x: Math.cos(r) * dist, y: Math.sin(r) * dist };
}

// Floating idle animation per pill
function useFloat(seed: number) {
  const [off, setOff] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let raf: number;
    const spd = 0.0005 + seed * 0.00016;
    const tick = (t: number) => {
      setOff({
        x: Math.sin(t * spd + seed * 0.9) * (3 + (seed % 3)),
        y: Math.cos(t * spd * 0.75 + seed * 1.3) * (2.5 + (seed % 4)),
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seed]);
  return off;
}

// ─── Single pill + connector ──────────────────────────────────────────────────
function Pill({
  skill,
  index,
  cx,
  avatarR,
  canvasSize,
  active,
  onEnter,
  onLeave,
}: {
  skill: (typeof SKILLS)[number];
  index: number;
  cx: number; // canvas center (= canvasSize / 2)
  avatarR: number; // avatar circle radius in px
  canvasSize: number; // current rendered size of the SVG square
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const dist = (canvasSize / 2) * skill.distRatio;
  const pos = polar(skill.angle, dist);
  const f = useFloat(index);

  const x = cx + pos.x + f.x;
  const y = cx + pos.y + f.y;
  const lx = cx + (pos.x / dist) * avatarR;
  const ly = cx + (pos.y / dist) * avatarR;

  // pill size scales with canvas
  const pillW = Math.max(80, Math.min(120, canvasSize * 0.28));
  const pillH = Math.max(24, Math.min(34, canvasSize * 0.08));
  const fontSize = Math.max(10, Math.min(13, canvasSize * 0.032));

  return (
    <>
      <line
        x1={lx}
        y1={ly}
        x2={x}
        y2={y}
        stroke={active ? "#7F77DD" : "#CBD5E1"}
        strokeWidth={active ? "1.2" : "0.7"}
        strokeDasharray="4 3"
        style={{ transition: "stroke 0.28s, stroke-width 0.28s" }}
      />
      <foreignObject
        x={x - pillW / 2}
        y={y - pillH / 2}
        width={pillW}
        height={pillH}
        style={{ overflow: "visible" }}
      >
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            border: `1px solid ${active ? "transparent" : skill.border}`,
            background: active ? skill.activeBg : skill.bg,
            color: active ? skill.activeText : skill.text,
            fontSize: `${fontSize}px`,
            fontWeight: 600,
            cursor: "pointer",
            userSelect: "none",
            whiteSpace: "nowrap",
            fontFamily: "inherit",
            transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
            transform: active ? "scale(1.06)" : "scale(1)",
            boxShadow: active ? "0 2px 10px rgba(0,0,0,0.10)" : "none",
          }}
        >
          {skill.label}
        </div>
      </foreignObject>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AvatarNodeMap() {
  const [active, setActive] = useState<number | null>(null);
  const [size, setSize] = useState(320); // actual rendered px width
  const containerRef = useRef<HTMLDivElement>(null);

  // Observe container width and keep `size` in sync
  const measure = useCallback(() => {
    if (containerRef.current) {
      const w = containerRef.current.getBoundingClientRect().width;
      if (w > 0) setSize(w);
    }
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const C = size / 2;
  // Avatar radius scales with canvas — between 52px and 90px
  const avatarR = Math.max(52, Math.min(90, size * 0.2));
  // Clip radius slightly smaller than ring
  const clipR = avatarR - 2;

  return (
    // This outer div fills whatever space the parent gives it.
    // On lg it will be ~50% of the row; on mobile it's full width.
    // We cap it at 520px so it doesn't balloon on ultra-wide screens.
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "520px",
        aspectRatio: "1 / 1", // always a square so pills never clip
        position: "relative",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{ overflow: "visible", display: "block" }}
      >
        <defs>
          <radialGradient id="ng-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7F77DD" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#7F77DD" stopOpacity="0" />
          </radialGradient>
          <clipPath id="ng-clip">
            <circle cx={C} cy={C} r={clipR} />
          </clipPath>
        </defs>

        {/* aura glow */}
        <ellipse
          cx={C}
          cy={C}
          rx={size * 0.34}
          ry={size * 0.34}
          fill="url(#ng-aura)"
        />

        {/* pulse rings */}
        {([0, 1.4] as const).map((delay, i) => (
          <circle
            key={i}
            cx={C}
            cy={C}
            r={avatarR}
            fill="none"
            stroke="#7F77DD"
            strokeWidth="0.8"
            opacity="0"
          >
            <animate
              attributeName="r"
              from={avatarR + 2}
              to={avatarR + size * 0.16}
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.28"
              to="0"
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* connector lines + pills — rendered behind avatar */}
        {SKILLS.map((skill, i) => (
          <Pill
            key={skill.label}
            skill={skill}
            index={i}
            cx={C}
            avatarR={avatarR}
            canvasSize={size}
            active={active === i}
            onEnter={() => setActive(i)}
            onLeave={() => setActive(null)}
          />
        ))}

        {/* avatar base — drawn on top of lines so it's clean */}
        <circle
          cx={C}
          cy={C}
          r={avatarR}
          fill="white"
          stroke="#E5E7EB"
          strokeWidth="1.5"
        />

        {/* photo */}
        <image
          href="/images/picture.png"
          x={C - clipR}
          y={C - clipR}
          width={clipR * 2}
          height={clipR * 2}
          clipPath="url(#ng-clip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* active accent ring */}
        <circle
          cx={C}
          cy={C}
          r={avatarR}
          fill="none"
          stroke={active !== null ? "#7F77DD" : "#E5E7EB"}
          strokeWidth="1.5"
          style={{ transition: "stroke 0.3s" }}
        />
      </svg>
    </div>
  );
}
