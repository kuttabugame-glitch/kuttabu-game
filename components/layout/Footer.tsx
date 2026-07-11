"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const t = useTranslations("Footer");
  const groups = t.raw("groups") as FooterGroup[];

  return (
    <footer className="bg-gradient-to-b from-[#8A1F2D] to-[#6F1825] px-6 py-20 text-[#F7F3EA]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" aria-label="Kuttabu">
              <img
                src="/images/logo.svg"
                alt="Kuttabu"
                draggable={false}
                className="h-14 w-auto select-none brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#F7F3EA]/70">
              {t("brandDescription")}
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F7F3EA]">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F7F3EA]/70 transition-colors duration-200 hover:text-[#F7F3EA]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-[#F7F3EA]/15 pt-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              {t("download")}
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#" aria-label="App Store">
                <img
                  src="/images/app-store.svg"
                  alt="App Store"
                  draggable={false}
                  className="h-11 w-fit transition-transform duration-200 hover:scale-[1.02]"
                />
              </a>

              <a href="#" aria-label="Google Play">
                <img
                  src="/images/google-play.svg"
                  alt="Google Play"
                  draggable={false}
                  className="h-11 w-fit transition-transform duration-200 hover:scale-[1.02]"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              {t("contact")}
            </h3>

            <a
              href="mailto:support@kuttabu.com"
              className="mt-5 block text-sm text-[#F7F3EA]/70 transition-colors duration-200 hover:text-[#F7F3EA]"
            >
              support@kuttabu.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              {t("social")}
            </h3>

            <a
              href="https://instagram.com/kuttabugame"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-sm text-[#F7F3EA]/70 transition-colors duration-200 hover:text-[#F7F3EA]"
            >
              <img
                src="/images/instagram.svg"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 brightness-0 invert opacity-70"
              />

              {t("instagram")}
            </a>
          </div>
        </div>

        <p className="mt-12 max-w-4xl text-sm leading-7 text-[#F7F3EA]/55">
          {t("seoText")}
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#F7F3EA]/15 pt-8 text-sm text-[#F7F3EA]/55 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>
          <p>{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}