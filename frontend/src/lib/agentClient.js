// Shared client for the AI Teaching Team Cockpit.
// Local mock by default; flip to a future backend via setMode('api').
// Future API contract (stub): POST {apiBase}/{agent} with {input, audience} -> {output}
export const agentClient = {
  mode: 'local',
  apiBase: '/api/agents',
  audience: 'parent', // 'parent' | 'student'
  setMode(m) { this.mode = m; },
  setAudience(a) { this.audience = a; },
  setApiBase(u) { this.apiBase = u; },
};

export function setAudience(a) { agentClient.audience = a; }
export function getAudience() { return agentClient.audience; }

const delay = (ms = 250) => new Promise((r) => setTimeout(r, ms));

// ---- Local mocks (one per agent) ----
const mocks = {
  CurriculumCreator({ topic = 'Untitled', grade = '4th', subject = 'Science' } = {}) {
    return `# ${topic} (${subject}, Grade ${grade})\n\n## Objective\nBuild and explain ${topic} through a hands-on project.\n\n## Steps\n1. Research ${topic} using 2 kid-safe sources.\n2. Build a demo / model / write-up.\n3. Present findings in 5 sentences or less.\n\n## Deliverables\n- Markdown write-up in student workspace\n- Photo/diagram of the build\n\n## Evaluation Checklist (parents)\n- [ ] Concept explained correctly\n- [ ] Sources cited\n- [ ] Presentation is clear`;
  },
  LessonPlanner({ topic = 'Fractions', grade = '4th' } = {}) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const tasks = [
      `Introduce ${topic} (Grade ${grade}): read + 3 examples`,
      `Practice ${topic}: 5 guided problems`,
      `Build with ${topic}: mini-project / worksheet`,
      `Review ${topic}: fix mistakes + quiz prep`,
      `Assess ${topic}: short quiz + submit work`,
    ];
    return days.map((d, i) => ({ week: 'Week 1', day: d, studyArea: 'Math', task: tasks[i], status: 'Pending' }));
  },
  TeachersAide({ message = '' } = {}) {
    return `Good effort working through this! Before I hint: what have you tried so far with "${message.slice(0, 80)}"? Guiding question: which single step feels most confusing, and what would happen if you broke just that step in half? (I won't give the direct answer — let's reason it out.)`;
  },
  SubjectTutor({ message = '', grade = '4th' } = {}) {
    return `Hook: did you know "${message.slice(0, 60) || 'this idea'}" shows up everywhere? Analogy (Grade ${grade}): think of it like building blocks — each small piece snaps into the next. Core idea in 3 short points, then your turn: can you explain it back in one fun sentence?`;
  },
  AssessmentGrader({ work = '', rubric = 'accuracy, effort, clarity' } = {}) {
    const len = work.trim().split(/\s+/).filter(Boolean).length;
    const score = Math.min(100, 70 + Math.min(30, Math.floor(len / 10)));
    return `Overall Score: ${score}/100 (rubric: ${rubric})\n\nWhat Shined: clear effort and a real attempt at every part.\nNeeds Tinkering: pick 2 specific lines and explain *why* each is right or how to improve it.\nNext Steps: revise one weak section and resubmit.`;
  },
  ReportCard({ subjects = null } = {}) {
    const s = subjects || { Math: 88, Science: 92, 'Language Arts': 81, STEM: 95 };
    return Object.entries(s).map(([k, v]) => ({ subject: k, average: v, completion: Math.min(100, v + 5), interest: v >= 90 ? 'High' : 'Steady' }));
  },
  ResourceFinder({ topic = 'Photosynthesis' } = {}) {
    return {
      queries: [`${topic} for kids`, `${topic} explained middle school`, `${topic} interactive lesson`],
      videos: [
        { title: `${topic} Explained!`, channel: 'SciShow Kids', length: '4:32', url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topic + ' scishow kids') },
        { title: `The Science of ${topic}`, channel: 'Crash Course Kids', length: '5:10', url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topic + ' crash course kids') },
        { title: `${topic} in Real Life`, channel: 'National Geographic', length: '6:00', url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topic + ' national geographic kids') },
      ],
      links: [
        { title: `${topic} — Wikipedia`, url: 'https://en.wikipedia.org/wiki/' + encodeURIComponent(topic) },
        { title: `${topic} — Britannica Kids`, url: 'https://kids.britannica.com/kids/search?query=' + encodeURIComponent(topic) },
      ],
    };
  },
  CurriculumWorker() {
    return [
      { id: 101, track: 'Math G4', section: 'Unit 01 — Fractions', status: 'open', updated: '2026-09-20' },
      { id: 102, track: 'Science G6', section: 'Unit 02 — Photosynthesis', status: 'in-progress', updated: '2026-09-28' },
      { id: 103, track: 'ELA G5', section: 'Review — Harlem Renaissance', status: 'delivered', updated: '2026-09-30' },
    ];
  },
};

export async function runAgent(agent, input = {}) {
  if (agentClient.mode === 'api') {
    // Future backend hook — falls back to mock on failure.
    try {
      const res = await fetch(`${agentClient.apiBase}/${agent}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, audience: agentClient.audience }),
      });
      if (res.ok) return await res.json();
    } catch { /* fall through to mock */ }
  }
  await delay();
  const fn = mocks[agent];
  if (!fn) throw new Error(`Unknown agent: ${agent}`);
  return fn(input);
}

// Audience surfacing helper: returns true when a block should show.
export function visibleTo(blockAudience) {
  if (!blockAudience || blockAudience === 'all') return true;
  return blockAudience === agentClient.audience;
}
