import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NavBar from "@/components/NavBar";

export default function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-6 py-5 shadow-sm md:px-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo/emblem_lions.png"
            alt="Lions emblem"
            width={52}
            height={52}
            priority
          />
          <div>
            <div className="text-lg font-bold">Maricopa Lions Club</div>
            <div className="text-xs font-semibold text-[var(--purple)]">Serving a world in need.</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "Facebook", href: "#", src: "https://api.iconify.design/simple-icons:facebook.svg?color=000000" },
              { label: "Bluesky", href: "#", src: "https://api.iconify.design/simple-icons:bluesky.svg?color=000000" },
              { label: "Instagram", href: "#", src: "https://api.iconify.design/simple-icons:instagram.svg?color=000000" },
              { label: "YouTube", href: "#", src: "https://api.iconify.design/simple-icons:youtube.svg?color=000000" },
              { label: "LinkedIn", href: "#", src: "https://api.iconify.design/simple-icons:linkedin.svg?color=000000" },
              { label: "Sora", href: "#", src: "https://api.iconify.design/simple-icons:openai.svg?color=000000" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-soft transition hover:border-[var(--blue)]"
              >
                <img
                  src={social.src}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <NavBar />
    </header>
  );
}
