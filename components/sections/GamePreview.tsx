"use client";

import { useTranslations } from "next-intl";

export default function GamePreview() {
  const t = useTranslations("GamePreview");
  const tabooWords = t.raw("tabooWords") as string[];

  return (
    <section id="oyun" className="grid gap-16 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B28A3C]">
          {t("eyebrow")}
        </p>

        <h1 className="mt-6 max-w-xl text-[clamp(44px,6vw,82px)] font-semibold leading-[0.96] tracking-[-0.06em]">
          {t("title")}
        </h1>

        <p className="mt-8 max-w-lg text-lg font-normal leading-8 text-[#7B7167]">
          {t("description")}
        </p>
      </div>

      <div className="rounded-[36px] border border-[#E7DDC9] bg-[#F7F3EA] p-6 shadow-[0_30px_90px_rgba(32,24,19,.08)]">
        <div className="rounded-[28px] border border-[#E7DDC9] bg-[#FFFDF8] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B28A3C]">
            {t("category")}
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em]">
            {t("word")}
          </h2>

          <div className="mt-8 grid gap-3">
            {tabooWords.map((word) => (
              <div
                key={word}
                className="rounded-2xl border border-[#E7DDC9] bg-[#F7F3EA] px-5 py-4 font-medium text-[#7B7167]"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}