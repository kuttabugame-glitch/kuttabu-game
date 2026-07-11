import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F3EA] px-6">
      <FloatingCards />

      <div className="absolute left-1/2 top-1/2 z-10 h-[780px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F3EA]/80 blur-[70px]" />
      <div className="absolute left-1/2 top-1/2 z-10 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B28A3C]/10 blur-[90px]" />
        <img
          src="/images/logo.svg"
          alt="Kuttabu"
          draggable={false}
          className="h-auto w-[min(92vw,780px)] select-none"
        />

      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-scroll-hint">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7B7167]">
            SCROLL
          </span>
          <div className="h-10 w-px bg-[#B28A3C]/50" />
        </div>
      </div>
    </section>
  );
}