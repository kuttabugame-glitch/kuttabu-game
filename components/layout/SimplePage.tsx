import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function SimplePage({ eyebrow = "Kuttabu", title, children }: Props) {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#201813]">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B28A3C]">
          {eyebrow}
        </p>

        <h1 className="mt-6 text-[clamp(42px,6vw,76px)] font-semibold leading-[0.98] tracking-[-0.055em]">
          {title}
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#7B7167]">
          {children}
        </div>
      </section>

      <Footer />
    </main>
  );
}