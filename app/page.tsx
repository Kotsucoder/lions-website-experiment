"use client";

import EncodedImage from "@/components/EncodedImage";
import { useTheme } from "@/components/theme-context";
import { clubIntro, meetingDetails } from "@/components/content";
import Link from "next/link";

export default function HomePage() {
  const { theme } = useTheme();

  if (theme === "playful") {
    return (
      <div className="grid gap-10">
        <section className="grid gap-6 rounded-[28px] border-2 border-[var(--accent)] bg-[var(--surface)] p-6 shadow-strong md:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[var(--purple)]">Maricopa Lions Club</span>
            <h1 className="text-4xl font-black text-[var(--dark)]">Local service with joyful momentum.</h1>
            <p className="text-base text-slate-700">
              Serving neighbors through vision care, hearing support, and community partnerships since 2015.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="link-accent" href="/get-involved">Volunteer with us</Link>
              <Link className="link-outline" href="/calendar">See upcoming events</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] border-2 border-[var(--yellow)] bg-[var(--muted)]">
            <EncodedImage
              src="/assets/stock/woman and child.jpg.avif"
              alt="Community care"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Meetings", text: "2nd & 4th Tuesdays, Sep-Apr. Social at 4:30 PM, meeting at 5:00 PM." },
            { title: "Fundraising", text: "Annual Golf Tournament fuels local service and support." },
            { title: "Service", text: "Vision and hearing screenings, therapy dog visits, and food support." }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border-2 border-[var(--yellow)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-lg font-bold text-[var(--dark)]">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-[24px] bg-[var(--purple)] p-6 text-white md:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-3">
            <h2 className="text-2xl font-bold">Serving Maricopa with care</h2>
            <p className="text-sm text-white/90">{clubIntro}</p>
            <p className="text-sm text-white/90">{meetingDetails}</p>
          </div>
          <div className="overflow-hidden rounded-[20px] border-2 border-white/40">
            <EncodedImage
              src="/assets/stock/Youth Basketball Game .jpg.avif"
              alt="Youth basketball"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    );
  }

  if (theme === "bento") {
    return (
      <div className="grid gap-8">
        <section className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7 theme-surface rounded-3xl p-6 shadow-soft">
            <span className="text-xs font-semibold uppercase tracking-[2px] text-accent">Maricopa Lions Club</span>
            <h1 className="mt-3 text-4xl font-bold text-[var(--dark)]">Local service, global purpose.</h1>
            <p className="mt-3 text-slate-700">
              Serving neighbors through vision care, hearing support, and community partnerships since 2015.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Volunteer with us</Link>
              <Link className="link-outline" href="/calendar">See upcoming events</Link>
            </div>
          </div>
          <div className="md:col-span-5 overflow-hidden rounded-3xl theme-surface shadow-soft">
            <EncodedImage
              src="/assets/stock/woman and child.jpg.avif"
              alt="Community care"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-12">
          {["Meetings", "Fundraising", "Service"].map((title, idx) => (
            <div key={title} className="md:col-span-4 theme-surface rounded-2xl p-5 shadow-soft">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {idx === 0 && "2nd & 4th Tuesdays, Sep-Apr. Social at 4:30 PM, meeting at 5:00 PM."}
                {idx === 1 && "Annual Golf Tournament fuels local service and support."}
                {idx === 2 && "Vision and hearing screenings, therapy dog visits, and food support."}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7 theme-surface rounded-2xl p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--dark)]">Serving Maricopa with care</h2>
            <p className="mt-3 text-sm text-slate-700">{clubIntro}</p>
            <p className="mt-3 text-sm text-slate-700">{meetingDetails}</p>
          </div>
          <div className="md:col-span-5 overflow-hidden rounded-2xl theme-surface shadow-soft">
            <EncodedImage
              src="/assets/stock/Youth Basketball Game .jpg.avif"
              alt="Youth basketball"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    );
  }

  if (theme === "classic") {
    return (
      <div className="grid gap-10">
        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="theme-surface rounded-2xl p-6 shadow-soft">
            <span className="text-xs font-semibold uppercase tracking-[2px] text-[var(--purple)]">Maricopa Lions Club</span>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--dark)] serif">Local service with global purpose.</h1>
            <p className="mt-4 text-sm text-slate-700">Serving neighbors through vision care, hearing support, and community partnerships since 2015.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="link-pill" href="/get-involved">Volunteer with us</Link>
              <Link className="link-outline" href="/calendar">See upcoming events</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl theme-surface shadow-soft">
            <EncodedImage
              src="/assets/stock/woman and child.jpg.avif"
              alt="Community care"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Meetings", text: "2nd & 4th Tuesdays, Sep-Apr. Social at 4:30 PM, meeting at 5:00 PM." },
            { title: "Fundraising", text: "Annual Golf Tournament fuels local service and support." },
            { title: "Service", text: "Vision and hearing screenings, therapy dog visits, and food support." }
          ].map((item) => (
            <div key={item.title} className="theme-surface rounded-xl p-5">
              <h3 className="text-lg font-semibold serif">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl theme-surface">
            <EncodedImage
              src="/assets/stock/Youth Basketball Game .jpg.avif"
              alt="Youth basketball"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="theme-surface rounded-2xl p-6">
            <h2 className="text-2xl font-semibold serif">Serving Maricopa with care</h2>
            <p className="mt-3 text-sm text-slate-700">{clubIntro}</p>
            <p className="mt-3 text-sm text-slate-700">{meetingDetails}</p>
          </div>
        </section>
      </div>
    );
  }

  if (theme === "linkbio") {
    return (
      <div className="grid gap-6">
        <section className="theme-surface rounded-3xl p-6 shadow-soft">
          <span className="text-xs font-semibold uppercase tracking-[2px] text-accent">Maricopa Lions Club</span>
          <h1 className="mt-3 text-3xl font-bold text-[var(--dark)]">Local service with global purpose.</h1>
          <p className="mt-3 text-sm text-slate-700">Serving neighbors through vision care, hearing support, and community partnerships since 2015.</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="link-pill" href="/get-involved">Volunteer with us</Link>
            <Link className="link-outline" href="/calendar">See upcoming events</Link>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl theme-surface shadow-soft">
          <EncodedImage
            src="/assets/stock/woman and child.jpg.avif"
            alt="Community care"
            width={720}
            height={460}
            className="h-full w-full object-cover"
          />
        </section>

        <section className="grid gap-4">
          {[
            { title: "Meetings", text: "2nd & 4th Tuesdays, Sep-Apr. Social at 4:30 PM, meeting at 5:00 PM." },
            { title: "Fundraising", text: "Annual Golf Tournament fuels local service and support." },
            { title: "Service", text: "Vision and hearing screenings, therapy dog visits, and food support." }
          ].map((item) => (
            <div key={item.title} className="theme-surface rounded-2xl p-4">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="theme-surface rounded-3xl p-5 shadow-soft">
          <h2 className="text-xl font-semibold text-[var(--dark)]">Serving Maricopa with care</h2>
          <p className="mt-3 text-sm text-slate-700">{clubIntro}</p>
          <p className="mt-3 text-sm text-slate-700">{meetingDetails}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="grid gap-10">
      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="theme-surface rounded-2xl p-6 shadow-soft">
          <span className="text-xs font-semibold uppercase tracking-[2px] text-accent">Maricopa Lions Club</span>
          <h1 className="mt-3 text-4xl font-bold text-[var(--dark)]">Local service with global purpose.</h1>
          <p className="mt-3 text-sm text-slate-700">Serving neighbors through vision care, hearing support, and community partnerships since 2015.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="link-pill" href="/get-involved">Volunteer with us</Link>
            <Link className="link-outline" href="/calendar">See upcoming events</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl theme-surface shadow-soft">
          <EncodedImage
            src="/assets/stock/woman and child.jpg.avif"
            alt="Community care"
            width={520}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Meetings", text: "2nd & 4th Tuesdays, Sep-Apr. Social at 4:30 PM, meeting at 5:00 PM." },
          { title: "Fundraising", text: "Annual Golf Tournament fuels local service and support." },
          { title: "Service", text: "Vision and hearing screenings, therapy dog visits, and food support." }
        ].map((item) => (
          <div key={item.title} className="theme-surface rounded-xl p-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="theme-surface rounded-2xl p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-[var(--dark)]">Serving Maricopa with care</h2>
          <p className="mt-3 text-sm text-slate-700">{clubIntro}</p>
          <p className="mt-3 text-sm text-slate-700">{meetingDetails}</p>
        </div>
        <div className="overflow-hidden rounded-2xl theme-surface shadow-soft">
          <EncodedImage
            src="/assets/stock/Youth Basketball Game .jpg.avif"
            alt="Youth basketball"
            width={520}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
