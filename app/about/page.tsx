"use client";

import { useTheme } from "@/components/theme-context";
import { clubIntro, globalConnection, meetingDetails } from "@/components/content";
import Link from "next/link";

export default function AboutPage() {
  const { theme } = useTheme();

  const cards = [
    { title: "Who we are", text: clubIntro },
    { title: "Our global connection", text: globalConnection },
    { title: "Meetings", text: meetingDetails }
  ];

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">About the Maricopa Lions Club</h1>
          <p className="mt-3 text-sm text-slate-700">Short, clear facts about the club, our mission, and how we serve.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="link-accent" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[20px] border-2 border-[var(--yellow)] bg-[var(--surface)] p-5">
              <h2 className="text-lg font-bold text-[var(--dark)]">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{card.text}</p>
            </div>
          ))}
        </section>
        <section className="rounded-[24px] bg-[var(--purple)] p-6 text-white">
          <h2 className="text-xl font-bold">Mission pillars</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Improve health and well-being",
              "Strengthen communities",
              "Support those in need"
            ].map((pillar) => (
              <div key={pillar} className="rounded-[18px] border border-white/30 bg-white/10 p-4">
                <div className="text-sm font-semibold">{pillar}</div>
                <p className="mt-2 text-xs text-white/90">Focused service that responds to local needs.</p>
              </div>
            ))}
          </div>
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
              <h1 className="text-3xl font-semibold text-[var(--dark)]">About the Maricopa Lions Club</h1>
              <p className="mt-2 text-sm text-slate-700">Short, clear facts about the club, our mission, and how we serve.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Get involved</Link>
              <Link className="link-outline" href="/get-involved">Get involved</Link>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-12">
          {cards.map((card) => (
            <div key={card.title} className="theme-surface rounded-2xl p-5 shadow-soft md:col-span-4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{card.text}</p>
            </div>
          ))}
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {[
            "Improve health and well-being",
            "Strengthen communities",
            "Support those in need"
          ].map((pillar) => (
            <div key={pillar} className="theme-surface rounded-2xl p-5 shadow-soft">
              <h3 className="text-base font-semibold">{pillar}</h3>
              <p className="mt-2 text-sm text-slate-700">Focused service that responds to local needs.</p>
            </div>
          ))}
        </section>
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">About the Maricopa Lions Club</h1>
          <p className="mt-3 text-sm text-slate-700">Short, clear facts about the club, our mission, and how we serve.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="theme-surface rounded-xl p-5">
              <h2 className="text-lg font-semibold serif">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{card.text}</p>
            </div>
          ))}
        </section>
        <section className="theme-surface rounded-2xl p-6">
          <h2 className="text-xl font-semibold serif">Mission pillars</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Improve health and well-being",
              "Strengthen communities",
              "Support those in need"
            ].map((pillar) => (
              <div key={pillar} className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4">
                <div className="text-sm font-semibold serif">{pillar}</div>
                <p className="mt-2 text-xs text-slate-700">Focused service that responds to local needs.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">About the Maricopa Lions Club</h1>
          <p className="mt-3 text-sm text-slate-700">Short, clear facts about the club, our mission, and how we serve.</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/get-involved">Get involved</Link>
          </div>
        </section>
        {cards.map((card) => (
          <section key={card.title} className="theme-surface rounded-2xl p-4">
            <h2 className="text-base font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{card.text}</p>
          </section>
        ))}
        <section className="theme-surface rounded-2xl p-4">
          <h2 className="text-base font-semibold">Mission pillars</h2>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            <li>Improve health and well-being</li>
            <li>Strengthen communities</li>
            <li>Support those in need</li>
          </ul>
        </section>
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">About the Maricopa Lions Club</h1>
        <p className="mt-3 text-sm text-slate-700">Short, clear facts about the club, our mission, and how we serve.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="link-pill" href="/get-involved">Get involved</Link>
          <Link className="link-outline" href="/get-involved">Get involved</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="theme-surface rounded-xl p-5 shadow-soft">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{card.text}</p>
          </div>
        ))}
      </section>
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-[var(--dark)]">Mission pillars</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "Improve health and well-being",
            "Strengthen communities",
            "Support those in need"
          ].map((pillar) => (
            <div key={pillar} className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4">
              <div className="text-sm font-semibold">{pillar}</div>
              <p className="mt-2 text-xs text-slate-700">Focused service that responds to local needs.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
