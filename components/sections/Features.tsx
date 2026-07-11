"use client";

import { useTranslations } from "next-intl";

const icons = ["𐱅", "•", "↗", "✦"];
const classes = ["md:col-span-2", "", "", "md:col-span-2"];

export default function Features() {
  const t = useTranslations("Features");
  const items = t.raw("items") as Array<{
    title: string;
    body: string;
  }>;

  return (
    <section id="ozellikler" className="mt-36">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B28A3C]">
          {t("eyebrow")}
        </p>

        <h2 className="mt-6 text-[clamp(42px,6vw,72px)] font-semibold leading-[0.98] tracking-[-0.055em]">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((feature, index) => (
          <article
            key={feature.title}
            className={`relative overflow-hidden rounded-[34px] border border-[#E7DDC9] bg-[#F7F3EA] p-8 shadow-[0_18px_60px_rgba(32,24,19,.045)] ${classes[index]}`}
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#B28A3C]/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7DDC9] bg-[#FFFDF8] text-2xl font-semibold text-[#8A1F2D]">
                {icons[index]}
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-lg text-base font-normal leading-7 text-[#7B7167]">
                {feature.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}