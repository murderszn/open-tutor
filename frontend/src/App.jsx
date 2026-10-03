import { useState } from "react";
import { HashRouter, Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { SUBJECTS, mockAgents } from "./data.js";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import StudentLogin from "./pages/auth/StudentLogin.jsx";
import OnboardingWizard from "./pages/auth/OnboardingWizard.jsx";
import Schedule from "./pages/parent/Schedule.jsx";
import Curriculum from "./pages/parent/Curriculum.jsx";
import Grading from "./pages/parent/Grading.jsx";
import Reports from "./pages/parent/Reports.jsx";
import Today from "./pages/student/Today.jsx";
import AssignmentRunner from "./pages/student/AssignmentRunner.jsx";
import StudentResources from "./pages/student/Resources.jsx";
import CurriculumBrowser from "./pages/CurriculumBrowser.jsx";
import AssignmentViewer from "./pages/AssignmentViewer.jsx";
import ResourceHub from "./pages/ResourceHub.jsx";
import SafeVideoModal from "./pages/SafeVideoModal.jsx";

/* ---------- layout shell ---------- */
function SubjectBadge({ subject }) {
  const s = SUBJECTS[subject] || SUBJECTS.other;
  return (
    <span
      className="inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold text-white tracking-wide shadow-2xs"
      style={{ backgroundColor: s.color }}
    >
      {s.label}
    </span>
  );
}

function Shell({ children }) {
  const linkCls = ({ isActive }) =>
    `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight whitespace-nowrap transition-all shrink-0 ${
      isActive
        ? "bg-ink !text-white shadow-xs"
        : "text-ink hover:text-black hover:bg-black/10"
    }`;

  return (
    <div className="min-h-screen bg-white font-sans text-ink flex flex-col justify-between">
      <div>
        <header className="masthead sticky top-0 z-50 border-b border-ink/20 shadow-2xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 h-14 sm:h-16 flex-nowrap overflow-x-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink shrink-0 group">
              <img
                src="/assets/micro/m16-ot-mark.png"
                alt=""
                className="w-6 h-6 filter brightness-0 group-hover:scale-105 transition-transform"
              />
              <span className="font-extrabold tracking-tight">OpenTutor</span>
              <span className="rounded-full bg-black/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-ink">
                OS
              </span>
            </Link>

            {/* Nav links on same 1 line */}
            <nav className="flex items-center gap-1 overflow-x-auto shrink min-w-0" aria-label="Primary">
              <NavLink to="/parent/schedule" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>01</span>
                    <span>Schedule</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/parent/curriculum" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>02</span>
                    <span>Curriculum</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/parent/grading" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>03</span>
                    <span>Grading</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/parent/reports" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>04</span>
                    <span>Reports</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/student/today" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>05</span>
                    <span>Today</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/browse" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>06</span>
                    <span>Assignments</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/library" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>07</span>
                    <span>Library</span>
                  </>
                )}
              </NavLink>
              <NavLink to="/agents" className={linkCls}>
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand" : "text-ink/60"}`}>08</span>
                    <span>Agents</span>
                  </>
                )}
              </NavLink>
            </nav>

            {/* Right actions on same 1 line */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://omarchy-nora.tailc6fceb.ts.net/#top"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:underline mr-1 whitespace-nowrap"
              >
                <span>Manifesto</span> ↗
              </a>
              <Link
                to="/student-login"
                className="btn-dark min-h-[36px] px-3.5 py-1 text-xs font-bold !text-white shadow-xs whitespace-nowrap"
              >
                Student Desk
              </Link>
              <Link
                to="/auth/login"
                className="inline-flex min-h-[36px] items-center justify-center rounded-lg border-2 border-ink bg-white hover:bg-slate-100 px-3.5 py-1 text-xs font-bold text-ink shadow-xs whitespace-nowrap transition-colors"
              >
                Parent Hub
              </Link>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <main className="min-w-0">{children}</main>
        </div>
      </div>

      <footer className="bg-ink text-white border-t border-slate-800 mt-20 px-4 sm:px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-8 h-8 filter brightness-0 invert" />
              <span className="font-extrabold text-2xl tracking-tight text-white">OpenTutor</span>
            </div>
            <p className="mt-3 text-xs text-slate-300 max-w-md leading-relaxed">
              An educator-supervised, privacy-conscious platform for independent grade-specific curriculum and AI-assisted tutoring. Built for home education and microschools.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Parent Hub</p>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/parent/schedule" className="hover:text-white">01 Schedule Matrix</Link></li>
                <li><Link to="/parent/curriculum" className="hover:text-white">02 Curriculum Tracks</Link></li>
                <li><Link to="/parent/grading" className="hover:text-white">03 Assessment Grader</Link></li>
                <li><Link to="/parent/reports" className="hover:text-white">04 Academic Audits</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Student Tools</p>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/student/today" className="hover:text-white">05 Today's Pacing</Link></li>
                <li><Link to="/browse" className="hover:text-white">06 Assignment Library</Link></li>
                <li><Link to="/library" className="hover:text-white">07 Resource Hub</Link></li>
                <li><Link to="/agents" className="hover:text-white">08 AI Teaching Team</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-3">Open Project</p>
              <ul className="space-y-2 text-slate-300">
                <li><a href="https://omarchy-nora.tailc6fceb.ts.net/#top" target="_blank" rel="noreferrer" className="hover:text-white">Manifesto Site ↗</a></li>
                <li><a href="https://github.com/murderszn/open-tutor" target="_blank" rel="noreferrer" className="hover:text-white">GitHub Source ↗</a></li>
                <li><Link to="/onboarding" className="hover:text-white">Setup Wizard</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- pages ---------- */
function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Refined Modern Hero (from updated splash page & Cartographer) */}
      <section className="relative overflow-hidden rounded-xl border border-ink/20 bg-brand text-ink p-8 sm:p-12 lg:p-14 shadow-xs">
        <div
          className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply bg-center bg-cover no-repeat"
          style={{
            backgroundImage: "url('/assets/academy-of-knowledge-stipple.webp')",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/80 flex items-center gap-1.5">
              <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-4 h-4 filter brightness-0" />
              PARENT-LED K–8 TEACHING LIBRARY &amp; SUPERVISED AI TUTOR
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.04] text-ink">
            AI can tutor.<br />
            Can you see{" "}
            <span className="underline decoration-white decoration-4 underline-offset-4 decoration-skip-none">
              what it taught?
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink/90 font-medium leading-relaxed">
            OpenTutor brings lessons, tutoring, and saved work together so you can see what is happening. You set the pace, choose the work, and keep the history.
          </p>

          {/* 3 Architectural Learning Specimens (01 Think, 02 Try, 03 Keep) */}
          <div className="grid grid-cols-3 gap-4 max-w-md my-6 pt-5 border-t border-ink/20">
            <div className="flex flex-col gap-1">
              <svg viewBox="0 0 160 48" fill="none" className="w-full h-8 text-ink">
                <path d="M8 38H152M8 8V38M8 30L40 27L72 32L104 17L136 8" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="40" cy="27" r="3.5" fill="currentColor" />
                <circle cx="72" cy="32" r="3.5" fill="currentColor" />
                <circle cx="104" cy="17" r="3.5" fill="currentColor" />
                <circle cx="136" cy="8" r="3.5" fill="currentColor" />
              </svg>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">01 Think</span>
            </div>
            <div className="flex flex-col gap-1">
              <svg viewBox="0 0 160 48" fill="none" className="w-full h-8 text-ink">
                <rect x="12" y="10" width="136" height="28" stroke="currentColor" strokeWidth="2.5" />
                <path d="M35 10V38M58 10V38M80 10V38M103 10V38M125 10V38" stroke="currentColor" strokeWidth="2" />
                <path d="M13 11H79V37H13Z" fill="currentColor" opacity=".8" />
              </svg>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">02 Try</span>
            </div>
            <div className="flex flex-col gap-1">
              <svg viewBox="0 0 160 48" fill="none" className="w-full h-8 text-ink">
                <path d="M18 24H142M56 24V10H92M100 24V38H130" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="18" cy="24" r="4" fill="currentColor" />
                <circle cx="56" cy="24" r="4" fill="currentColor" />
                <circle cx="92" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="24" r="4" fill="currentColor" />
                <circle cx="130" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="142" cy="24" r="4" fill="currentColor" />
              </svg>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">03 Keep</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/student/today" className="btn-dark px-6 py-3 text-sm font-bold rounded-lg shadow-sm">
              Launch Student Desk →
            </Link>
            <Link to="/parent/schedule" className="btn-brand px-6 py-3 text-sm font-bold rounded-lg shadow-sm">
              Parent Operating Hub
            </Link>
            <Link to="/browse" className="btn-outline px-6 py-3 text-sm font-bold rounded-lg shadow-sm">
              Browse Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Balanced Metric Cards (Cartographer MetricCard Pattern) */}
      <div>
        <div className="section-kicker">
          <img src="/assets/micro/m03-target.png" alt="" className="w-4 h-4 filter brightness-0" />
          SYSTEM METRICS &amp; CAPABILITIES
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          <div className="card p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">CURRICULUM</span>
                <img src="/assets/micro/m17-num-01.png" alt="" className="w-4 h-4 filter brightness-0" />
              </div>
              <p className="text-2xl font-bold text-ink tracking-tight">K–12 Tracks</p>
              <p className="mt-1 text-xs text-ink/70 leading-normal">
                Structured units across Math, Language Arts, STEM, and Social Studies.
              </p>
            </div>
            <Link to="/browse" className="mt-4 pt-3 border-t border-ink/10 text-xs font-semibold text-cobalt hover:underline flex items-center justify-between">
              <span>Browse Units</span>
              <span>→</span>
            </Link>
          </div>

          <div className="card p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">PACING</span>
                <img src="/assets/micro/m18-num-02.png" alt="" className="w-4 h-4 filter brightness-0" />
              </div>
              <p className="text-2xl font-bold text-ink tracking-tight">Weekly Matrix</p>
              <p className="mt-1 text-xs text-ink/70 leading-normal">
                Interactive week-by-week timeline with drag-and-drop task reordering.
              </p>
            </div>
            <Link to="/parent/schedule" className="mt-4 pt-3 border-t border-ink/10 text-xs font-semibold text-cobalt hover:underline flex items-center justify-between">
              <span>Open Schedule</span>
              <span>→</span>
            </Link>
          </div>

          <div className="card p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">AI TEAM</span>
                <img src="/assets/micro/m08-bolt.png" alt="" className="w-4 h-4 filter brightness-0" />
              </div>
              <p className="text-2xl font-bold text-ink tracking-tight">8 Cockpits</p>
              <p className="mt-1 text-xs text-ink/70 leading-normal">
                Specialized agents for lesson planning, grading rubrics, and Socratic buddy tutoring.
              </p>
            </div>
            <Link to="/agents" className="mt-4 pt-3 border-t border-ink/10 text-xs font-semibold text-cobalt hover:underline flex items-center justify-between">
              <span>Launch Cockpits</span>
              <span>→</span>
            </Link>
          </div>

          <div className="card p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">AUDITS</span>
                <img src="/assets/micro/m20-num-04.png" alt="" className="w-4 h-4 filter brightness-0" />
              </div>
              <p className="text-2xl font-bold text-ink tracking-tight">100% Evidence</p>
              <p className="mt-1 text-xs text-ink/70 leading-normal">
                Exportable markdown report cards, engagement metrics, and revision logs.
              </p>
            </div>
            <Link to="/parent/reports" className="mt-4 pt-3 border-t border-ink/10 text-xs font-semibold text-cobalt hover:underline flex items-center justify-between">
              <span>View Audits</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Core Principles in Clean Equal-Height Cards */}
      <div>
        <div className="section-kicker">
          <img src="/assets/micro/m02-crosshair.png" alt="" className="w-4 h-4 filter brightness-0" />
          CORE DESIGN PRINCIPLES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50 block mb-2">
                01 / OVERSIGHT
              </span>
              <h2 className="text-xl font-bold text-ink mb-2">Governance before automation</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                Parent oversight is a fundamental design requirement. Prompts, pacing, safeguards, and access are always set and audited by the responsible adults.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10">
              <Link to="/parent/schedule" className="text-xs font-semibold text-cobalt hover:underline">
                Configure Schedules &amp; Pacing →
              </Link>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50 block mb-2">
                02 / VISIBILITY
              </span>
              <h2 className="text-xl font-bold text-ink mb-2">Transparency by default</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                Assignments, student revisions, teacher notes, and feedback live in visible, version-controlled files you inspect, never locked behind closed black-box dashboards.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10">
              <Link to="/browse" className="text-xs font-semibold text-cobalt hover:underline">
                Inspect Curriculum Files →
              </Link>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50 block mb-2">
                03 / CONTINUITY
              </span>
              <h2 className="text-xl font-bold text-ink mb-2">Continuity of evidence</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                Daily interactive Socratic tutoring connects directly to permanent student portfolios, rubrics, and automated report card generation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10">
              <Link to="/parent/reports" className="text-xs font-semibold text-cobalt hover:underline">
                View Growth Reports →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Setup / Getting Started Card */}
      <div className="card p-6 sm:p-8 bg-slate-50/60 border border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="max-w-xl">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/50 block mb-1">
            ONBOARDING WORKFLOW
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-ink">New family or microschool?</h2>
          <p className="text-sm text-ink/75 mt-1 leading-relaxed">
            Create your local educator profile, configure student avatars with PIN badges, and distribute your first weekly schedule.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/auth/register" className="btn-outline text-xs px-4 py-2 font-bold shadow-xs">
            Create Profile
          </Link>
          <Link to="/onboarding" className="btn-brand text-xs px-4 py-2 font-bold shadow-xs">
            Run Onboarding Wizard →
          </Link>
        </div>
      </div>
    </div>
  );
}

