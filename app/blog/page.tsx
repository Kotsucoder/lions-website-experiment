"use client";

import { useTheme } from "@/components/theme-context";
import posts from "@/data/blog.json";
import Link from "next/link";

export default function BlogPage() {
  const { theme } = useTheme();

  const list = (
    <div className="grid gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <article key={post.title} className="theme-surface rounded-2xl p-5 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-accent">{post.date}</div>
          <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{post.summary}</p>
          <div className="mt-3 text-sm font-semibold text-[var(--blue)]">Read story</div>
        </article>
      ))}
    </div>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Club stories and updates</h1>
          <p className="mt-2 text-sm text-slate-700">Short, respectful stories that highlight people and partnerships.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-accent" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">See events</Link>
          </div>
        </section>
        <section className="rounded-[24px] border-2 border-[var(--yellow)] bg-[var(--surface)] p-5">
          <p className="text-sm text-slate-700">Update stories by editing <code className="font-semibold">data/blog.json</code>.</p>
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
              <h1 className="text-3xl font-semibold text-[var(--dark)]">Club stories and updates</h1>
              <p className="mt-2 text-sm text-slate-700">Short, respectful stories that highlight people and partnerships.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Get involved</Link>
              <Link className="link-outline" href="/calendar">See events</Link>
            </div>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-5 shadow-soft">
          <p className="text-sm text-slate-700">Update stories by editing <code className="font-semibold">data/blog.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Club stories and updates</h1>
          <p className="mt-2 text-sm text-slate-700">Short, respectful stories that highlight people and partnerships.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">See events</Link>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-5">
          <p className="text-sm text-slate-700">Update stories by editing <code className="font-semibold">data/blog.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Club stories and updates</h1>
          <p className="mt-2 text-sm text-slate-700">Short, respectful stories that highlight people and partnerships.</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Get involved</Link>
            <Link className="link-outline" href="/calendar">See events</Link>
          </div>
        </section>
        <section className="theme-surface rounded-2xl p-4">
          <p className="text-sm text-slate-700">Update stories by editing <code className="font-semibold">data/blog.json</code>.</p>
        </section>
        {list}
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Club stories and updates</h1>
        <p className="mt-2 text-sm text-slate-700">Short, respectful stories that highlight people and partnerships.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="link-pill" href="/get-involved">Get involved</Link>
          <Link className="link-outline" href="/calendar">See events</Link>
        </div>
      </section>
      <section className="theme-surface rounded-2xl p-5 shadow-soft">
        <p className="text-sm text-slate-700">Update stories by editing <code className="font-semibold">data/blog.json</code>.</p>
      </section>
      {list}
    </div>
  );
}
