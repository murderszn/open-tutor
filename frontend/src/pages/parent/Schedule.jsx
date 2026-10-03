import { useMemo, useRef, useState } from 'react';
import { parseScheduleCsv, serializeScheduleCsv, STATUSES, groupByWeek } from '../../lib/csv.js';

const SAMPLE_CSV =
  'Week,Study Area,Task,Status\nWeek 1,Math,Multi-digit place value practice,Pending\nWeek 1,Language Arts,Supported opinion paragraph,In Progress\nWeek 2,STEM,Controlled science investigation,Pending\n';

// Per-student schedule store: { studentName: rows[] }
function download(filename, text) {
  const blob = new Blob([text], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

/**
 * Parent Schedule Engine.
 * - Week timeline matrix: rows = weeks, columns = students (mirrors teachers/sites/index.html).
 * - Drag-drop reorder stub: HTML5 draggable rows reorder tasks within a week cell.
 * - CSV import/export per student with columns Week,Study Area,Task,Status.
 */
export default function Schedule({ students = ['Grade 4 example', 'Grade 8 example'] }) {
  const [schedules, setSchedules] = useState(() =>
    Object.fromEntries(students.map((s) => [s, parseScheduleCsv(SAMPLE_CSV)]))
  );
  const [activeStudent, setActiveStudent] = useState(students[0]);
  const fileRef = useRef(null);

  const weeks = useMemo(() => {
    const all = new Set();
    Object.values(schedules).forEach((rows) => rows.forEach((r) => all.add(r.week)));
    return [...all];
  }, [schedules]);

  const cycleStatus = (student, id) => {
    setSchedules((prev) => ({
      ...prev,
      [student]: prev[student].map((r) =>
        r.id === id
          ? { ...r, status: STATUSES[(STATUSES.indexOf(r.status) + 1) % STATUSES.length] }
          : r
      ),
    }));
  };

  // Drag-drop reorder stub: reorder tasks within one student's week group.
  const dragId = useRef(null);
  const onDrop = (student, week, targetId) => {
    setSchedules((prev) => {
      const rows = [...prev[student]];
      const from = rows.findIndex((r) => r.id === dragId.current);
      const to = rows.findIndex((r) => r.id === targetId);
      if (from < 0 || to < 0) return prev;
      const [moved] = rows.splice(from, 1);
      rows.splice(to, 0, { ...moved, week }); // week follows drop cell
      return { ...prev, [student]: rows };
    });
  };

  const importCsv = async (file) => {
    const text = await file.text();
    setSchedules((prev) => ({ ...prev, [activeStudent]: parseScheduleCsv(text) }));
  };

  const exportCsv = (student) => download(`${student}-schedule.csv`, serializeScheduleCsv(schedules[student] || []));

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m17-num-01.png" alt="" className="w-4 h-4 filter brightness-0" />
          PARENT GOVERNANCE / SCHEDULE ENGINE
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="heading-serif text-3xl font-bold text-ink">Schedule Engine</h1>
            <p className="mt-1 text-sm text-ink/70">
              Week timeline matrix. Reorder tasks or tap status to cycle.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => fileRef.current?.click()}
              className="btn-outline text-xs px-3.5 py-1.5 font-bold shadow-xs"
            >
              Import CSV ({activeStudent})
            </button>
            <button
              onClick={() => exportCsv(activeStudent)}
              className="btn-outline text-xs px-3.5 py-1.5 font-bold shadow-xs"
            >
              Export CSV ({activeStudent})
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".csv,text/csv"
              hidden
              onChange={(e) => e.target.files?.[0] && importCsv(e.target.files[0])}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {Object.keys(schedules).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStudent(s)}
              aria-pressed={s === activeStudent}
              className={`flex min-h-[40px] cursor-pointer items-center justify-center rounded-lg px-4 py-1.5 text-sm font-bold transition-all ${
                s === activeStudent
                  ? "bg-ink !text-white shadow-xs"
                  : "border border-slate-300 bg-slate-100 text-ink hover:bg-slate-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold w-28">
                  Week
                </th>
                {Object.keys(schedules).map((s) => (
                  <th key={s} className="p-4 font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week) => (
                <tr key={week} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/30 transition-colors">
                  <th className="p-4 font-mono text-sm font-bold text-ink align-top w-28 bg-slate-50/30">
                    {week}
                  </th>
                  {Object.keys(schedules).map((s) => (
                    <td key={s} className="p-4 align-top">
                      <ul className="flex flex-col gap-2.5">
                        {(schedules[s] || [])
                          .filter((r) => r.week === week)
                          .map((r) => (
                            <li
                              key={r.id}
                              draggable
                              onDragStart={() => (dragId.current = r.id)}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={() => onDrop(s, week, r.id)}
                              title="Drag to reorder"
                              className="group flex flex-col gap-2 rounded-lg border border-slate-200/80 bg-white p-3.5 text-ink shadow-2xs transition-all hover:border-cobalt hover:shadow-xs cursor-move"
                            >
                              <div>
                                <span className="font-bold text-ink text-xs uppercase tracking-wider text-cobalt mr-1">[{r.area}]</span>{" "}
                                <span className="text-ink/90 font-medium text-sm">{r.task}</span>
                              </div>
                              <div className="flex items-center justify-between gap-2 mt-1">
                                <button
                                  type="button"
                                  onClick={() => cycleStatus(s, r.id)}
                                  title="Cycle status"
                                  className={`flex min-h-[30px] cursor-pointer items-center justify-center rounded-md px-2.5 py-1 font-mono text-xs font-bold transition-all shadow-2xs ${
                                    r.status === "Completed"
                                      ? "bg-emerald-700 !text-white"
                                      : r.status === "In Progress"
                                      ? "bg-cobalt !text-white"
                                      : r.status === "Blocked"
                                      ? "border border-rose-300 bg-rose-50 text-rose-800"
                                      : "border border-slate-300 bg-slate-100 text-ink hover:bg-slate-200"
                                  }`}
                                >
                                  {r.status}
                                </button>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-ink/70">
        Statuses: {STATUSES.join(" · ")}. Drag a task onto another to reorder (persists in state).
      </p>

      <details className="card text-xs">
        <summary className="cursor-pointer font-mono font-semibold text-ink">
          Debug: grouped rows
        </summary>
        <pre className="mt-2 rounded-xs border border-ink/20 bg-white p-3 font-mono text-ink overflow-x-auto">
          {JSON.stringify(groupByWeek(schedules[activeStudent] || []), null, 2)}
        </pre>
      </details>
    </div>
  );
}
