import { useMemo, useState } from "react";
import curriculum from "../data/curriculum.json";
import assignments from "../data/assignments.json";

const GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const SUBJECTS = ["All", "Math", "Science", "STEM", "Language Arts", "Social Studies", "Bible", "Financial Literacy", "Technology"];

function normSubject(s) {
  const k = (s || "").toLowerCase().replace(/-/g, " ");
  if (k.includes("language")) return "Language Arts";
  if (k.includes("social")) return "Social Studies";
  if (k.includes("stem") || k.includes("science")) return "Science";
  if (k.includes("math")) return "Math";
  if (k.includes("bible")) return "Bible";
  return s;
}

export default function CurriculumBrowser({ onSelect }) {
  const [grade, setGrade] = useState("5");
  const [subject, setSubject] = useState("All");
  const [query, setQuery] = useState("");

  const subjectCounts = curriculum[grade] || {};

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return assignments.filter((a) => {
      if (q && !(a.title + " " + a.summary + " " + a.id).toLowerCase().includes(q)) return false;
      if (subject !== "All") {
        const hay = (a.title + " " + a.id).toLowerCase();
        if (!hay.includes(subject.toLowerCase().split(" ")[0])) return false;
      }
      return true;
    });
  }, [query, subject]);

  const hasContent = Object.keys(subjectCounts).length > 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m21-num-05.png" alt="" className="w-4 h-4 filter brightness-0" />
          MASTER CURRICULUM EXPLORER
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Curriculum Explorer</h1>
        <p className="mt-1 text-sm text-ink/70">
          Browse grades, subjects, and assignments across all learning areas.
        </p>

        <nav aria-label="Grade navigation" className="mt-4 flex flex-wrap gap-2">
          {GRADES.map((g) => (
            <button
              key={g}
              aria-pressed={grade === g}
              onClick={() => setGrade(g)}
              className={`flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-lg px-3 py-1 font-mono text-sm font-bold transition-all ${
                grade === g
                  ? "bg-ink !text-white shadow-xs"
                  : "border border-slate-300 bg-slate-100 text-ink hover:bg-slate-200"
              }`}
            >
              {g === "K" ? "K" : `G${g}`}
            </button>
          ))}
        </nav>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className="text-sm font-semibold text-ink flex items-center gap-2">
            Subject:
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-ink focus:border-cobalt focus:outline-none"
            >
              {SUBJECTS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-ink flex flex-1 min-w-[220px] items-center gap-2">
            Keyword:
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. fractions, cells, budget"
              className="flex-1 min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
            />
          </label>
        </div>

        {!hasContent ? (
          <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4 text-sm text-ink/70">
            Grade {grade}: no curriculum content in this repo yet (content lives in grades 4, 5, 7, 8).
            Showing shared assignment library below.
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Object.entries(subjectCounts).map(([subj, c]) => (
              <div key={subj} className="rounded-lg border border-slate-200/80 bg-slate-50/50 p-3.5 text-xs">
                <strong className="block text-sm font-bold text-ink">{normSubject(subj)}</strong>
                <span className="text-ink/65 mt-0.5 block">
                  {c.assignments} assignments · {c.quizzes} quizzes
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card p-6 md:p-8">
        <h2 className="heading-serif text-2xl font-bold text-ink mb-4">
          Units &amp; assignments ({results.length})
        </h2>
        <ul className="flex flex-col gap-3">
          {results.map((a) => (
            <li
              key={a.id}
              className="rounded-lg border border-slate-200/80 bg-white p-4 transition-all hover:border-cobalt hover:shadow-2xs"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <button
                  onClick={() => onSelect && onSelect(a)}
                  className="cursor-pointer text-left text-lg font-bold text-cobalt hover:underline"
                >
                  {a.title}
                </button>
                <span className="rounded-xs bg-white border border-ink/20 px-2 py-0.5 font-mono text-xs text-ink/60">
                  {a.id}
                </span>
              </div>
              {a.summary && <p className="mt-2 text-sm text-ink/80">{a.summary}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
