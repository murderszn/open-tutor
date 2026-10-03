import { useState } from 'react';

// Curated from assignments/ top-level topics + teachers/sites/index.html curriculum overview.
const GRADE_TRACKS = {
  'Grade 4': [
    { area: 'Math', assignment: 'math', path: 'assignments/math', note: 'Multi-digit place value, fractions with drawings' },
    { area: 'Language Arts', assignment: 'punctuation-periods-and-question-marks', path: 'assignments/punctuation-periods-and-question-marks', note: 'Opinion paragraph, sentences' },
    { area: 'STEM', assignment: 'stem', path: 'assignments/stem', note: 'Weather observation, biology water cycle' },
    { area: 'Social Studies', assignment: 'social-studies', path: 'assignments/social-studies', note: 'Weekly reading + quiz' },
  ],
  'Grade 7': [
    { area: 'Social Studies', assignment: 'history-of-war', path: 'assignments/social-studies/history-of-war', note: 'Turning Points & Institutions' },
    { area: 'STEM', assignment: 'biology cells', path: 'assignments/stem/biology', note: 'Cells, photosynthesis, reproduction' },
    { area: 'Finance', assignment: 'credit-scores-101', path: 'assignments/personal-finance/credit-scores-101', note: 'Credit Score Explorer' },
  ],
  'Grade 8': [
    { area: 'Math', assignment: 'two-variable linear systems', path: 'assignments/math', note: 'Solve linear systems' },
    { area: 'STEM', assignment: 'controlled investigation', path: 'assignments/stem', note: 'Design a controlled investigation' },
    { area: 'Language Arts', assignment: 'shakespeare-overview-hamlet', path: 'assignments/language-arts/shakespeare-overview-hamlet', note: 'Primary source analysis' },
    { area: 'CS/Web', assignment: 'responsive-navbar-challenge', path: 'assignments/responsive-navbar-challenge', note: 'Sketch + build a web layout' },
  ],
};

/**
 * Curriculum: grade track browser + assignment distributor.
 * Distribute = append a task row to chosen students' schedules (callback into Schedule state).
 */
export default function Curriculum({ students = [], onDistribute }) {
  const [grade, setGrade] = useState('Grade 4');
  const [selected, setSelected] = useState({});
  const [targets, setTargets] = useState([]);
  const [week, setWeek] = useState('Week 1');

  const toggle = (i) => setSelected((p) => ({ ...p, [i]: !p[i] }));

  const distribute = () => {
    const items = (GRADE_TRACKS[grade] || []).filter((_, i) => selected[i]);
    if (!items.length || !targets.length) return;
    onDistribute?.(
      targets.map((student) => ({
        student,
        rows: items.map((a, k) => ({
          id: `dist-${Date.now()}-${k}`,
          week,
          area: a.area,
          task: `${a.assignment} (${a.path})`,
          status: 'Pending',
        })),
      }))
    );
    setSelected({});
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m18-num-02.png" alt="" className="w-4 h-4 filter brightness-0" />
          PARENT GOVERNANCE / CURRICULUM DISTRIBUTION
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">
          Curriculum &amp; Assignment Distributor
        </h1>
        <p className="mt-1 text-sm text-ink/70">
          Browse curated track units and distribute them directly into student schedules.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <label className="text-sm font-semibold text-ink flex items-center gap-2">
            Grade track:
            <select
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
                setSelected({});
              }}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold text-ink focus:border-cobalt focus:outline-none"
            >
              {Object.keys(GRADE_TRACKS).map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="card p-6 md:p-8">
        <h2 className="heading-serif text-2xl font-bold text-ink mb-4">
          {grade} Tracks &amp; Units
        </h2>
        <ul className="flex flex-col gap-2.5">
          {(GRADE_TRACKS[grade] || []).map((a, i) => (
            <li
              key={a.assignment}
              className={`flex items-start gap-3 rounded-lg border p-4 transition-all ${
                selected[i] ? "border-cobalt bg-white shadow-xs" : "border-slate-200/80 bg-white hover:border-slate-300"
              }`}
            >
              <label className="flex items-start gap-3 cursor-pointer w-full">
                <input
                  type="checkbox"
                  checked={!!selected[i]}
                  onChange={() => toggle(i)}
                  className="mt-1 h-5 w-5 rounded accent-cobalt cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-ink text-base">{a.area}</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-ink/70">
                      {a.path}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-cobalt">{a.assignment}</p>
                  <p className="text-sm text-ink/70">{a.note}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="card border border-slate-200/80 bg-slate-50/50 p-6 md:p-8">
        <h3 className="heading-serif text-xl font-bold text-ink">Distribute Assignments</h3>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <label className="text-sm font-semibold text-ink flex items-center gap-2">
            Target Week:
            <input
              value={week}
              onChange={(e) => setWeek(e.target.value)}
              size={10}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-ink focus:border-cobalt focus:outline-none"
            />
          </label>
          <fieldset className="border-0 p-0 flex flex-wrap items-center gap-2">
            <legend className="text-sm font-semibold text-ink mr-2">Assign to students:</legend>
            {students.map((s) => (
              <label
                key={s}
                className={`flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1 text-sm font-medium transition-colors ${
                  targets.includes(s)
                    ? "border-cobalt bg-white text-ink font-semibold shadow-2xs"
                    : "border-slate-200 bg-white text-ink/80 hover:bg-slate-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={targets.includes(s)}
                  onChange={() =>
                    setTargets((t) => (t.includes(s) ? t.filter((x) => x !== s) : [...t, s]))
                  }
                  className="accent-cobalt"
                />
                {s}
              </label>
            ))}
          </fieldset>
          <button
            onClick={distribute}
            disabled={!targets.length}
            className="btn-brand flex min-h-[44px] cursor-pointer items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Distribute selected
          </button>
        </div>
      </div>
    </div>
  );
}

export { GRADE_TRACKS };
