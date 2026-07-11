import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import TranslatedPage from "@/components/layout/TranslatedPage";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      locale === "tr"
        ? "Hakkımızda"
        : "About",

    description:
      locale === "tr"
        ? "Kuttabu'nun amacı, vizyonu ve Türk tarihini eğlenceli şekilde öğretme misyonu."
        : "Learn about Kuttabu and our mission.",
  };
}
export default async function HakkimizdaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Pages.about");
  const sections = t.raw("sections") as Array<{
    heading?: string;
    body: string;
  }>;

  return (
    <TranslatedPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      sections={sections}
    />
  );
}