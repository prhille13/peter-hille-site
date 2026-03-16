const stats = [
  { num: "10+", label: "Years in beverage" },
  { num: "3", label: "Cities, one craft" },
  { num: "Columbus", label: "Based in Ohio" },
];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-12 py-24 border-b border-rule">
      {/* Section label */}
      <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-wine mb-16 after:flex-1 after:h-px after:bg-rule">
        About
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Stats */}
        <div>
          {stats.map((s) => (
            <div key={s.label} className="border-t border-rule py-6">
              <p className="font-serif font-light text-5xl text-ink leading-none mb-1">{s.num}</p>
              <p className="text-[0.7rem] tracking-[0.12em] uppercase text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Body copy */}
        <div>
          <h2 className="font-serif font-light text-[2.2rem] leading-snug mb-6">
            From the cellar to the sales floor — a career built on knowing the product.
          </h2>
          <p className="text-muted leading-[1.9] mb-5 text-[0.95rem]">
            I&apos;ve spent my career at the intersection of wine, craft beer, and hospitality
            operations — as a buyer, a GM, and an advocate for producers who make something
            worth talking about.
          </p>
          <p className="text-muted leading-[1.9] mb-5 text-[0.95rem]">
            Whether curating a list at Barrel &amp; Bottle, managing service and culture at
            Seventh Son, or working the beer industry in St. Louis, my focus has always been
            the same: put the right glass in front of the right person and be able to explain
            exactly why.
          </p>
          <p className="text-muted leading-[1.9] text-[0.95rem]">
            Now I&apos;m bringing that depth of knowledge to the supplier side, helping portfolios
            find their audience and build lasting on- and off-premise relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
