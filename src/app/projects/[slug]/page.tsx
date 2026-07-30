import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

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

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
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

        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {project.subtitle}
        </span>
        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted underline underline-offset-4 transition-colors hover:text-accent"
        >
          {project.href}
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

        <p className="mb-12 text-lg leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mb-12 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Overview
          </h2>
          <div className="space-y-4">
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Key Highlights
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

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Tech Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.techStack.map((cat) => (
              <div key={cat.category}>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {cat.category}
                </h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="size-1 rounded-full bg-accent" />
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
