"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Homepage" },
  { href: "/about", label: "About" },
  { href: "/causes", label: "Causes" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/calendar", label: "Calendar" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/gallery", label: "Gallery" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-3 py-1 font-semibold transition ${
              active
                ? "bg-[var(--blue)] text-white"
                : "bg-[var(--muted)] text-[var(--dark)] hover:bg-[var(--yellow)]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
