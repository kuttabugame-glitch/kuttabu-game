"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

type Locale = "tr" | "en";

export default function Navbar() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLocale, setSelectedLocale] = useState<Locale>(locale);
  const [isChanging, setIsChanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSelectedLocale(locale);
    setIsChanging(false);
  }, [locale]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const changeLanguage = (nextLocale: Locale) => {
    if (nextLocale === selectedLocale || isChanging) return;

    setSelectedLocale(nextLocale);
    setIsChanging(true);

    timeoutRef.current = setTimeout(() => {
      router.replace(pathname, {
        locale: nextLocale,
        scroll: false,
      });
    }, 420);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7DDC9]/80 bg-[#FFFDF8]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href={`/${locale}`} aria-label={t("homeLabel")}>
          <img
            src="/images/logo.svg"
            alt="Kuttabu"
            draggable={false}
            className="h-7 w-auto select-none sm:h-9"
          />
        </a>

        <div
          role="group"
          aria-label={t("languageLabel")}
          className="relative flex h-9 w-[78px] items-center rounded-full border border-[#E7DDC9] bg-[#F7F3EA] p-1 shadow-[0_8px_24px_rgba(32,24,19,0.05)] sm:h-11 sm:w-[94px]"
        >
          <span
            aria-hidden="true"
            className="absolute left-1 top-1 h-7 w-[33px] rounded-full bg-[#8A1F2D] shadow-[0_10px_24px_rgba(138,31,45,0.22)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-9 sm:w-[42px]"
            style={{
              transform:
                selectedLocale === "en"
                  ? "translateX(35px)"
                  : "translateX(0px)",
            }}
          />

          <button
            type="button"
            onClick={() => changeLanguage("tr")}
            aria-pressed={selectedLocale === "tr"}
            className={`relative z-10 flex h-7 w-[33px] items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 sm:h-9 sm:w-[42px] sm:text-sm ${
              selectedLocale === "tr"
                ? "text-[#FFFDF8]"
                : "text-[#7B7167] hover:text-[#201813]"
            }`}
          >
            TR
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("en")}
            aria-pressed={selectedLocale === "en"}
            className={`relative z-10 flex h-7 w-[33px] items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 sm:h-9 sm:w-[42px] sm:text-sm ${
              selectedLocale === "en"
                ? "text-[#FFFDF8]"
                : "text-[#7B7167] hover:text-[#201813]"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}