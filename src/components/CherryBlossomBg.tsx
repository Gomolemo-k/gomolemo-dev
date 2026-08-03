"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── CONFIG ──────────────────────────────────────────────────── */
const PETAL_COLORS = [
  "rgba(232,160,180,0.75)",  // accent
  "rgba(242,196,206,0.7)",   // accent-light
  "rgba(214,132,158,0.65)",  // accent-hover
  "rgba(255,210,220,0.6)",   // soft pink
  "rgba(255,182,203,0.55)",  // rose
];

const BRANCH_COUNT = 10;
const AMBIENT_PETAL_COUNT = 30;
const HOVER_BURST_COUNT = 10;
const HOVER_RADIUS = 130;

/* ─── TYPES ───────────────────────────────────────────────────── */
interface Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  wobblePhase: number;
  wobbleSpeed: number;
}

interface BlossomCluster {
  x: number;
  y: number;
  radius: number;
  petalCount: number;
  baseAngle: number;
}

interface Branch {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX: number;
  controlY: number;
  thickness: number;
  clusters: BlossomCluster[];
  subBranches: SubBranch[];
}

interface SubBranch {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX: number;
  controlY: number;
  thickness: number;
}

/* ─── HELPERS ─────────────────────────────────────────────────── */
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickColor() {
  return PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
}

function createPetal(x: number, y: number, burst = false): Petal {
  const life = rand(200, 500);
  return {
    x,
    y,
    size: rand(4, 11),
    rotation: rand(0, Math.PI * 2),
    rotationSpeed: rand(-0.03, 0.03),
    speedX: burst ? rand(-2, 2) : rand(-0.5, 0.5),
    speedY: burst ? rand(1, 3) : rand(0.3, 1.2),
    opacity: rand(0.5, 0.95),
    color: pickColor(),
    life,
    maxLife: life,
    wobblePhase: rand(0, Math.PI * 2),
    wobbleSpeed: rand(0.02, 0.06),
  };
}

/** Evaluate a quadratic bezier at parameter t */
function bezierPoint(
  p0: number,
  cp: number,
  p1: number,
  t: number
): number {
  return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * cp + t * t * p1;
}

function generateBranches(w: number, h: number): Branch[] {
  const branches: Branch[] = [];

  // We distribute branches deliberately: some from each edge
  const edgeDistribution = [
    // Top edge - 2 branches
    { edge: 0 as const, count: 2 },
    // Right edge - 3 branches
    { edge: 1 as const, count: 3 },
    // Bottom edge - 2 branches
    { edge: 2 as const, count: 2 },
    // Left edge - 3 branches
    { edge: 3 as const, count: 3 },
  ];

  for (const { edge, count } of edgeDistribution) {
    for (let i = 0; i < count; i++) {
      const segment = (i + 0.5) / count; // Even distribution along each edge

      let startX: number,
        startY: number,
        endX: number,
        endY: number;

      switch (edge) {
        case 0: // from top
          startX = w * (0.1 + segment * 0.8);
          startY = rand(-40, -5);
          endX = startX + rand(-120, 120);
          endY = rand(120, h * 0.35);
          break;
        case 1: // from right
          startX = rand(w + 5, w + 40);
          startY = h * (0.05 + segment * 0.85);
          endX = w - rand(120, w * 0.35);
          endY = startY + rand(-100, 100);
          break;
        case 2: // from bottom
          startX = w * (0.1 + segment * 0.8);
          startY = rand(h + 5, h + 40);
          endX = startX + rand(-120, 120);
          endY = h - rand(120, h * 0.35);
          break;
        default: // from left
          startX = rand(-40, -5);
          startY = h * (0.05 + segment * 0.85);
          endX = rand(120, w * 0.35);
          endY = startY + rand(-100, 100);
      }

      const controlX = (startX + endX) / 2 + rand(-80, 80);
      const controlY = (startY + endY) / 2 + rand(-80, 80);
      const thickness = rand(2, 4.5);

      // Place blossom clusters along the branch
      const clusterCount = Math.floor(rand(3, 8));
      const clusters: BlossomCluster[] = [];
      for (let c = 0; c < clusterCount; c++) {
        const t = rand(0.25, 1.0);
        const cx = bezierPoint(startX, controlX, endX, t);
        const cy = bezierPoint(startY, controlY, endY, t);
        clusters.push({
          x: cx,
          y: cy,
          radius: rand(16, 32),
          petalCount: Math.floor(rand(5, 10)),
          baseAngle: rand(0, Math.PI * 2),
        });
      }

      // Create sub-branches for a more natural tree look
      const subCount = Math.floor(rand(1, 4));
      const subBranches: SubBranch[] = [];
      for (let s = 0; s < subCount; s++) {
        const t = rand(0.3, 0.8);
        const bx = bezierPoint(startX, controlX, endX, t);
        const by = bezierPoint(startY, controlY, endY, t);
        const subEndX = bx + rand(-70, 70);
        const subEndY = by + rand(-70, 70);
        subBranches.push({
          startX: bx,
          startY: by,
          endX: subEndX,
          endY: subEndY,
          controlX: (bx + subEndX) / 2 + rand(-30, 30),
          controlY: (by + subEndY) / 2 + rand(-30, 30),
          thickness: thickness * rand(0.4, 0.7),
        });
      }

      branches.push({
        startX,
        startY,
        endX,
        endY,
        controlX,
        controlY,
        thickness,
        clusters,
        subBranches,
      });
    }
  }

  return branches;
}

