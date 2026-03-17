const roles = [
  {
    dates: "2025 – Present",
    company: "Seventh Son Brewing",
    location: "Columbus, OH",
    title: "General Manager",
    description:
      "Led front-of-house and operations for one of Columbus's premier craft breweries. Managed a full team, oversaw scheduling and labor, and maintained the taproom's reputation for hospitality. Worked directly with ownership on programming, events, and brand positioning.",
    tags: ["GM operations", "Team leadership", "Brand programming", "Craft beer"],
  },
  {
    dates: "2021 – Present",
    company: "Barrel & Bottle",
    location: "Columbus, OH",
    title: "Wine Buyer",
    description:
      "Managed and curated the wine program, building vendor relationships across distributors and importers. Responsible for selection, pricing strategy, staff education, and margin. Developed deep fluency in old and new world programs across all major price tiers.",
    tags: ["Wine buying", "Vendor relations", "Staff training", "Margin management"],
  },
  {
    dates: "2013 – 2018",
    company: "Brewing Industry",
    location: "St. Louis, MO",
    title: "Production Manager, Lead Brewer",
    description:
      "Built foundational industry experience in St. Louis's growing craft brewing scene — developing skills in hospitality, product knowledge, and customer-facing sales and education that shaped a career in beverage.",
    tags: ["Craft brewing", "Hospitality", "Customer education"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-12 py-24 border-b border-rule">
      <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-wine mb-16 after:flex-1 after:h-px after:bg-rule">
        Experience
      </p>

      <div className="flex flex-col">
        {roles.map((role, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-10 border-t border-rule last:border-b last:border-rule group"
          >
            {/* Meta */}
            <div>
              <p className="text-[0.7rem] tracking-[0.1em] uppercase text-muted mb-1">{role.dates}</p>
              <p className="font-serif text-lg font-normal text-ink">{role.company}</p>
              <p className="text-[0.72rem] text-muted mt-0.5">{role.location}</p>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-serif font-light text-2xl mb-3 leading-snug">{role.title}</h3>
              <p className="text-[0.9rem] text-muted leading-[1.8] mb-4">{role.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-[0.1em] uppercase border border-rule text-muted px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
