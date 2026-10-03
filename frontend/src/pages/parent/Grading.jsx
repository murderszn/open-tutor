import { useState } from 'react';

/**
 * Grading: submission vs rubric side-by-side.
 * Assessment Grader hook: gradeSubmission(submission, rubric) -> {score, max, feedback[]}.
 * Plain function so tests / AI grader can call it without rendering.
 */
export function gradeSubmission(submission, rubric) {
  const text = String(submission ?? '').toLowerCase();
  let score = 0;
  const feedback = [];
  for (const criterion of rubric) {
    const hits = (criterion.keywords || []).filter((k) => text.includes(String(k).toLowerCase()));
    const earned = criterion.points * (hits.length / Math.max(1, (criterion.keywords || []).length));
    const rounded = Math.round(earned * 10) / 10;
    score += rounded;
    feedback.push({
      criterion: criterion.label,
      earned: rounded,
      max: criterion.points,
      matched: hits,
      suggestion: hits.length ? 'Good evidence.' : `Add: ${(criterion.keywords || []).join(', ')}`,
    });
  }
  const max = rubric.reduce((a, c) => a + c.points, 0);
  return { score: Math.round(score * 10) / 10, max, feedback };
}

const DEFAULT_RUBRIC = [
  { label: 'Correctness', points: 5, keywords: ['answer', 'result', 'correct'] },
  { label: 'Reasoning shown', points: 3, keywords: ['because', 'step', 'therefore'] },
  { label: 'Sources cited', points: 2, keywords: ['source', 'cite', 'reference'] },
];

export default function Grading() {
  const [submission, setSubmission] = useState('');
  const [rubric, setRubric] = useState(DEFAULT_RUBRIC);
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m19-num-03.png" alt="" className="w-4 h-4 filter brightness-0" />
          PARENT GOVERNANCE / ASSESSMENT GRADER
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Assessment Grader</h1>
        <p className="mt-1 text-sm text-ink/70">
          Submission vs. rubric evaluation with automated criterion evidence analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6 md:p-8 flex flex-col">
          <h2 className="heading-serif text-2xl font-bold text-ink mb-1">Student Submission</h2>
          <p className="text-xs text-ink/60 mb-3">Paste text or code answers to run keyword evidence matching.</p>
          <textarea
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            rows={12}
            className="w-full flex-1 min-h-[260px] rounded-lg border border-slate-200 bg-white p-3.5 text-ink font-sans focus:border-cobalt focus:outline-none"
            placeholder="Paste student submission here…"
          />
        </div>

        <div className="card p-6 md:p-8 flex flex-col gap-4">
          <h2 className="heading-serif text-2xl font-bold text-ink">Rubric Criteria</h2>
          <ul className="flex flex-col gap-2.5">
            {rubric.map((c, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-3 rounded-lg border border-slate-200/80 bg-white p-3.5 text-sm"
              >
                <div>
                  <span className="font-bold text-ink">{c.label}</span>
                  <p className="mt-1 text-xs text-ink/70">
                    Keywords: {(c.keywords || []).join(", ")}
                  </p>
                </div>
                <span className="rounded-md bg-ink px-2.5 py-0.5 font-mono text-xs font-semibold text-white">
                  {c.points} pts
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setResult(gradeSubmission(submission, rubric))}
            className="btn-brand flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg"
          >
            Run Assessment Grader
          </button>

          {result && (
            <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="heading-serif text-2xl font-bold text-ink">
                Score: <span className="font-mono text-cobalt">{result.score}</span> / {result.max}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {result.feedback.map((f, i) => (
                  <li key={i} className="rounded-md border border-slate-200 bg-white p-3 text-sm">
                    <div className="flex justify-between font-semibold text-ink">
                      <span>{f.criterion}</span>
                      <span className="font-mono">{f.earned}/{f.max}</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/70">{f.suggestion}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
