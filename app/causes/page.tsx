"use client";

import { useTheme } from "@/components/theme-context";
import { causes } from "@/components/content";
import EncodedImage from "@/components/EncodedImage";
import Link from "next/link";

export default function CausesPage() {
  const { theme } = useTheme();

  const grid = (
    <div className="grid gap-4 md:grid-cols-4">
      {causes.map((cause) => (
        <div key={cause.name} className="theme-surface rounded-2xl p-4 shadow-soft">
          <EncodedImage src={cause.icon} alt={`${cause.name} icon`} width={64} height={64} />
          <h3 className="mt-3 text-base font-semibold">{cause.name}</h3>
          <p className="mt-2 text-sm text-slate-700">{cause.description}</p>
        </div>
      ))}
    </div>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Global causes, local impact</h1>
          <p className="mt-2 text-sm text-slate-700">
            When we feature causes, we use all cause icons to align with Lions Clubs International brand standards.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-accent" href="/projects">See local projects</Link>
            <Link className="link-outline" href="/get-involved">Volunteer</Link>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          {causes.map((cause) => (
            <div key={cause.name} className="rounded-[20px] border-2 border-[var(--yellow)] bg-[var(--surface)] p-4">
              <EncodedImage src={cause.icon} alt={`${cause.name} icon`} width={64} height={64} />
              <h3 className="mt-3 text-base font-bold">{cause.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{cause.description}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--dark)]">Global causes, local impact</h1>
              <p className="mt-2 text-sm text-slate-700">
                When we feature causes, we use all cause icons to align with Lions Clubs International brand standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/projects">See local projects</Link>
              <Link className="link-outline" href="/get-involved">Volunteer</Link>
            </div>
          </div>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Global causes, local impact</h1>
          <p className="mt-2 text-sm text-slate-700">
            When we feature causes, we use all cause icons to align with Lions Clubs International brand standards.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-pill" href="/projects">See local projects</Link>
            <Link className="link-outline" href="/get-involved">Volunteer</Link>
          </div>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Global causes, local impact</h1>
          <p className="mt-3 text-sm text-slate-700">
            When we feature causes, we use all cause icons to align with Lions Clubs International brand standards.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/projects">See local projects</Link>
            <Link className="link-outline" href="/get-involved">Volunteer</Link>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          {causes.map((cause) => (
            <div key={cause.name} className="theme-surface rounded-2xl p-4">
              <EncodedImage src={cause.icon} alt={`${cause.name} icon`} width={56} height={56} />
              <h3 className="mt-3 text-base font-semibold">{cause.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{cause.description}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Global causes, local impact</h1>
        <p className="mt-2 text-sm text-slate-700">
          When we feature causes, we use all cause icons to align with Lions Clubs International brand standards.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="link-pill" href="/projects">See local projects</Link>
          <Link className="link-outline" href="/get-involved">Volunteer</Link>
        </div>
      </section>
      {grid}
    </div>
  );
}
