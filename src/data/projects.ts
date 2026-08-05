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
  video?: string;
}

export const projects: Project[] = [
  {
    slug: "myself-pilot",
    title: "MySelf Pilot",
    subtitle: "The Hub for Autonomous Mobility",
    description:
      "Unified operations platform connecting autonomous taxi companies, delivery fleets, logistics operators, and city transit systems  with live fleet monitoring, remote command and dispatch, smart charging, route optimization, and OTA updates all managed from a single hub.",
    longDescription: [
      "MySelf Pilot is a production grade platform that connects autonomous mobility operators into a single ecosystem. Autonomous taxi companies, delivery fleets, logistics operators, fleet managers, and city transport systems join the same hub so vehicles, riders, and data flow freely across the entire network without complex integrations.",
      "Operators run their whole operation from one command center with live fleet monitoring with remote dispatch and scheduling, automated smart charging and autonomous parking across operational zones, route optimization with a unified cross-operator tariff layer, and telemetry-driven insights with over-the-air updates. The platform scales from a single city fleet to a global network of operators and vehicle types.",
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
        label: "Fleet Operations",
        detail:
          "Live fleet monitoring with a remote command center for real time vehicle tracking, mission dispatch, and scheduling across an entire autonomous fleet.",
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
        label: "Mobility & Traffic",
        detail:
          "Smart charging and autonomous parking management, route optimization, and a unified cross-operator tariff layer for consistent fare handling.",
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
    role: "Sole full stack developer and architect  designed the unified operations hub from the fleet command center to the tariff layer, built every feature, managed infrastructure, and owned the full development lifecycle end to end.",
  },
  {
    slug: "axons-protocol",
    title: "AXONS Protocol Website",
    subtitle: "Secure Open Standard for IoT Communication",
    description:
      "Open, security-first protocol standard for real time IoT communication  unifying peer-to-peer, client-to-server, and server-to-server topologies on TLS 1.3, mTLS, and Ed25519 cryptography. The consortium platform hosts the live specification, an AI protocol assistant, and compliance tooling.",
    longDescription: [
      "AXONS (Advanced eXchange Open Nodes Security) is an open, security-first protocol standard for real time IoT communication. Built on TLS 1.3, mutual TLS, WebSocket, JSON-RPC 2.0, and Ed25519 signatures, it unifies peer-to-peer, client-to-server, and server-to-server topologies into a single battle tested standard — from edge devices to global cloud federations.",
      "The website is the official consortium platform hosting the full protocol specification as a documentation site built with Fumadocs MDX, supporting versioning, full text search, and multi section navigation. Consortium membership provides voting rights in technical decisions, early access to draft specifications, working group participation, and proposal submission.",
      "A key feature is the AI Protocol Assistant a RAG powered Q&A chatbot using Orama vector embeddings for semantic document search, orchestrated through n8n workflows and powered by Google Gemini 2.0 Flash. The platform also includes a general AI chat with multi model support (GPT-4o, DeepSeek R1, Perplexity), an AI image generation playground, and a compliance testing suite with a full certification engine.",
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
    role: "Sole full stack developer and architect  built the consortium platform around the protocol specification, from the AI assistant and compliance engine to the MCP server, and owned infrastructure and the full development lifecycle.",
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
    subtitle: "Ready Made Protocols for Connected & Automated Vehicles",
    description:
      "Platform for the Connectivity, Automation, and Vehicle Alliance, publishing three ready made CAV protocols OCAVM short range vehicle mesh, OCAVS vehicle-to-server management, and OCAVI platform-to-platform interoperability  with developer certification, AI assistance, and community tooling.",
    longDescription: [
      "Open CAV Alliance is the home of the Connectivity, Automation, and Vehicle Alliance an organization publishing ready made protocols for connected and automated vehicles. It ships three open standards: OCAVM for short-range vehicle-to-vehicle mesh and vehicle-to-infrastructure communication, OCAVS for secure vehicle-to-server management, and OCAVI for platform-to-platform interoperability across cities, operators, and service providers.",
      "A GitHub synced protocol management system provides versioning, document browsing, threaded commenting, voting, proposals, and issue tracking with bidirectional repository synchronisation. The alliance experience spans community features like member directories and discussion forums, events and meetings management, and a developer certification and compliance tracking system.",
      "AI capabilities include a multi model chatbot (GPT-4o, DeepSeek R1) with streaming, source citations, and reasoning display; multi provider image generation (Replicate, OpenAI, Fireworks, Fal.ai); and AI powered web content analysis using Firecrawl. A support ticket system is powered by Aidbase.",
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
    role: "Full stack developer and sole contributor — designed the system architecture around the three protocol standards with provider abstraction patterns, built every feature from the protocol registry to AI tooling, and managed multi platform deployments across Docker, Vercel, and Cloudflare.",
  },
  {
    slug: "axons-ai-chatbot",
    title: "AXONS AI Protocol Chatbot",
    subtitle: "n8n-Powered Q&A Assistant for the AXONS Protocol",
    description:
      "AI chatbot that answers questions exclusively about the AXONS protocol — orchestrated with n8n workflows, RAG retrieval over the protocol specification, and citation-backed responses.",
    longDescription: [
      "The AXONS AI Protocol Chatbot is a specialised Q&A assistant that only answers questions about the AXONS protocol — the open, security-first standard for real time IoT communication built on TLS 1.3, mTLS, and Ed25519 cryptography. It gives developers, integrators, and consortium members precise, specification-grounded answers instead of generic responses.",
      "The assistant is orchestrated through n8n workflow automation, which chains the conversation logic, retrieval, and model routing into a reusable workflow. When a user asks a question, the workflow retrieves the relevant sections of the protocol documentation and hands them to the language model with the full conversation context.",
      "Every answer is grounded in the live protocol specification, with source citations letting users trace each response back to the exact protocol section. The chatbot integrates directly with the AXONS Protocol Website and its documentation, keeping answers consistent with the published standard as it evolves.",
      "Built with the Vercel AI SDK for streaming responses, n8n for workflow orchestration, and the same design language as the AXONS platform so the assistant feels native to the ecosystem.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "n8n",
      "Vercel AI SDK",
      "Google Gemini",
      "OpenAI",
      "Orama",
      "RAG",
      "Tailwind CSS",
    ],
    href: "https://axonsprotocol.com",
    image: "/project/aichatbot/n8n-workflow-aichatbot.png",
    logo: "/logos/axons/axons-green.logo.png",
    video: "/project/aichatbot/AIchatbot.mp4",
    highlights: [
      {
        label: "Protocol-Only Focus",
        detail:
          "Restricted to the AXONS protocol, so every answer is specification-grounded — no off-topic or generic responses.",
      },
      {
        label: "n8n Workflow Orchestration",
        detail:
          "Conversation logic, retrieval, and model routing chained into reusable n8n workflows, keeping the assistant easy to maintain and extend.",
      },
      {
        label: "Citation-Backed Answers",
        detail:
          "Each response is traced back to the exact protocol section, with source citations rendered inline so users can verify claims.",
      },
      {
        label: "Streaming Responses",
        detail:
          "Vercel AI SDK streaming for token-by-token responses with the look and feel of the AXONS Platform UI.",
      },
    ],
    techStack: [
      {
        category: "Framework",
        items: ["Next.js", "TypeScript"],
      },
      {
        category: "Workflow",
        items: ["n8n"],
      },
      {
        category: "AI / LLM",
        items: ["Vercel AI SDK", "Google Gemini", "OpenAI"],
      },
      {
        category: "RAG",
        items: ["Orama", "Semantic Search"],
      },
      {
        category: "Styling",
        items: ["Tailwind CSS"],
      },
    ],
    role: "Designed and built the protocol-focused chatbot, engineered the n8n workflows for retrieval and model routing, and integrated it with the AXONS Protocol Website.",
  },
];
