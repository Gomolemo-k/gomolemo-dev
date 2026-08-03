export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  tags: string[];
  href: string;
  image?: string;
  logo?: string;
  highlights: { label: string; detail: string }[];
  techStack: { category: string; items: string[] }[];
  role: string;
}

export const projects: Project[] = [
  {
    slug: "myself-pilot",
    title: "MySelf Pilot",
    subtitle: "Autonomous Vehicle Middleware Hub",
    description:
      "Full stack middleware hub connecting autonomous vehicle taxi companies, logistics fleets, delivery operators, and city transport systems into a unified ecosystem for shared payments, tariffs, user data, and vehicle access.",
    longDescription: [
      "MySelf Pilot is a production grade full stack platform that serves as a middleware hub for the autonomous vehicle ecosystem. It connects disparate operators — autonomous taxi companies, logistics fleets, delivery services, and city transport authorities — into a single unified network for sharing payments, tariffs, user authentication, and vehicle access data.",
      "The platform features a Stripe billing system supporting monthly and annual subscriptions, lifetime memberships, and credit based pricing tiers. It includes a customer portal, webhook processing for real time payment events, and revenue tracking dashboards.",
      "A GitHub integrated protocol management system provides version tracking, document rendering, threaded discussions, voting, proposals, and bidirectional repository synchronisation. The platform also integrates multi provider AI capabilities via the Vercel AI SDK for chat, image generation, and text processing workflows.",
      "Built with Next.js App Router using server actions and Drizzle ORM on Neon PostgreSQL, with Better Auth supporting Google OAuth and credentials across 8 internationalised locales. Deployed via Docker standalone builds with Dokploy for production orchestration.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe",
      "Better Auth",
      "Vercel AI SDK",
      "Tailwind CSS v4",
      "Docker / Dokploy",
    ],
    href: "https://myselfpilot.com",
    image: "/project/myselfpilot/myselfpilot-homepage.png",
    logo: "/logos/myselfpilot/myselfpilot-logo.png",
    highlights: [
      {
        label: "Billing System",
        detail:
          "4 tier pricing with monthly/annual subscriptions, lifetime memberships, and credit based tiers. Stripe customer portal and webhook driven revenue tracking.",
      },
      {
        label: "AI Integration",
        detail:
          "Multi provider AI (OpenAI, DeepSeek, Google, Fireworks, Replicate, Fal) via Vercel AI SDK for chat, image generation, and text processing.",
      },
      {
        label: "GitHub Sync",
        detail:
          "Protocol management with version tracking, threaded discussions, voting, proposals, and bidirectional repository synchronisation via Octokit.",
      },
      {
        label: "Internationalisation",
        detail:
          "Full platform translation across 8 locales with next-intl, including RTL support and locale aware formatting.",
      },
    ],
    techStack: [
      {
        category: "Framework",
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript"],
      },
      {
        category: "Styling",
        items: ["Tailwind CSS v4", "Radix UI", "shadcn/ui", "Framer Motion"],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Drizzle ORM", "Neon"],
      },
      {
        category: "Auth",
        items: ["Better Auth", "Google OAuth", "Credentials"],
      },
      {
        category: "Payments",
        items: ["Stripe", "Customer Portal", "Webhooks"],
      },
      {
        category: "AI",
        items: [
          "Vercel AI SDK",
          "OpenAI",
          "DeepSeek",
          "Google Gemini",
          "Fireworks",
          "Replicate",
          "Fal",
        ],
      },
      {
        category: "DevOps",
        items: ["Docker", "Dokploy", "CI/CD"],
      },
    ],
    role: "Sole full stack developer and architect — designed the system architecture, implemented every feature, managed infrastructure, and coordinated the complete development lifecycle.",
  },
  {
    slug: "axons-protocol",
    title: "AXONS Protocol Website",
    subtitle: "Official Consortium Platform for IoT Security Protocol",
    description:
      "Official consortium platform for the AXIONS open IoT security protocol. Production grade SaaS featuring protocol specification docs, tiered membership with Stripe billing, AI powered protocol assistant with RAG, compliance certification suite, MCP server, and complete internationalization across 8 languages.",
    longDescription: [
      "AXONS (Advanced eXchange Open Nodes Security) is an open, security first protocol standard for real time IoT communication. The website serves as the official consortium platform hosting the full protocol specification, managing tiered membership, providing an AI powered protocol assistant, and running a compliance certification suite.",
      "The platform features a comprehensive protocol specification documentation site built with Fumadocs MDX, supporting versioning, full text search, and multi section navigation. The tiered membership system includes Free, Contributor ($5K), Corporate ($15K), and Strategic ($45K) tiers with automated Stripe billing, customer portal, and role based access control.",
      "A key feature is the AI Protocol Assistant — a RAG powered Q&A chatbot using Orama vector embeddings for semantic document search, orchestrated through n8n workflows and powered by Google Gemini 2.0 Flash. The platform also includes a general AI chat with multi model support (GPT-4o, DeepSeek R1, Perplexity), an AI image generation playground, and a compliance testing suite with a full certification engine.",
      "Additional capabilities include an MCP (Model Context Protocol) server exposing protocol resources and tools, a blog and newsletter system using NocoDB CMS with React Email and Resend automations, a user dashboard with account management and support tickets, and a complete admin panel. The entire platform is internationalised across 8 languages (EN, ZH, AR, ES, FR, KO, JA, DE) using next-intl.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe",
      "Better Auth",
      "Vercel AI SDK",
      "Tailwind CSS v4",
      "Fumadocs / MDX",
      "n8n",
      "Resend",
      "NocoDB",
      "Orama",
      "Radix UI / shadcn/ui",
      "Google Gemini",
      "Docker / Dokploy",
    ],
    href: "https://axonsprotocol.com",
    image: "/project/axons/axons-homepage.png",
    logo: "/logos/axons/axons-green.logo.png",
    highlights: [
      {
        label: "AI Protocol Assistant",
        detail:
          "RAG powered chatbot using Orama vector embeddings for semantic search, n8n workflow orchestration, and Google Gemini 2.0 Flash for context aware answers with source citations.",
      },
      {
        label: "Compliance Certification",
        detail:
          "Full certification engine for protocol conformance testing, with automated test suites and compliance certificate generation.",
      },
      {
        label: "MCP Server",
        detail:
          "Model Context Protocol server exposing protocol resources and tools, with full audit logging, session tracking, and chat persistence.",
      },
      {
        label: "8 Language i18n",
        detail:
          "Complete UI translation across English, Chinese, Arabic, Spanish, French, Korean, Japanese, and German with next-intl.",
      },
    ],
    techStack: [
      {
        category: "Framework",
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5.8"],
      },
      {
        category: "Styling",
        items: [
          "Tailwind CSS v4",
          "Radix UI",
          "shadcn/ui",
          "Framer Motion",
        ],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Drizzle ORM (18 migrations)", "Neon"],
      },
      {
        category: "Auth",
        items: ["Better Auth", "Google OAuth", "Microsoft OAuth", "Apple OAuth"],
      },
      {
        category: "Payments",
        items: ["Stripe", "Subscriptions", "One time", "Customer Portal"],
      },
      {
        category: "AI / LLM",
        items: [
          "Vercel AI SDK",
          "OpenAI",
          "Google Gemini",
          "DeepSeek",
          "OpenRouter",
        ],
      },
      {
        category: "RAG",
        items: ["Orama (Vector Embeddings)", "Semantic Search"],
      },
      {
        category: "Workflow",
        items: ["n8n"],
      },
      {
        category: "CMS",
        items: ["NocoDB", "Fumadocs MDX"],
      },
      {
        category: "Email",
        items: ["React Email", "Resend"],
      },
      {
        category: "i18n",
        items: ["next-intl (8 locales)"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Dokploy", "Cloudflare R2", "pnpm", "Biome"],
      },
    ],
    role: "Sole full stack developer and architect — designed the system architecture, implemented every feature, managed infrastructure, and coordinated the complete development lifecycle.",
  },
  {
    slug: "axons-agent-skill-registry",
    title: "AXONS AI Agent Skill Registry",
    subtitle: "Machine Executable Protocol Skill Registry",
    description:
      "AI agent skill registry published on the skills.sh ecosystem, encoding core IoT communication protocol standards into machine executable skill definitions for automated development workflows.",
    longDescription: [
      "The AXONS AI Agent Skill Registry is a structured collection of machine executable skill definitions that encode the AXONS protocol standards into reusable capabilities for AI coding agents. Published on the verified skills.sh ecosystem, the registry enables automated development workflows by providing agents with precise protocol specifications.",
      "The registry contains protocol modules that encode core networking standards including TLS 1.3, WebSockets, Ed25519, PKI, OAuth 2.0, and JSON RPC into structured, machine readable skill definitions. Each module is designed to be consumed by AI agents during code generation, ensuring protocol compliant outputs.",
      "A multi agent AI system with 8 role based agents generates protocol compliant outputs directly from structured specifications. These agents handle TLS configurations, WebSocket implementations, audit logging systems, and certification test suites, all verified against the AXONS protocol standard.",
      "The registry is installable via npx skills add Germangalia/axons-agents-skills and provides reusable AI capabilities for coding agents across protocol workflows and compliance levels. Built with Fumadocs MDX for documentation and the Vercel AI SDK for agent orchestration.",
    ],
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Fumadocs",
      "MDX",
      "Vercel AI SDK",
      "Docker",
    ],
    href: "https://www.skills.sh/germangalia/axons-agents-skills",
    image: "/project/skill/skill.png",
    logo: "/logos/skills/skills.png",
    highlights: [
      {
        label: "Structured Registry",
        detail:
          "Protocol modules encoding TLS 1.3, WebSockets, Ed25519, PKI, OAuth 2.0, and JSON RPC into machine executable skill definitions.",
      },
      {
        label: "Multi Agent System",
        detail:
          "8 role based AI agents that generate protocol compliant outputs including TLS configs, WebSocket implementations, audit logs, and certification test suites.",
      },
      {
        label: "Ecosystem Integration",
        detail:
          "Published on verified skills.sh ecosystem, installable via npx, and designed for seamless integration with AI coding agent workflows.",
      },
    ],
    techStack: [
      {
        category: "Framework",
        items: ["Next.js", "React 19", "TypeScript"],
      },
      {
        category: "Documentation",
        items: ["Fumadocs", "MDX"],
      },
      {
        category: "AI",
        items: ["Vercel AI SDK", "Multi Agent Architecture"],
      },
      {
        category: "DevOps",
        items: ["Docker", "npm"],
      },
    ],
    role: "Designed and implemented the structured skill registry, engineered the multi agent AI system, and published the registry to the skills.sh ecosystem.",
  },
  {
    slug: "open-cav-alliance",
    title: "Open CAV Alliance",
    subtitle: "SaaS Platform for Connected & Automated Vehicle Standards",
    description:
      "Full featured SaaS platform for the Connectivity, Automation, and Vehicle Alliance. Membership hub with tiered Stripe billing, GitHub synced protocol management, AI chat assistant, developer certification, community events, 8 language i18n, and a comprehensive analytics suite.",
    longDescription: [
      "Open CAV Alliance is a full featured SaaS platform for the Connectivity, Automation, and Vehicle Alliance — an organization developing open standards and protocols for connected and automated vehicles. It serves as a membership hub where industry professionals, researchers, and developers can collaborate on protocol proposals, access certification programs, attend events, manage memberships, and participate in technical discussions.",
      "The platform features a tiered membership system with Stripe billing (Free Community, Contributor $5K/yr, Corporate $15K/yr, Strategic $45K/yr) including checkout sessions, customer portal, and webhook handling with retry logic. A GitHub synced protocol management system provides versioning, document browsing, threaded commenting, voting, proposals, and issue tracking with bidirectional repository synchronisation.",
      "AI capabilities include a multi model chatbot (GPT-4o, DeepSeek R1) with streaming, source citations, and reasoning display; multi provider image generation (Replicate, OpenAI, Fireworks, Fal.ai); and AI powered web content analysis using Firecrawl. The platform also includes a developer certification and compliance tracking system, community features like member directories and discussion forums, events and meetings management, and a support ticket system powered by Aidbase.",
      "Content is managed through Fumadocs MDX for documentation and changelog, and NocoDB as a headless CMS for blog and news content. A bi weekly newsletter system automates content compilation and delivery via Resend with React Email templates. The platform is fully internationalised across 8 languages and includes 10+ analytics providers with environment based toggling.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Stripe",
      "Better Auth",
      "Vercel AI SDK",
      "Tailwind CSS v4",
      "Radix UI / shadcn/ui",
      "Fumadocs / MDX",
      "n8n",
      "Resend",
      "NocoDB",
      "Orama",
      "Firecrawl",
      "Google Gemini",
      "Docker / Dokploy",
      "Cloudflare R2",
    ],
    href: "https://opencavalliance.com",
    image: "/project/opencav/opencav-homepage.png",
    logo: "/logos/opencav/new-logo.png",
    highlights: [
      {
        label: "Provider Abstraction",
        detail:
          "Mail, payment, newsletter, and storage all use interchangeable provider interfaces — swap Resend for Beehiiv without changing business logic.",
      },
      {
        label: "AI Chat Assistant",
        detail:
          "Multi model chatbot with streaming, source citations, and reasoning display. Supports GPT-4o and DeepSeek R1 with web search integration.",
      },
      {
        label: "GitHub Synced Protocols",
        detail:
          "Protocol management with versioning, document browsing, threaded commenting, voting, proposals, and issue tracking synced bidirectionally via GitHub.",
      },
      {
        label: "Analytics Suite",
        detail:
          "10+ analytics providers (Google, Umami, Plausible, PostHog, Clarity, Vercel, OpenPanel, Seline, DataFast) with environment based toggling from a single entry point.",
      },
      {
        label: "Multi Platform Deploy",
        detail:
          "Docker multi stage build for Dokploy, Vercel hosting with cron jobs, Cloudflare Workers via OpenNext.js, and GitHub Actions CI/CD.",
      },
    ],
    techStack: [
      {
        category: "Framework",
        items: ["Next.js 16 (App Router)", "React 19", "TypeScript 5.8"],
      },
      {
        category: "Styling",
        items: ["Tailwind CSS v4", "Radix UI", "shadcn/ui", "Motion (Framer Motion)"],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Drizzle ORM (15 tables)", "Drizzle Kit"],
      },
      {
        category: "Auth",
        items: ["Better Auth", "GitHub OAuth", "Google OAuth", "Microsoft OAuth", "Apple OAuth"],
      },
      {
        category: "Payments",
        items: ["Stripe", "Subscriptions", "Checkout Sessions", "Customer Portal"],
      },
      {
        category: "AI / LLM",
        items: [
          "Vercel AI SDK v5",
          "OpenAI",
          "Google AI",
          "DeepSeek",
          "Replicate",
          "Fal.ai",
          "Fireworks",
          "OpenRouter",
          "Firecrawl",
        ],
      },
      {
        category: "Search",
        items: ["Orama", "Fuse.js"],
      },
      {
        category: "Email",
        items: ["React Email", "Resend"],
      },
      {
        category: "CMS & Content",
        items: ["Fumadocs MDX", "NocoDB"],
      },
      {
        category: "i18n",
        items: ["next-intl (8 locales)"],
      },
      {
        category: "State & UI",
        items: ["Zustand", "TanStack Query", "TanStack Table", "Recharts"],
      },
      {
        category: "Infrastructure",
        items: [
          "Docker (multi stage)",
          "Vercel",
          "Cloudflare Workers",
          "Cloudflare R2",
          "GitHub Actions",
          "Biome",
        ],
      },
    ],
    role: "Full stack developer and sole contributor — designed the entire system architecture with provider abstraction patterns, built all features from authentication to AI, managed infrastructure across Docker, Vercel, and Cloudflare deployments.",
  },
];
