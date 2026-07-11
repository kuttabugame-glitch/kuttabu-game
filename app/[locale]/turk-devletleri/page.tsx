import { getTranslations, setRequestLocale } from "next-intl/server";
import TranslatedPage from "@/components/layout/TranslatedPage";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TurkDevletleriPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("Pages.turkicStates");

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