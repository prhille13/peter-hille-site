export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-12 py-24 border-b border-rule">
      <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-wine mb-16 after:flex-1 after:h-px after:bg-rule">
        Contact
      </p>

      <div className="max-w-xl">
        <h2 className="font-serif font-light leading-[1.1] mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Let&apos;s talk about<br />
          <em className="italic text-wine">what&apos;s in the glass.</em>
        </h2>
        <p className="text-muted text-[0.95rem] leading-[1.8] mb-12">
          Open to conversations about wine sales, portfolio representation, and
          on-premise partnerships in the Columbus market and beyond.
        </p>

        <div className="flex flex-wrap gap-8">
          <a
            href="mailto:peter@peterhille.net"
            className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-ink border-b border-ink pb-0.5 hover:text-wine hover:border-wine transition-colors duration-200"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
