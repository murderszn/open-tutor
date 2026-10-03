import { useMemo, useState } from "react";
import resources from "../data/resources.json";

export default function ResourceHub({ onPlayVideo }) {
  const [q, setQ] = useState("");
  const [subject, setSubject] = useState("All");
  const [type, setType] = useState("All");

  const subjects = useMemo(() => ["All", ...new Set(resources.map((r) => r.subject))], []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return resources.filter((r) => {
      if (subject !== "All" && r.subject !== subject) return false;
      if (type !== "All" && r.type !== type) return false;
      if (needle && !(r.title + " " + r.summary + " " + r.path).toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [q, subject, type]);

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m22-num-06.png" alt="" className="w-4 h-4 filter brightness-0" />
          CENTRAL REFERENCE ARCHIVE
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Resource Center</h1>
        <p className="mt-1 text-sm text-ink/70">
          Instant search across guides, datasets, and curriculum reference indices.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input
            aria-label="Search resources"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guides &amp; datasets…"
            className="flex-1 min-w-[220px] min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-ink focus:border-cobalt focus:outline-none"
          />
          <select
            aria-label="Subject filter"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-ink focus:border-cobalt focus:outline-none"
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select
            aria-label="Type filter"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-ink focus:border-cobalt focus:outline-none"
          >
            {["All", "guide", "dataset", "index"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink/50">
          {results.length} of {resources.length} resources
        </p>

        <ul className="mt-4 flex flex-col gap-3">
          {results.map((r) => (
            <li
              key={r.id}
              className="rounded-lg border border-slate-200/80 bg-white p-4 transition-all hover:border-cobalt hover:shadow-2xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-lg font-bold text-ink">{r.title}</strong>
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-xs text-ink/70">
                  {r.subject} · {r.type} · grades {r.grades}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{r.summary}</p>
              <small className="mt-2 block font-mono text-xs text-ink/40">{r.path}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
