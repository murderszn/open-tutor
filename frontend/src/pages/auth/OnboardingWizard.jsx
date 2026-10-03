import { useState } from "react";

const STUDENTS_KEY = "opentutor.students";
const AVATARS = ["🦊", "🐼", "🦁", "🐸", "🦄", "🐙", "🐯", "🦉"];
const GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const PACINGS = ["Standard", "Accelerated", "Flexible"];
const PASSPHRASE_WORDS = ["sun", "fox", "moon", "star", "frog", "bear", "leaf", "fish", "bird", "cake"];

function randomPin() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function randomPassphrase() {
  const pick = () => PASSPHRASE_WORDS[Math.floor(Math.random() * PASSPHRASE_WORDS.length)];
  return `${pick()} ${pick()} ${pick()}`;
}

// First-run student setup: nickname only (zero PII), avatar, grade K-12,
// pacing, then a printable sign-on badge with QR stub + PIN + emoji passphrase.
export default function OnboardingWizard({ onDone }) {
  const [step, setStep] = useState(0);
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [grade, setGrade] = useState("K");
  const [pacing, setPacing] = useState("Standard");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  function finish() {
    setError("");
    const name = nickname.trim();
    if (!name) return setError("Pick a nickname to continue.");
    let students = [];
    try {
      students = JSON.parse(localStorage.getItem(STUDENTS_KEY) || "[]");
    } catch { /* ignore */ }
    if (students.some((s) => s.nickname.toLowerCase() === name.toLowerCase())) {
      return setError("That nickname is taken. Try another one.");
    }
    const created = { nickname: name, avatar, grade, pacing, pin: randomPin(), passphrase: randomPassphrase(), created: Date.now() };
    students.push(created);
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
    setProfile(created);
    setStep(4);
    onDone && onDone(created);
  }

  const badgeCode = profile ? `OT-${profile.nickname}-${profile.pin}` : "";
  // QR stub: encodes the badge code as text until a real QR renderer is wired in.
  const qrStub = profile ? `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(badgeCode)}&size=160x160` : "";

  return (
    <div className="mx-auto max-w-xl">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-4 h-4 filter brightness-0" />
          SYSTEM ONBOARDING
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">
          Welcome! Let us set you up
        </h1>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/60">
          Step {step + 1} of 5
        </p>

        {step === 0 && (
          <div className="mt-6 flex flex-col gap-4">
            <label className="block text-sm font-semibold text-ink">
              What should we call you? (nickname only)
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="e.g. Sunny"
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink text-lg focus:border-cobalt focus:outline-none"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={() => nickname.trim() ? (setError(""), setStep(1)) : setError("Pick a nickname to continue.")}
              className="btn-brand mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold shadow-sm"
            >
              Next
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-sm font-semibold text-ink">Pick your avatar</p>
            <div className="grid grid-cols-4 gap-3">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={avatar === a}
                  onClick={() => setAvatar(a)}
                  className={`flex min-h-[64px] cursor-pointer items-center justify-center rounded-lg border text-3xl transition-colors ${
                    avatar === a
                      ? "border-cobalt bg-cobalt/5 ring-2 ring-cobalt"
                      : "border-ink/20 bg-white hover:bg-slate-50"
                  }`}
                >
                  <span role="img" aria-label="avatar option">{a}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center px-5 py-2 font-bold shadow-xs"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-brand flex-1 flex min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 flex flex-col gap-4">
            <label className="block text-sm font-semibold text-ink">
              What grade are you in?
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink text-lg font-medium focus:border-cobalt focus:outline-none"
              >
                {GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g === "K" ? "Kindergarten" : `Grade ${g}`}
                  </option>
                ))}
              </select>
            </label>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center font-bold px-5 py-2 shadow-xs"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-brand flex-1 flex min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 flex flex-col gap-4">
            <fieldset className="border-0 p-0">
              <legend className="text-sm font-semibold text-ink">How fast should we go?</legend>
              <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {PACINGS.map((p) => (
                  <label
                    key={p}
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 font-medium transition-colors ${
                      pacing === p
                        ? "border-cobalt bg-cobalt/5 font-bold text-cobalt ring-2 ring-cobalt"
                        : "border-ink/20 bg-white text-ink/80 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="pacing"
                      checked={pacing === p}
                      onChange={() => setPacing(p)}
                      className="accent-cobalt"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
            {error && (
              <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
                {error}
              </p>
            )}
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center font-bold px-5 py-2 shadow-xs"
              >
                Back
              </button>
              <button
                type="button"
                onClick={finish}
                className="btn-brand flex-1 flex min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {step === 4 && profile && (
          <div className="mt-6 flex flex-col gap-6">
            <div id="student-signon-badge" className="rounded-xl border-2 border-ink bg-white p-6">
              <div className="border-b border-ink/20 pb-3">
                <h2 className="heading-serif text-2xl font-bold text-ink">Student Sign-On Badge</h2>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-4xl" role="img" aria-label={profile.nickname}>
                  {profile.avatar}
                </span>
                <div>
                  <p className="text-xl font-bold text-ink">{profile.nickname}</p>
                  <p className="text-sm text-ink/70">
                    {profile.grade === "K" ? "Kindergarten" : `Grade ${profile.grade}`} · {profile.pacing}
                  </p>
                </div>
              </div>
              {qrStub && (
                <div className="my-4 flex justify-center">
                  <img
                    src={qrStub}
                    alt={`QR code for badge ${badgeCode}`}
                    width={160}
                    height={160}
                    className="rounded-lg border border-ink/20"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 rounded-lg border border-ink/20 bg-slate-50 p-3 text-sm">
                <p>
                  Badge code: <code className="font-mono font-bold text-cobalt">{badgeCode}</code>
                </p>
                <p>
                  PIN: <code className="font-mono font-bold text-cobalt">{profile.pin}</code>
                </p>
                <p>
                  Emoji passphrase: <code className="font-mono font-bold text-ink">{profile.passphrase}</code>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-dark flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold shadow-sm"
            >
              Print badge
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
