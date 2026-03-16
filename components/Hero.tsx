export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-end border-b border-rule relative overflow-hidden px-8 md:px-12 pb-20 md:pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8DC] via-cream to-cream z-0" />
      {/* Vertical rule — right column */}
      <div className="absolute top-0 right-0 w-[40%] h-full border-l border-rule z-0 hidden md:block" />

      <div className="relative z-10 max-w-2xl">
        <p className="animate-fade-1 text-[0.7rem] tracking-[0.2em] uppercase text-wine mb-6 flex items-center gap-4">
          <span className="block w-10 h-px bg-wine" />
          Wine &amp; Hospitality Professional
        </p>

        <h1 className="animate-fade-2 font-serif font-light leading-none tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
        >
          Peter<br />
          <em className="italic text-wine">Hille</em>
        </h1>

        <p className="animate-fade-3 text-base leading-relaxed text-muted max-w-md mb-12">
          Beverage director, buyer, and operations leader with deep roots in
          wine, craft beer, and on-premise hospitality — bringing a
          palate-driven approach to every sales conversation.
        </p>

        <a
          href="#experience"
          className="animate-fade-4 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase text-ink border-b border-ink pb-0.5 hover:text-wine hover:border-wine transition-colors duration-200 group"
        >
          View experience
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
