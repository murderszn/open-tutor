import { useState } from "react";
import { Link } from "react-router-dom";

const STUDENTS_KEY = "opentutor.students";
const SESSION_KEY = "opentutor.session";

function loadStudents() {
  try {
    return JSON.parse(localStorage.getItem(STUDENTS_KEY) || "[]");
  } catch {
    return [];
  }
}

// Kid-safe sign-in: pick your avatar, enter your 4-digit PIN. A QR badge scan
// is stubbed as paste-the-badge-code (a real scanner fills the same field),
// and educators can hand out one-time magic session codes.
export default function StudentLogin({ onDone }) {
  const students = loadStudents();
  const [selected, setSelected] = useState("");
  const [pin, setPin] = useState("");
  const [badgeCode, setBadgeCode] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [error, setError] = useState("");

  function startSession(student, method) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ role: "student", nickname: student.nickname, method, at: Date.now() }));
    onDone && onDone(student);
  }

  function handlePin(e) {
    e.preventDefault();
    setError("");
    const student = students.find((s) => s.nickname === selected);
    if (!student) return setError("Pick your avatar first.");
    if (!/^\d{4}$/.test(pin)) return setError("PINs are 4 digits.");
    if (student.pin !== pin) return setError("Hmm, that PIN did not match. Try again.");
    startSession(student, "avatar-pin");
  }

  // Badge codes look like `OT-<nickname>-<pin>`; scanning and pasting converge here.
  function handleBadge(e) {
    e.preventDefault();
    setError("");
    const m = badgeCode.trim().match(/^OT-(.+)-(\d{4})$/i);
    if (!m) return setError("That badge code did not look right. Ask your grown-up for help.");
    const student = students.find((s) => s.nickname.toLowerCase() === m[1].toLowerCase() && s.pin === m[2]);
    if (!student) return setError("No student matches that badge.");
    startSession(student, "badge-scan");
  }

  function handleMagic(e) {
    e.preventDefault();
    setError("");
    let issued = null;
    try {
      issued = JSON.parse(localStorage.getItem("opentutor.student-magic") || "null");
    } catch { /* ignore */ }
    if (!issued || issued.code !== magicCode.trim()) return setError("That magic session code is not valid.");
    const student = students.find((s) => s.nickname === issued.nickname);
    if (!student) return setError("That magic session code is not valid.");
    localStorage.removeItem("opentutor.student-magic");
    startSession(student, "magic-session");
  }

  if (students.length === 0) {
    return (
      <div className="mx-auto max-w-md">
        <div className="card text-center">
          <h1 className="heading-serif text-3xl font-bold text-ink">Student sign-in</h1>
          <p className="mt-4 text-ink/80">No student profiles yet. Finish the onboarding wizard to add one.</p>
          <Link to="/onboarding" className="btn-brand mt-6 inline-flex min-h-[44px] items-center justify-center">
            Go to onboarding wizard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-4 h-4 filter brightness-0" />
          STUDENT DESK
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Student sign-in</h1>
        <p className="mt-1 text-sm text-ink/70">Pick your avatar and enter your secret 4-digit PIN.</p>

        <form onSubmit={handlePin} className="mt-6 flex flex-col gap-4">
          <fieldset className="border-0 p-0">
            <legend className="text-sm font-semibold text-ink">1. Tap your avatar</legend>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {students.map((s) => {
                const isSelected = selected === s.nickname;
                return (
                  <label
                    key={s.nickname}
                    className={`flex min-h-[56px] cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                      isSelected
                        ? "border-cobalt bg-cobalt/5 font-bold text-cobalt ring-2 ring-cobalt"
                        : "border-ink/20 bg-white text-ink/80 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="avatar"
                      checked={isSelected}
                      onChange={() => setSelected(s.nickname)}
                      className="sr-only"
                    />
                    <span className="text-2xl" role="img" aria-label={s.nickname}>
                      {s.avatar}
                    </span>
                    <span className="truncate">{s.nickname}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="block text-sm font-semibold text-ink">
            2. Enter your 4-digit PIN
            <input
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="••••"
              required
              className="mt-1 block min-h-[48px] w-full max-w-[180px] rounded-lg border border-ink/20 bg-white px-4 py-2 font-mono text-2xl tracking-widest text-ink text-center focus:border-cobalt focus:outline-none"
            />
          </label>

          {error && (
            <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-brand mt-2 flex min-h-[48px] w-full cursor-pointer items-center justify-center text-lg"
          >
            Start learning
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <hr className="flex-1 border-ink/20" />
          <span className="font-mono text-xs uppercase tracking-wider text-ink/50">or sign in with</span>
          <hr className="flex-1 border-ink/20" />
        </div>

        <form onSubmit={handleBadge} className="rounded-lg border border-ink/20 bg-slate-50/50 p-4">
          <label className="block text-sm font-semibold text-ink">
            Scan or paste your badge code
            <div className="mt-2 flex gap-2">
              <input
                value={badgeCode}
                onChange={(e) => setBadgeCode(e.target.value)}
                placeholder="OT-Nickname-1234"
                className="flex-1 min-h-[44px] rounded-lg border border-ink/20 bg-white px-3 py-2 font-mono text-sm text-ink focus:border-cobalt focus:outline-none"
              />
              <button
                type="submit"
                className="btn-dark min-h-[44px] px-5 text-sm font-bold shadow-sm"
              >
                Sign in
              </button>
            </div>
          </label>
        </form>

        <form onSubmit={handleMagic} className="mt-3 rounded-lg border border-ink/20 bg-slate-50/50 p-4">
          <label className="block text-sm font-semibold text-ink">
            Enter a magic session code from your grown-up
            <div className="mt-2 flex gap-2">
              <input
                value={magicCode}
                onChange={(e) => setMagicCode(e.target.value)}
                placeholder="Session code"
                className="flex-1 min-h-[44px] rounded-lg border border-ink/20 bg-white px-3 py-2 font-mono text-sm text-ink focus:border-cobalt focus:outline-none"
              />
              <button
                type="submit"
                className="btn-dark min-h-[44px] px-5 text-sm font-bold shadow-sm"
              >
                Use code
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
