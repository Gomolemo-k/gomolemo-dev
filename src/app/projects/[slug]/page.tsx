import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { brandIcon } from "@/components/techIcons";

const gradients = [
  "from-accent to-accent-hover",
  "from-accent-hover to-accent",
  "from-accent/80 to-accent-hover/80",
  "from-accent-hover/80 to-accent/80",
];

function initials(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const domain = project.href.replace(/^https?:\/\//, "");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <svg
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to projects
        </Link>

        <div className="relative mb-16 overflow-hidden rounded-2xl border border-border bg-card">
          <div
            className={`relative h-40 bg-gradient-to-br sm:h-56 ${gradients[0]}`}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-card/20" />
              </>
            ) : project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-contain p-6 sm:p-10"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/90 sm:text-8xl">
                {initials(project.title)}
              </span>
            )}
          </div>
          <div className="relative -mt-12 px-6 pb-6 sm:-mt-14 sm:px-10 sm:pb-8">
            <div className="relative mb-5 flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg sm:size-20 sm:p-2">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  fill
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-accent sm:text-2xl">
                  {initials(project.title)}
                </span>
              )}
            </div>
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {project.subtitle}
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag}>{brandIcon(tag)}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Live
                <svg
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <span className="text-sm text-muted">{domain}</span>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            About the project.
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted">
              {project.description}
            </p>
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Features
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {h.label}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{h.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Tech Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.techStack.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-border bg-card p-4"
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {cat.category}
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-muted"
                    >
                      {brandIcon(item)}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">
            My Role
          </h2>
          <p className="leading-relaxed text-muted">{project.role}</p>
        </section>
      </div>
    </div>
  );
}
