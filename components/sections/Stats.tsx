"use client";

import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Stats");
  const stats = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="kartlar" className="mt-36 grid gap-6 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-[30px] border border-[#E7DDC9] bg-[#F7F3EA] p-8"
        >
          <h3 className="text-5xl font-semibold tracking-[-0.06em]">
            {item.title}
          </h3>

          <p className="mt-4 font-normal text-[#7B7167]">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}