import { Link } from "react-router-dom";

/**
 * Resources placeholder: links out to the repo's curated guides
 * until the full resource browser lands.
 */
const LINKS = [
  { to: "/resources/world_facts.md", label: "World Facts" },
  { to: "/resources/weights_and_measures.md", label: "Weights & Measures" },
  { to: "/resources/financial_tools_and_principles.md", label: "Money & Finance" },
  { to: "/resources/government_basics.md", label: "Government Basics" },
];

export default function Resources() {
  return (
    <main className="mx-auto max-w-2xl" aria-labelledby="resources-heading">
      <div className="card">
        <h1 id="resources-heading" className="heading-serif text-3xl font-bold text-ink">
          Resources
        </h1>
        <p className="mt-1 text-sm text-ink/70">
          Helpful guides for your assignments. Curated reference guides and datasets.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                className="flex min-h-[56px] items-center justify-between rounded-lg border border-ink/20 bg-white px-5 py-3 font-semibold text-ink transition-colors hover:border-cobalt hover:bg-white hover:text-cobalt"
                to={l.to}
              >
                <span>{l.label}</span>
                <span className="font-mono text-sm text-ink/50" aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
