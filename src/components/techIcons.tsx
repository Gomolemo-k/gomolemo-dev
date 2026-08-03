import { type ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRadixui,
  SiShadcnui,
  SiFramer,
  SiMdx,
  SiNodedotjs,
  SiStripe,
  SiResend,
  SiPostgresql,
  SiDrizzle,
  SiNeon,
  SiCloudflare,
  SiCloudflareworkers,
  SiGooglegemini,
  SiDeepseek,
  SiReplicate,
  SiOpenrouter,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiBiome,
  SiPnpm,
  SiNpm,
  SiN8N,
} from "react-icons/si";

function genericIcon(size: number, paths: string | string[]) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {Array.isArray(paths) ? (
        paths.map((d, i) => <path key={i} d={d} />)
      ) : (
        <path d={paths} />
      )}
    </svg>
  );
}

const generic = {
  lock: (s: number) =>
    genericIcon(
      s,
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    ),
  mail: (s: number) =>
    genericIcon(
      s,
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ),
  grid: (s: number) =>
    genericIcon(
      s,
      "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    ),
  search: (s: number) =>
    genericIcon(s, "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"),
  layers: (s: number) =>
    genericIcon(s, ["M12 3l9 5-9 5-9-5 9-5z", "M3 12l9 5 9-5"]),
  sparkles: (s: number) =>
    genericIcon(
      s,
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    ),
  server: (s: number) =>
    genericIcon(s, [
      "M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
      "M4 16a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z",
      "M7 7h.01",
      "M7 17h.01",
    ]),
  globe: (s: number) =>
    genericIcon(s, [
      "M12 21a9 9 0 100-18 9 9 0 000 18z",
      "M3 12h18",
      "M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
    ]),
  chart: (s: number) =>
    genericIcon(
      s,
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    ),
  code: (s: number) => genericIcon(s, ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"]),
  table: (s: number) =>
    genericIcon(
      s,
      "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    ),
  flow: (s: number) =>
    genericIcon(
      s,
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    ),
};

export function brandIcon(name: string, size = 14) {
  const n = name.toLowerCase();
  const colored = (Icon: typeof SiReact, color: string) => (
    <span
      className="flex items-center justify-center"
      style={{ width: size + 2, height: size + 2 }}
    >
      <Icon size={size} color={color} />
    </span>
  );
  const neutral = (node: ReactNode) => (
    <span
      className="flex items-center justify-center text-accent"
      style={{ width: size + 2, height: size + 2 }}
    >
      {node}
    </span>
  );

  if (n.includes("next")) return colored(SiNextdotjs, "#000000");
  if (n.includes("react")) return colored(SiReact, "#61DAFB");
  if (n.includes("typescript")) return colored(SiTypescript, "#3178C6");
  if (n.includes("tailwind")) return colored(SiTailwindcss, "#06B6D4");
  if (n.includes("radix")) return colored(SiRadixui, "#161618");
  if (n.includes("shadcn")) return colored(SiShadcnui, "#000000");
  if (n.includes("framer") || n === "motion")
    return colored(SiFramer, "#0055FF");
  if (n.includes("mdx") || n.includes("fumadocs"))
    return colored(SiMdx, "#1B1F24");
  if (n.includes("node")) return colored(SiNodedotjs, "#5FA04E");
  if (n.includes("stripe")) return colored(SiStripe, "#635BFF");
  if (n.includes("resend")) return colored(SiResend, "#000000");
  if (n.includes("postgres")) return colored(SiPostgresql, "#4169E1");
  if (n.includes("drizzle")) return colored(SiDrizzle, "#C5F74F");
  if (n.includes("neon")) return colored(SiNeon, "#00E599");
  if (n.includes("gemini")) return colored(SiGooglegemini, "#8E75B2");
  if (n.includes("deepseek")) return colored(SiDeepseek, "#4D6BFE");
  if (n.includes("replicate")) return colored(SiReplicate, "#3B3B3B");
  if (n.includes("openrouter")) return colored(SiOpenrouter, "#7C3AED");
  if (n.includes("docker")) return colored(SiDocker, "#2496ED");
  if (n.includes("vercel")) return colored(SiVercel, "#000000");
  if (n.includes("cloudflare workers"))
    return colored(SiCloudflareworkers, "#F38020");
  if (n.includes("cloudflare")) return colored(SiCloudflare, "#F38020");
  if (n.includes("github actions")) return colored(SiGithubactions, "#2088FF");
  if (n.includes("biome")) return colored(SiBiome, "#60A5FA");
  if (n.includes("pnpm")) return colored(SiPnpm, "#F69220");
  if (n.includes("npm")) return colored(SiNpm, "#CB3837");
  if (n.includes("n8n")) return colored(SiN8N, "#EA4B71");
  if (n.includes("oauth") || n.includes("auth")) return neutral(generic.lock(size));
  if (n.includes("semantic") || n.includes("orama"))
    return neutral(generic.search(size));
  if (n.includes("email")) return neutral(generic.mail(size));
  if (n.includes("i18n") || n.includes("intl")) return neutral(generic.globe(size));
  if (n.includes("zustand")) return neutral(generic.layers(size));
  if (n.includes("recharts")) return neutral(generic.chart(size));
  if (n.includes("dokploy")) return neutral(generic.server(size));
  if (n.includes("workflow") || n.includes("agent"))
    return neutral(generic.flow(size));
  if (n.includes("table")) return neutral(generic.table(size));
  if (n.includes("search")) return neutral(generic.search(size));
  return neutral(generic.code(size));
}
