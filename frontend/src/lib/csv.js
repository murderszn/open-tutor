// CSV parser/serializer for schedule rows.
// Header: Week,Study Area,Task,Status
// Statuses: Pending | In Progress | Completed | Blocked

export const SCHEDULE_HEADER = ['Week', 'Study Area', 'Task', 'Status'];
export const STATUSES = ['Pending', 'In Progress', 'Completed', 'Blocked'];

function splitLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      out.push(cur); cur = '';
    } else {
      cur += c;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function escapeCell(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

/** Parse CSV text into [{week, area, task, status}]. Tolerates missing header. */
export function parseScheduleCsv(text) {
  if (!text || !text.trim()) return [];
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== '');
  if (lines.length === 0) return [];
  const first = splitLine(lines[0]).map((h) => h.toLowerCase());
  const hasHeader = first.includes('week') || first.includes('study area') || first.includes('task');
  const body = hasHeader ? lines.slice(1) : lines;
  return body.map((line, i) => {
    const [week = '', area = '', task = '', status = 'Pending'] = splitLine(line);
    const normStatus = STATUSES.includes(status) ? status : 'Pending';
    return { id: `row-${i}`, week, area, task, status: normStatus };
  });
}

/** Serialize rows [{week, area, task, status}] to CSV text. */
export function serializeScheduleCsv(rows) {
  const lines = [SCHEDULE_HEADER.join(',')];
  for (const r of rows) {
    lines.push([escapeCell(r.week), escapeCell(r.area), escapeCell(r.task), escapeCell(r.status)].join(','));
  }
  return lines.join('\n') + '\n';
}

/** Group rows by week label for the timeline matrix. */
export function groupByWeek(rows) {
  const map = new Map();
  for (const r of rows) {
    if (!map.has(r.week)) map.set(r.week, []);
    map.get(r.week).push(r);
  }
  return [...map.entries()].map(([week, items]) => ({ week, items }));
}
