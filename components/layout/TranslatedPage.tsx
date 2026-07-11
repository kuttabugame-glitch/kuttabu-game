import Footer from "./Footer";
import Navbar from "./Navbar";

type Section = {
  heading?: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: string;
  sections: Section[];
};

export default function TranslatedPage({
  eyebrow,
  title,
  sections,
}: Props) {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#201813]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B28A3C]">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-[clamp(42px,6vw,72px)] font-semibold leading-[1] tracking-[-0.055em]">
            {title}
          </h1>

          <div className="mt-10 space-y-6 text-[17px] leading-8 text-[#7B7167]">
            {sections.map((section, index) => (
              <div key={`${section.heading ?? "body"}-${index}`}>
                {section.heading && (
                  <h2 className="pt-6 text-2xl font-semibold tracking-[-0.035em] text-[#201813]">
                    {section.heading}
                  </h2>
                )}

                <p className={section.heading ? "mt-4" : ""}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}