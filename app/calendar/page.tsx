"use client";

import { useTheme } from "@/components/theme-context";
import events from "@/data/calendar.json";
import Link from "next/link";

function mapLinks(address?: string) {
  if (!address) return null;
  const encoded = encodeURIComponent(address);
  return (
    <div className="mt-3 flex flex-wrap gap-2">
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

export default function CalendarPage() {
  const { theme } = useTheme();

  const list = (
    <ul className="grid gap-4">
      {events.map((event) => (
        <li key={`${event.date}-${event.title}`} className="theme-surface grid gap-2 rounded-2xl p-5 shadow-soft md:grid-cols-[160px_1fr]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-accent">{event.date}</div>
          <div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-slate-700">{event.location}</p>
            <p className="text-sm text-slate-600">{event.time}</p>
            {mapLinks(event.address)}
          </div>
        </li>
      ))}
    </ul>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Calendar</h1>
          <p className="mt-2 text-sm text-slate-700">Our schedule is updated regularly. Check back for new service events.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-accent" href="/get-involved">Attend a meeting</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        <section className="rounded-[24px] border-2 border-[var(--yellow)] bg-[var(--surface)] p-5">
          <p className="text-sm text-slate-700">Update events by editing <code className="font-semibold">data/calendar.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--dark)]">Calendar</h1>
              <p className="mt-2 text-sm text-slate-700">Our schedule is updated regularly. Check back for new service events.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Attend a meeting</Link>
              <Link className="link-outline" href="/get-involved">Get involved</Link>
            </div>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-5 shadow-soft">
          <p className="text-sm text-slate-700">Update events by editing <code className="font-semibold">data/calendar.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Calendar</h1>
          <p className="mt-2 text-sm text-slate-700">Our schedule is updated regularly. Check back for new service events.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Attend a meeting</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-5">
          <p className="text-sm text-slate-700">Update events by editing <code className="font-semibold">data/calendar.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Calendar</h1>
          <p className="mt-2 text-sm text-slate-700">Our schedule is updated regularly. Check back for new service events.</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Attend a meeting</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-4">
          <p className="text-sm text-slate-700">Update events by editing <code className="font-semibold">data/calendar.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Calendar</h1>
        <p className="mt-2 text-sm text-slate-700">Our schedule is updated regularly. Check back for new service events.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="link-pill" href="/get-involved">Attend a meeting</Link>
          <Link className="link-outline" href="/get-involved">Get involved</Link>
        </div>
      </section>
      <section className="theme-surface rounded-2xl p-5 shadow-soft">
        <p className="text-sm text-slate-700">Update events by editing <code className="font-semibold">data/calendar.json</code>.</p>
      </section>
      {list}
    </div>
  );
}
