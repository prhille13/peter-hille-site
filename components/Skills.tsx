const groups = [
  {
    title: "Wine & Beverage",
    items: [
      "Old & New World wine programs",
      "Portfolio evaluation",
      "Tasting & sensory analysis",
      "Staff wine education",
      "Menu & list curation",
      "Craft beer knowledge",
    ],
  },
  {
    title: "Sales & Operations",
    items: [
      "On- & off-premise accounts",
      "Distributor relationships",
      "Pricing & margin strategy",
      "Inventory management",
      "Account development",
      "Trade programming",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Team management",
      "Hospitality culture",
      "Event programming",
      "Vendor negotiation",
      "Brand storytelling",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-12 py-24 border-b border-rule">
      <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-wine mb-16 after:flex-1 after:h-px after:bg-rule">
        Skills &amp; Expertise
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {groups.map((group, i) => (
          <div
            key={group.title}
            className={`pb-10 md:pb-0 ${
              i === 0
                ? "md:pr-10"
                : i === 1
                ? "md:px-10 border-t md:border-t-0 md:border-l border-rule pt-10 md:pt-0"
                : "md:pl-10 border-t md:border-t-0 md:border-l border-rule pt-10 md:pt-0"
            }`}
          >
            <h3 className="font-serif font-normal text-[1.3rem] mb-6">{group.title}</h3>
            <ul className="list-none">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[0.875rem] text-muted leading-none py-2.5 border-b border-rule flex items-center gap-3 last:border-b"
                >
                  <span className="block w-1 h-1 rounded-full bg-wine flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
