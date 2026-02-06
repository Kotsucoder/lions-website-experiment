"use client";

import { useTheme } from "@/components/theme-context";
import Link from "next/link";

const actions = [
  { title: "Volunteer", text: "Support screenings, events, and community partnerships." },
  { title: "Attend meetings", text: "Visit a meeting to learn more about local service." },
  { title: "Support the tournament", text: "Help power local service through the annual golf tournament." },
  { title: "Share resources", text: "Donate eyeglasses or hearing aids for neighbors in need." }
];

export default function GetInvolvedPage() {
  const { theme } = useTheme();

  const grid = (
    <div className="grid gap-4 md:grid-cols-2">
      {actions.map((action) => (
        <div key={action.title} className="theme-surface rounded-2xl p-5 shadow-soft">
          <h3 className="text-lg font-semibold">{action.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{action.text}</p>
        </div>
      ))}
    </div>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Get involved</h1>
          <p className="mt-2 text-sm text-slate-700">There is a place for every skill set and schedule.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-accent" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">Visit a meeting</Link>
          </div>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--dark)]">Get involved</h1>
              <p className="mt-2 text-sm text-slate-700">There is a place for every skill set and schedule.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Get involved</Link>
              <Link className="link-outline" href="/calendar">Visit a meeting</Link>
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
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Get involved</h1>
          <p className="mt-2 text-sm text-slate-700">There is a place for every skill set and schedule.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">Visit a meeting</Link>
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
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Get involved</h1>
          <p className="mt-2 text-sm text-slate-700">There is a place for every skill set and schedule.</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">Visit a meeting</Link>
          </div>
        </section>
        {grid}
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Get involved</h1>
        <p className="mt-2 text-sm text-slate-700">There is a place for every skill set and schedule.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="link-pill" href="/get-involved">Get involved</Link>
          <Link className="link-outline" href="/calendar">Visit a meeting</Link>
        </div>
      </section>
      {grid}
    </div>
  );
}
