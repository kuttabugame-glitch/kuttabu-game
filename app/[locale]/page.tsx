import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "tr") {
    return {
      title: "Kuttabu | Türk Dünyasının Tabu Oyunu",
      description:
        "Kuttabu ile Türk tarihini ve Türk dünyasını eğlenceli bir tabu deneyimiyle keşfet. Takımını kur, kartları anlat ve bilgini yarıştır.",
    };
  }

  return {
    title: "Kuttabu | The Taboo Game of the Turkic World",
    description:
      "Discover Turkic history and culture through Kuttabu. Build your team, describe the cards and test your knowledge.",
  };
}
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import GamePreview from "@/components/sections/GamePreview";
import Stats from "@/components/sections/Stats";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="bg-[#F7F3EA] text-[#201813]">
      <Hero />

      <section className="bg-[#FFFDF8]">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-28">
          <GamePreview />
          <Features />
          <Stats />
          <Download />
        </div>

        <Footer />
      </section>
    </main>
  );
}