import { useMemo, useState } from 'react';
import { STATUSES } from '../../lib/csv.js';

/** Completion rate per student: Completed / total. */
export function completionRate(rows) {
  if (!rows.length) return 0;
  return rows.filter((r) => r.status === 'Completed').length / rows.length;
}

/** Engagement index 0-100: weights Completed=1, In Progress=0.5, Blocked=-0.25, Pending=0. */
export function engagementIndex(rows) {
  if (!rows.length) return 0;
  const w = { Completed: 1, 'In Progress': 0.5, Blocked: -0.25, Pending: 0 };
  const raw = rows.reduce((a, r) => a + (w[r.status] ?? 0), 0) / rows.length;
  return Math.max(0, Math.round(raw * 100));
}

/** Build a Markdown report card for one student. */
export function reportCardMarkdown(student, rows) {
  const rate = Math.round(completionRate(rows) * 100);
  const eng = engagementIndex(rows);
  const lines = [
    `# Report Card — ${student}`,
    '',
    `- Completion rate: ${rate}%`,
    `- Engagement index: ${eng}/100`,
    `- Tasks: ${rows.length}`,
    '',
    '| Week | Study Area | Task | Status |',
    '| --- | --- | --- | --- |',
    ...rows.map((r) => `| ${r.week} | ${r.area} | ${r.task} | ${r.status} |`),
  ];
  return lines.join('\n') + '\n';
}

/**
 * Reports: completion rates, engagement index, report-card Markdown export.
 * Props: schedules = { studentName: rows[] }.
 */
export default function Reports({ schedules = {} }) {
  const [student, setStudent] = useState(Object.keys(schedules)[0] || '');
  const rows = schedules[student] || [];

  const summary = useMemo(
    () =>
      Object.entries(schedules).map(([s, r]) => ({
        student: s,
        total: r.length,
        rate: Math.round(completionRate(r) * 100),
        engagement: engagementIndex(r),
      })),
    [schedules]
  );

  const download = () => {
    const md = reportCardMarkdown(student, rows);
    const blob = new Blob([md], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${student}-report-card.md`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m20-num-04.png" alt="" className="w-4 h-4 filter brightness-0" />
          PARENT GOVERNANCE / ACADEMIC AUDITS
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Academic Reports</h1>
        <p className="mt-1 text-sm text-ink/70">
          Completion rates, engagement scoring, and Markdown report card generator.
        </p>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                  Student
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                  Total Tasks
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                  Completion %
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                  Engagement /100
                </th>
              </tr>
            </thead>
            <tbody>
              {summary.map((s) => (
                <tr
                  key={s.student}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/40 transition-colors"
                >
                  <td className="p-4 font-bold text-ink">{s.student}</td>
                  <td className="p-4 font-mono text-ink">{s.total}</td>
                  <td className="p-4 font-mono font-semibold text-cobalt">{s.rate}%</td>
                  <td className="p-4 font-mono font-semibold text-ink">{s.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card border border-slate-200/80 bg-slate-50/50 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <label className="text-sm font-semibold text-ink flex items-center gap-2">
            Student report:
            <select
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-semibold text-ink focus:border-cobalt focus:outline-none"
            >
              {Object.keys(schedules).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <button
            onClick={download}
            disabled={!student}
            className="btn-brand flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export report card (.md)
          </button>
        </div>
        <p className="mt-3 text-xs text-ink/70">Statuses tracked: {STATUSES.join(", ")}.</p>
      </div>
    </div>
  );
}
