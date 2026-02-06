"use client";

import { useTheme } from "@/components/theme-context";
import { galleryImages } from "@/components/content";
import EncodedImage from "@/components/EncodedImage";

export default function GalleryPage() {
  const { theme } = useTheme();

  const grid = (
    <div className="grid gap-3 md:grid-cols-3">
      {galleryImages.map((src, idx) => (
        <div key={src} className="overflow-hidden rounded-2xl theme-surface shadow-soft">
          <EncodedImage
            src={src}
            alt={`Maricopa Lions Club gallery image ${idx + 1}`}
            width={640}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  if (theme === "playful") {
    return (
      <div className="grid gap-8">
        <section className="rounded-[26px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong">
          <h1 className="text-3xl font-black text-[var(--dark)]">Gallery</h1>
          <p className="mt-2 text-sm text-slate-700">Service, fellowship, and community partnerships in action.</p>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-3xl font-semibold text-[var(--dark)]">Gallery</h1>
          <p className="mt-2 text-sm text-slate-700">Service, fellowship, and community partnerships in action.</p>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="theme-surface rounded-2xl p-6">
          <h1 className="text-3xl font-semibold serif text-[var(--dark)]">Gallery</h1>
          <p className="mt-2 text-sm text-slate-700">Service, fellowship, and community partnerships in action.</p>
        </section>
        {grid}
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-[var(--dark)]">Gallery</h1>
          <p className="mt-2 text-sm text-slate-700">Service, fellowship, and community partnerships in action.</p>
        </section>
        {grid}
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="theme-surface rounded-2xl p-6 shadow-soft">
        <h1 className="text-3xl font-semibold text-[var(--dark)]">Gallery</h1>
        <p className="mt-2 text-sm text-slate-700">Service, fellowship, and community partnerships in action.</p>
      </section>
      {grid}
    </div>
  );
}