function AssignmentRoute() {
  const { id } = useParams();
  return <AssignmentRunner key={id} />;
}

function Browse() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col gap-6">
      <CurriculumBrowser onSelect={setSelected} />
      <AssignmentViewer assignment={selected} />
    </div>
  );
}

function Library() {
  // ResourceHub search + filters; SafeVideoModal plays a video when a
  // future resource entry carries a url (current resources.json has none).
  const [video, setVideo] = useState(null);
  return (
    <div>
      <ResourceHub onPlayVideo={setVideo} />
      <SafeVideoModal url={video} title="Resource video" onClose={() => setVideo(null)} />
    </div>
  );
}

function Agents() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAgentId, setSelectedAgentId] = useState("teachers-aide");
  const [audience, setAudience] = useState("parent");
  const [consoleQuery, setConsoleQuery] = useState("");
  const [consoleLogs, setConsoleLogs] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedAgent = mockAgents.find((a) => a.id === selectedAgentId) || mockAgents[0];

  const categories = ["All", "Instruction", "Planning", "Evaluation", "Operations"];

  const filteredAgents = useMemo(() => {
    if (activeCategory === "All") return mockAgents;
    return mockAgents.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const activeChat = consoleLogs[selectedAgent.id] || [
    {
      from: "agent",
      text: audience === "student"
        ? `Hello! I'm ${selectedAgent.name}. As your ${selectedAgent.role.toLowerCase()}, I'm here to help you think through problems step-by-step.`
        : `[System]: ${selectedAgent.name} initialized in Educator/Parent Mode. Guardrail: ${selectedAgent.guardrail}`,
    },
  ];

  function runSimulation(promptText) {
    const text = (promptText || consoleQuery).trim();
    if (!text) return;
    setIsProcessing(true);

    const userEntry = { from: "user", text };
    const currentList = consoleLogs[selectedAgent.id] || activeChat;
    setConsoleLogs((prev) => ({
      ...prev,
      [selectedAgent.id]: [...currentList, userEntry],
    }));
    setConsoleQuery("");

    setTimeout(() => {
      let replyText = "";
      if (selectedAgent.id === "teachers-aide") {
        replyText = audience === "student"
          ? "Great question! Before finding the common denominator, what happens if we list the multiples of 3 and 4? Which small number appears on both lists?"
          : "[TeachersAide Evaluation]: Student prompt received. Guardrail enforced: direct answer suppressed. Scaffold question generated referencing factor multiples.";
      } else if (selectedAgent.id === "subject-tutor") {
        replyText = "☀️ Hook: Plants are like tiny solar-powered kitchens!\n🧱 Analogy: Water travels up roots like sipping through a straw, air enters tiny leaves, and sunlight cooks them into sugar.\n❓ Your Turn: What do you think happens to the plant if it gets water and air, but is kept in a dark closet?";
      } else if (selectedAgent.id === "assessment-grader") {
        replyText = "📋 Rubric Breakdown:\n• Criterion 1 (Clarity): 4/5 — Clear sentence structure.\n• Criterion 2 (Punctuation): 5/5 — Proper use of periods and commas.\n• Constructive Next Step: Try varying transition words (e.g. 'Furthermore', 'Consequently') in paragraph 2!";
      } else if (selectedAgent.id === "lesson-planner") {
        replyText = "⏱️ 45-Minute Lesson Plan: Fractions & Measurement\n• 00-10m: Concrete Hook (Fold paper strips into thirds and fourths)\n• 10-25m: Guided Exercise (Measuring desk items with fraction rulers)\n• 25-40m: Independent Practice (Assignment: 'Fractions in the Kitchen')\n• 40-45m: Exit Ticket (Explain why 1/2 > 1/4)";
      } else if (selectedAgent.id === "report-card") {
        replyText = "📊 Mid-Term Progress Synthesis:\n• Pacing: On schedule (Week 4 of 6 completed).\n• Mastery: 92% across STEM algorithms and language mechanics.\n• Portfolio Highlights: 4 verified Git commits with comprehensive documentation.";
      } else if (selectedAgent.id === "resource-finder") {
        replyText = "🔍 Curated Educational Resource Pack:\n1. Video: SciShow Kids — 'How Water Moves in the Sky' (Safe Embed)\n2. Primary Source: USGS Water Cycle Diagram (Public Domain PDF)\n3. Interactive Sandbox: HTML5 Cloud Formation Simulation";
      } else {
        replyText = `Verified repository integrity: All syllabus links for ${selectedAgent.name} match current markdown specifications in resources/.`;
      }

      setConsoleLogs((prev) => ({
        ...prev,
        [selectedAgent.id]: [
          ...(prev[selectedAgent.id] || []),
          { from: "agent", text: replyText },
        ],
      }));
      setIsProcessing(false);
    }, 450);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Platform Header & Metric Summary */}
      <div className="card p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="section-kicker">
              <img src="/assets/micro/m08-bolt.png" alt="" className="w-4 h-4 filter brightness-0" />
              AUTONOMOUS TEACHING FLEET
            </div>
            <h1 className="heading-serif text-3xl sm:text-4xl font-bold text-ink">
              Supervised AI Teaching Team
            </h1>
            <p className="mt-1 text-sm text-ink/70 max-w-2xl">
              Eight purpose-built agents designed for educator-led learning. Each assistant operates under strict pedagogical guardrails—providing Socratic inquiry, curriculum design, or rubric evaluations without removing student agency.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              8/8 Agents Operational
            </span>
          </div>
        </div>

        {/* 4 Architectural Metrics */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
            <p className="font-mono text-[11px] font-bold uppercase text-ink/50">Core Protocol</p>
            <p className="mt-1 text-lg font-bold text-ink">Strict Socratic</p>
            <p className="mt-0.5 text-xs text-ink/65">Hints only; no answers given</p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
            <p className="font-mono text-[11px] font-bold uppercase text-ink/50">Privacy Standard</p>
            <p className="mt-1 text-lg font-bold text-ink">Zero-PII Storage</p>
            <p className="mt-0.5 text-xs text-ink/65">Local records only; no tracking</p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
            <p className="font-mono text-[11px] font-bold uppercase text-ink/50">Dual Surfacing</p>
            <p className="mt-1 text-lg font-bold text-ink">Parent vs Student</p>
            <p className="mt-0.5 text-xs text-ink/65">Separate audit &amp; study views</p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
            <p className="font-mono text-[11px] font-bold uppercase text-ink/50">Curriculum Scope</p>
            <p className="mt-1 text-lg font-bold text-ink">Grades K–8 Tracks</p>
            <p className="mt-0.5 text-xs text-ink/65">Modular pacing &amp; rubrics</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex min-h-[38px] cursor-pointer items-center justify-center rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-ink text-white shadow-xs font-bold"
                  : "border border-slate-200 bg-white text-ink/75 hover:bg-slate-50 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-ink/60">
          Showing {filteredAgents.length} of {mockAgents.length} assistants
        </p>
      </div>

      {/* Rich Agent Fleet Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map((ag) => {
          const isSelected = selectedAgent.id === ag.id;
          return (
            <div
              key={ag.id}
              className={`card flex flex-col justify-between p-6 transition-all ${
                isSelected
                  ? "border-cobalt ring-2 ring-cobalt/20 shadow-md"
                  : "hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/70">
                    {ag.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ready
                  </span>
                </div>

                <h3 className="heading-serif text-2xl font-bold text-ink">
                  {ag.name}
                </h3>
                <p className="font-mono text-xs font-semibold text-cobalt mt-0.5 mb-2.5">
                  {ag.role}
                </p>
                <p className="text-sm text-ink/80 leading-relaxed">
                  {ag.description}
                </p>

                <div className="mt-4 rounded-lg border border-slate-200/90 bg-slate-50/70 p-3">
                  <p className="font-mono text-[10px] font-bold uppercase text-ink/60 mb-0.5">
                    Safety Guardrail
                  </p>
                  <p className="text-xs text-ink/85 italic leading-snug">
                    "{ag.guardrail}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAgentId(ag.id);
                    const el = document.getElementById("interactive-console");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex-1 inline-flex min-h-[38px] items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-cobalt text-white shadow-2xs"
                      : "border border-slate-200 bg-white text-ink hover:bg-slate-50"
                  }`}
                >
                  {isSelected ? "Active in Console" : "Select & Test"}
                </button>
                <a
                  href={`${import.meta.env.BASE_URL}agents/${ag.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-ink/80 hover:text-ink hover:border-slate-400 transition-colors"
                  title="Open standalone cockpit preview"
                >
                  <span className="font-mono text-[11px]">COCKPIT ↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Socratic Simulator Console */}
      <div id="interactive-console" className="card overflow-hidden border border-slate-300 shadow-md">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand border border-ink/20 shadow-2xs">
              <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-5 h-5 filter brightness-0" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-extrabold text-base text-ink">
                  Interactive Agent Simulator: {selectedAgent.name}
                </h2>
                <span className="rounded-full bg-slate-200/80 px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                  {selectedAgent.category}
                </span>
              </div>
              <p className="text-xs text-ink/70">
                Rule: {selectedAgent.guardrail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setAudience("student")}
                className={`rounded-md px-3 py-1 transition-all ${
                  audience === "student" ? "bg-ink text-white font-bold" : "text-ink/70 hover:text-ink"
                }`}
              >
                Student View
              </button>
              <button
                type="button"
                onClick={() => setAudience("parent")}
                className={`rounded-md px-3 py-1 transition-all ${
                  audience === "parent" ? "bg-ink text-white font-bold" : "text-ink/70 hover:text-ink"
                }`}
              >
                Educator View
              </button>
            </div>
            <button
              type="button"
              onClick={() => setConsoleLogs((prev) => ({ ...prev, [selectedAgent.id]: [] }))}
              className="text-xs font-mono text-ink/60 hover:text-ink underline"
            >
              Reset Chat
            </button>
          </div>
        </div>

        {/* Console Chat Stream */}
        <div className="p-6 bg-white flex flex-col gap-3 min-h-[260px] max-h-[420px] overflow-y-auto">
          {activeChat.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.from === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1 px-1">
                <span className="font-mono text-[10px] font-bold uppercase text-ink/50">
                  {msg.from === "user" ? "You" : selectedAgent.name}
                </span>
              </div>
              <div
                className={`rounded-xl p-4 text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                  msg.from === "user"
                    ? "bg-ink text-white"
                    : "border border-slate-200 bg-slate-50/70 text-ink"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isProcessing && (
            <div className="flex items-center gap-2 text-xs text-ink/60 italic p-2">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
              {selectedAgent.name} is evaluating pedagogical constraints…
            </div>
          )}
        </div>

        {/* Input Bar with Sample Quick-Prompts */}
        <div className="border-t border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[11px] font-bold uppercase text-ink/60">Sample:</span>
            <button
              type="button"
              onClick={() => runSimulation(selectedAgent.samplePrompt)}
              className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-ink hover:border-cobalt hover:text-cobalt transition-colors truncate max-w-md text-left"
            >
              "{selectedAgent.samplePrompt}"
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              runSimulation();
            }}
            className="flex gap-2"
          >
            <input
              value={consoleQuery}
              onChange={(e) => setConsoleQuery(e.target.value)}
              placeholder={`Ask ${selectedAgent.name} a question…`}
              className="flex-1 min-h-[44px] rounded-lg border border-slate-300 bg-white px-4 text-sm text-ink focus:border-cobalt focus:outline-none"
            />
            <button
              type="submit"
              disabled={isProcessing}
              className="btn-brand min-h-[44px] px-5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------- app ---------- */
export default function App() {
  return (
    <HashRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/onboarding" element={<OnboardingWizard />} />
          <Route path="/parent/schedule" element={<Schedule />} />
          <Route path="/parent/curriculum" element={<Curriculum />} />
          <Route path="/parent/grading" element={<Grading />} />
          <Route path="/parent/reports" element={<Reports />} />
          <Route path="/student/today" element={<Today />} />
          <Route path="/student/assignments/:id" element={<AssignmentRoute />} />
          <Route path="/student/resources" element={<StudentResources />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/library" element={<Library />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </Shell>
    </HashRouter>
  );
}

export { SubjectBadge };
