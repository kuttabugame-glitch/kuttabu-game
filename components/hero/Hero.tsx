import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F3EA] px-6">
      <FloatingCards />

      <div className="absolute left-1/2 top-1/2 z-10 h-[780px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F3EA]/80 blur-[70px]" />
      <div className="absolute left-1/2 top-1/2 z-10 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B28A3C]/10 blur-[90px]" />

      <div className="relative z-20 mx-auto flex max-w-6xl animate-hero-in flex-col items-center text-center">
        <img
          src="/images/logo.svg"
          alt="Kuttabu"
          draggable={false}
          className="h-auto w-[min(92vw,780px)] select-none"
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a href="#" aria-label="App Store">
            <img
              src="/images/app-store.svg"
              alt="App Store"
              draggable={false}
              className="h-[64px] w-auto select-none transition duration-300 hover:scale-[1.035]"
            />
          </a>

          <a href="#" aria-label="Google Play">
            <img
              src="/images/google-play.svg"
              alt="Google Play"
              draggable={false}
              className="h-[64px] w-auto select-none transition duration-300 hover:scale-[1.035]"
            />
          </a>
        </div>
      </div>

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