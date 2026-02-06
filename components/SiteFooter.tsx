export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-8 text-sm md:px-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-semibold">Maricopa Lions Club</div>
          <div className="text-xs text-[var(--dark)]">We Serve. Serving a world in need.</div>
        </div>
        <div className="text-xs text-slate-600">© 2026 Maricopa Lions</div>
      </div>
    </footer>
  );
}
