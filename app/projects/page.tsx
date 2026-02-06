"use client";

import { useTheme } from "@/components/theme-context";
import projects from "@/data/projects.json";
import { serviceActivities, supportOrganizations } from "@/components/content";
import EncodedImage from "@/components/EncodedImage";
import Link from "next/link";

function mapLinks(address?: string) {
  if (!address) return null;
  const encoded = encodeURIComponent(address);
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <a
        className="link-pill text-xs"
        href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
        target="_blank"
        rel="noreferrer"
      >
        Google Maps
      </a>
      <a
        className="link-outline text-xs"
        href={`https://maps.apple.com/?q=${encoded}`}
        target="_blank"
        rel="noreferrer"
      >
        Apple Maps
      </a>
    </div>
  );
}

export default function ProjectsPage() {
  const { theme } = useTheme();

  const projectCards = (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.title} className="theme-surface overflow-hidden rounded-2xl shadow-soft">
          <EncodedImage
            src={project.image}
            alt={project.title}
            width={640}
            height={420}
            className="h-56 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
            {mapLinks((project as { address?: string }).address)}
          </div>
        </article>
      ))}
    </div>
  );

  const lists = (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="theme-surface rounded-2xl p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Service activities</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700">
          {serviceActivities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="theme-surface rounded-2xl p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Organizations we support</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700">
          {supportOrganizations.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Projects and local service</h1>
          <p className="mt-2 text-sm text-slate-700">
            Hands-on work that supports neighbors across Maricopa. Update project details in the JSON file.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-accent" href="/get-involved">Volunteer</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        {projectCards}
        {lists}
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--dark)]">Projects and local service</h1>
              <p className="mt-2 text-sm text-slate-700">
                Hands-on work that supports neighbors across Maricopa. Update project details in the JSON file.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Volunteer</Link>
              <Link className="link-outline" href="/get-involved">Get involved</Link>
            </div>
          </div>
        </section>
        {projectCards}
        {lists}
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Projects and local service</h1>
          <p className="mt-2 text-sm text-slate-700">
            Hands-on work that supports neighbors across Maricopa. Update project details in the JSON file.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Volunteer</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        {projectCards}
        {lists}
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Projects and local service</h1>
          <p className="mt-2 text-sm text-slate-700">
            Hands-on work that supports neighbors across Maricopa. Update project details in the JSON file.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Volunteer</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        {projectCards}
        {lists}
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Projects and local service</h1>
        <p className="mt-2 text-sm text-slate-700">
          Hands-on work that supports neighbors across Maricopa. Update project details in the JSON file.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="link-pill" href="/get-involved">Volunteer</Link>
          <Link className="link-outline" href="/get-involved">Get involved</Link>
        </div>
      </section>
      {projectCards}
      {lists}
    </div>
  );
}
