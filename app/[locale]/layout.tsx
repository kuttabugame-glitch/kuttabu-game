import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://kuttabu.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const seoContent = {
  tr: {
    title: "Kuttabu | Türk Dünyasının Tabu Oyunu",
    description:
      "Türk tarihini ve Türk dünyasını eğlenceli bir tabu deneyimiyle keşfet. Takımını kur, kartları anlat ve Kuttabu ile bilgini yarıştır.",
    locale: "tr_TR",
  },
  en: {
    title: "Kuttabu | The Taboo Game of the Turkic World",
    description:
      "Discover Turkic history and culture through an entertaining taboo game. Build your team, describe the cards and test your knowledge with Kuttabu.",
    locale: "en_US",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const seo = seoContent[locale];
  const currentUrl = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: seo.title,
      template: `%s | Kuttabu`,
    },

    description: seo.description,

    applicationName: "Kuttabu",

    keywords:
      locale === "tr"
        ? [
            "Kuttabu",
            "Türk tarihi oyunu",
            "Türk dünyası oyunu",
            "tabu oyunu",
            "Türk tarihi tabu",
            "mobil tabu oyunu",
            "Türk kültürü",
            "tarih bilgi oyunu",
          ]
        : [
            "Kuttabu",
            "Turkic history game",
            "Turkic world game",
            "taboo game",
            "Turkish history game",
            "mobile taboo game",
            "Turkic culture",
            "history trivia game",
          ],

    authors: [
      {
        name: "Kuttabu",
        url: SITE_URL,
      },
    ],

    creator: "Kuttabu",
    publisher: "Kuttabu",

    alternates: {
      canonical: currentUrl,
      languages: {
        tr: `${SITE_URL}/tr`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/tr`,
      },
    },

    openGraph: {
      type: "website",
      siteName: "Kuttabu",
      title: seo.title,
      description: seo.description,
      url: currentUrl,
      locale: seo.locale,
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
     images: [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt:
      locale === "tr"
        ? "Kuttabu - Türk Dünyasının Tabu Oyunu"
        : "Kuttabu - The Taboo Game of the Turkic World",
  },
],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    category: "game",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}