/* ─── DRAW HELPERS ────────────────────────────────────────────── */
function drawBranchCurve(
  ctx: CanvasRenderingContext2D,
  sx: number,
  sy: number,
  cx: number,
  cy: number,
  ex: number,
  ey: number,
  thickness: number
) {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.quadraticCurveTo(cx, cy, ex, ey);
  ctx.strokeStyle = "rgba(100, 65, 55, 0.5)";
  ctx.lineWidth = thickness;
  ctx.lineCap = "round";
  ctx.stroke();
}

function drawBranch(ctx: CanvasRenderingContext2D, branch: Branch) {
  // Main branch
  drawBranchCurve(
    ctx,
    branch.startX,
    branch.startY,
    branch.controlX,
    branch.controlY,
    branch.endX,
    branch.endY,
    branch.thickness
  );

  // Sub-branches
  for (const sub of branch.subBranches) {
    drawBranchCurve(
      ctx,
      sub.startX,
      sub.startY,
      sub.controlX,
      sub.controlY,
      sub.endX,
      sub.endY,
      sub.thickness
    );
  }
}

function drawCluster(
  ctx: CanvasRenderingContext2D,
  cluster: BlossomCluster,
  isHovered: boolean
) {
  const { x, y, radius, petalCount, baseAngle } = cluster;
  const scale = isHovered ? 1.15 : 1;

  for (let i = 0; i < petalCount; i++) {
    const angle = baseAngle + (i / petalCount) * Math.PI * 2;
    const px = x + Math.cos(angle) * radius * 0.5 * scale;
    const py = y + Math.sin(angle) * radius * 0.5 * scale;

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(angle);

    // Petal shape (ellipse)
    ctx.beginPath();
    ctx.ellipse(
      0,
      0,
      radius * 0.42 * scale,
      radius * 0.22 * scale,
      0,
      0,
      Math.PI * 2
    );

    const glowOpacity = isHovered ? 0.85 : 0.65;
    ctx.fillStyle = PETAL_COLORS[i % PETAL_COLORS.length].replace(
      /[\d.]+\)$/,
      `${glowOpacity})`
    );
    ctx.fill();

    // Subtle petal outline
    ctx.strokeStyle = `rgba(200,120,140,${isHovered ? 0.3 : 0.15})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.restore();
  }

  // Center stamen
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.12 * scale, 0, Math.PI * 2);
  ctx.fillStyle = isHovered
    ? "rgba(255,180,60,0.9)"
    : "rgba(255,200,100,0.7)";
  ctx.fill();

  // Glow effect on hover
  if (isHovered) {
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2);
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.8);
    glow.addColorStop(0, "rgba(232,160,180,0.15)");
    glow.addColorStop(1, "rgba(232,160,180,0)");
    ctx.fillStyle = glow;
    ctx.fill();
  }
}

function drawPetal(ctx: CanvasRenderingContext2D, petal: Petal) {
  const fadeRatio = petal.life / petal.maxLife;
  const alpha = petal.opacity * fadeRatio;

  ctx.save();
  ctx.translate(petal.x, petal.y);
  ctx.rotate(petal.rotation);
  ctx.globalAlpha = alpha;

  // Draw petal shape
  ctx.beginPath();
  ctx.ellipse(0, 0, petal.size, petal.size * 0.55, 0, 0, Math.PI * 2);
  ctx.fillStyle = petal.color;
  ctx.fill();

  // Inner highlight
  ctx.beginPath();
  ctx.ellipse(
    -petal.size * 0.15,
    -petal.size * 0.1,
    petal.size * 0.35,
    petal.size * 0.2,
    -0.3,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.fill();

  ctx.restore();
  ctx.globalAlpha = 1;
}

/* ─── COMPONENT ───────────────────────────────────────────────── */
export default function CherryBlossomBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const branchesRef = useRef<Branch[]>([]);
  const petalsRef = useRef<Petal[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const lastBurstRef = useRef<{ [key: string]: number }>({});

  const initBranches = useCallback((w: number, h: number) => {
    branchesRef.current = generateBranches(w, h);

    // Seed ambient petals across the viewport
    const petals: Petal[] = [];
    for (let i = 0; i < AMBIENT_PETAL_COUNT; i++) {
      petals.push(createPetal(rand(0, w), rand(0, h)));
    }
    petalsRef.current = petals;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initBranches(w, h);
    };

    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", resize);

    /* ─── ANIMATION LOOP ──────────────────────────────────────── */
    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      const branches = branchesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw branches & clusters, detect hover
      for (const branch of branches) {
        drawBranch(ctx, branch);
        for (const cluster of branch.clusters) {
          const dx = mx - cluster.x;
          const dy = my - cluster.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isHovered = dist < HOVER_RADIUS;

          drawCluster(ctx, cluster, isHovered);

          // Burst petals on hover (throttled)
          if (isHovered) {
            const key = `${Math.round(cluster.x)}_${Math.round(cluster.y)}`;
            const now = Date.now();
            if (
              !lastBurstRef.current[key] ||
              now - lastBurstRef.current[key] > 500
            ) {
              lastBurstRef.current[key] = now;
              for (let i = 0; i < HOVER_BURST_COUNT; i++) {
                petalsRef.current.push(
                  createPetal(
                    cluster.x + rand(-12, 12),
                    cluster.y + rand(-12, 12),
                    true
                  )
                );
              }
            }
          }
        }
      }

      // Update & draw falling petals
      const alive: Petal[] = [];
      for (const p of petalsRef.current) {
        p.wobblePhase += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobblePhase) * 0.6;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.life--;

        if (p.life > 0 && p.y < h + 30) {
          drawPetal(ctx, p);
          alive.push(p);
        }
      }

      // Replenish ambient petals from top
      while (alive.length < AMBIENT_PETAL_COUNT) {
        alive.push(createPetal(rand(0, w), rand(-30, -5)));
      }

      petalsRef.current = alive;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [initBranches]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
