"use client";

import { useTranslations } from "next-intl";

export default function Download() {
  const t = useTranslations("Download");

  return (
    <section id="indir" className="mt-36 text-center">
      <h2 className="text-[clamp(42px,6vw,72px)] font-semibold leading-[0.96] tracking-[-0.055em]">
        {t("title")}
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <img src="/images/app-store.svg" alt="App Store" className="h-16" />
        <img
          src="/images/google-play.svg"
          alt="Google Play"
          className="h-16"
        />
      </div>
    </section>
  );
}