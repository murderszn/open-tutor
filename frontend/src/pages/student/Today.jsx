import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Student "My Day" page: checklist of today's assignments,
 * per-subject grouping, and a progress ring (completed vs pending).
 * Kid-safe: large tap targets, plain language, distraction-free.
 */

const DEMO_TASKS = [
  { id: "math-1", subject: "Math", title: "Practice fractions worksheet", minutes: 20 },
  { id: "reading-1", subject: "Reading", title: "Read one chapter + quiz", minutes: 25 },
  { id: "science-1", subject: "Science", title: "Solar system tour notes", minutes: 15 },
];

function ProgressRing({ done, total }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  const R = 44;
  const C = 2 * Math.PI * R;
  const filled = (pct / 100) * C;
  return (
    <div
      className="flex flex-col items-center justify-center"
      role="img"
      aria-label={`${done} of ${total} tasks done (${pct} percent)`}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r={R} fill="none" strokeWidth="12" stroke="rgba(9, 13, 24, 0.12)" />
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          strokeWidth="12"
          strokeLinecap="round"
          stroke="#2455ff"
          strokeDasharray={`${filled} ${C}`}
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="66" textAnchor="middle" fontSize="22" fontWeight="800" fill="#090d18">
          {pct}%
        </text>
      </svg>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink/70">
        {done} of {total} done
      </p>
    </div>
  );
}

export default function Today({ tasks = DEMO_TASKS }) {
  const [checked, setChecked] = useState(() => new Set());

  const done = checked.size;
  const total = tasks.length;
  const subjects = useMemo(() => {
    const map = new Map();
    for (const t of tasks) {
      if (!map.has(t.subject)) map.set(t.subject, []);
      map.get(t.subject).push(t);
    }
    return [...map.entries()];
  }, [tasks]);

  function toggle(id) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <main className="flex flex-col gap-6" aria-labelledby="today-heading">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m03-target.png" alt="" className="w-4 h-4 filter brightness-0" />
          DAILY LEARNING PACING
        </div>
        <h1 id="today-heading" className="heading-serif text-3xl sm:text-4xl font-bold text-ink">
          My Day
        </h1>
        <p className="mt-1 text-base text-ink/80">
          Tap each card when you finish it. Small steps, big wins.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/60 p-6 sm:flex-row sm:gap-8">
          <ProgressRing done={done} total={total} />
          {done === total && total > 0 && (
            <div className="mt-4 sm:mt-0 rounded-lg border border-ink/20 bg-brand p-4 text-center font-bold text-ink shadow-xs" role="status">
              All done! Great work today.
            </div>
          )}
        </div>
      </div>

      {subjects.map(([subject, items]) => (
        <section key={subject} aria-label={`${subject} tasks`} className="card p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h2 className="heading-serif text-2xl font-bold text-ink">{subject}</h2>
            <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
              {items.length} {items.length === 1 ? "task" : "tasks"}
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {items.map((t) => {
              const isDone = checked.has(t.id);
              return (
                <li
                  key={t.id}
                  className={`flex items-center justify-between gap-4 rounded-lg border p-4 transition-all ${
                    isDone
                      ? "border-slate-200 bg-slate-50/60 opacity-70"
                      : "border-slate-200/80 bg-white hover:border-cobalt/50 hover:shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    className="flex flex-1 min-h-[44px] cursor-pointer items-center gap-3.5 text-left"
                    aria-pressed={isDone}
                    onClick={() => toggle(t.id)}
                  >
                    <span
                      className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border text-xs font-bold transition-all ${
                        isDone
                          ? "border-cobalt bg-cobalt text-white shadow-xs"
                          : "border-slate-300 bg-white text-transparent hover:border-slate-400"
                      }`}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="flex-1">
                      <strong className={`block font-semibold text-ink text-sm sm:text-base ${isDone ? "line-through text-ink/50" : ""}`}>
                        {t.title}
                      </strong>
                      <small className="font-mono text-xs text-ink/50">About {t.minutes} min</small>
                    </span>
                  </button>
                  <Link
                    className="btn-outline min-h-[38px] px-3.5 py-1.5 text-xs text-cobalt font-semibold rounded-lg hover:border-cobalt hover:bg-slate-50"
                    to={`/student/assignments/${t.id}`}
                  >
                    Open Task →
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
