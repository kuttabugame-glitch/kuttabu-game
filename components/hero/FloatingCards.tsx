"use client";

const cards = [
  "Göktürkler",
  "Malazgirt",
  "Tonyukuk",
  "Bozkurt",
  "Orhun",
  "Bilge Kağan",
  "Kürşad",
  "Kut",
  "Töre",
  "Hunlar",
  "Uygurlar",
  "Oğuz",
  "Kağan",
  "Ergenekon",
  "Alp",
  "Toy",
  "Osmanlı",
  "Selçuklu",
];

const variants = [
  { width: 190, height: 74, opacity: 0.32, blur: 1.2, scale: 0.92 },
  { width: 260, height: 88, opacity: 0.78, blur: 0, scale: 1 },
  { width: 220, height: 78, opacity: 0.48, blur: 0.6, scale: 0.96 },
  { width: 300, height: 94, opacity: 0.86, blur: 0, scale: 1.04 },
];

export default function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,243,234,0.96)_0%,rgba(247,243,234,0.76)_28%,rgba(247,243,234,0.28)_55%,rgba(247,243,234,0)_78%)]" />

      <div className="absolute left-0 top-0 flex w-full animate-cards-down flex-col gap-9 px-10">
        {[...cards, ...cards, ...cards].map((card, index) => {
          const v = variants[index % variants.length];

          return (
            <div
              key={`${card}-${index}`}
              className="flex"
              style={{
                justifyContent:
                  index % 3 === 0
                    ? "flex-start"
                    : index % 3 === 1
                      ? "center"
                      : "flex-end",
                paddingLeft: `${(index % 4) * 34}px`,
                paddingRight: `${(index % 5) * 28}px`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-[24px] border border-[#E7DDC9] bg-[#FFFDF8]/90 font-bold text-[#7B7167] shadow-[0_18px_55px_rgba(32,24,19,.07)] backdrop-blur-md"
                style={{
                  width: v.width,
                  height: v.height,
                  opacity: v.opacity,
                  filter: `blur(${v.blur}px)`,
                  transform: `rotate(${
                    index % 2 === 0 ? "-" : ""
                  }${2 + (index % 5)}deg) scale(${v.scale})`,
                }}
              >
                {card}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}