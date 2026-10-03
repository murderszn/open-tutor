import { useState } from "react";

const EDUCATORS_KEY = "opentutor.educators";
const SESSION_KEY = "opentutor.session";

function loadEducators() {
  try {
    return JSON.parse(localStorage.getItem(EDUCATORS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ ...session, at: Date.now() }));
}

// Educator sign-in. Nickname/first-name only, localStorage only — no PII,
// no network calls. Supports email + password, Google stub, and magic link.
export default function Login({ onDone }) {
  const [mode, setMode] = useState("password"); // password | magic | magic-sent
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  function finish(educator, method) {
    saveSession({ role: "educator", nickname: educator.nickname, method });
    onDone && onDone(educator);
  }

  function handlePassword(e) {
    e.preventDefault();
    setError("");
    const found = loadEducators().find(
      (x) => x.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (!found) return setError("No account for that email. Try Register first.");
    if (found.password !== password) return setError("Wrong password. Try again.");
    finish(found, "password");
  }

  function handleGoogle() {
    // Stub: real Google OAuth is wired up by the host app. In this local-only
    // kit we match (or create) an educator record by chosen nickname.
    const nickname = window.prompt("Demo Google sign-in — enter a first name or nickname:");
    if (!nickname) return;
    const educators = loadEducators();
    let found = educators.find((x) => x.nickname.toLowerCase() === nickname.trim().toLowerCase());
    if (!found) {
      found = { nickname: nickname.trim(), email: "", created: Date.now(), via: "google-stub" };
      educators.push(found);
      localStorage.setItem(EDUCATORS_KEY, JSON.stringify(educators));
    }
    finish(found, "google");
  }

  function sendMagicLink(e) {
    e.preventDefault();
    setError("");
    const found = loadEducators().find(
      (x) => x.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (!found) return setError("No account for that email. Try Register first.");
    // Demo magic link: the token is generated and verified locally so the
    // flow works with no email backend. A real backend would email this.
    const code = String(Math.floor(100000 + Math.random() * 900000));
    localStorage.setItem("opentutor.magic", JSON.stringify({ email: found.email, code }));
    window.alert(`Demo magic code (would be emailed): ${code}`);
    setMode("magic-sent");
  }

  function confirmMagicLink(e) {
    e.preventDefault();
    setError("");
    let pending = null;
    try {
      pending = JSON.parse(localStorage.getItem("opentutor.magic") || "null");
    } catch { /* ignore */ }
    if (!pending || pending.code !== token.trim()) return setError("That code does not match.");
    const found = loadEducators().find((x) => x.email === pending.email);
    localStorage.removeItem("opentutor.magic");
    finish(found, "magic-link");
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-4 h-4 filter brightness-0" />
          EDUCATOR ACCESS
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">Educator sign-in</h1>
        <p className="mt-1 text-sm text-ink/70">
          Sign in to manage schedules, curriculum tracks, and student grading.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn-outline mt-6 w-full font-bold shadow-xs"
        >
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <hr className="flex-1 border-ink/20" />
          <span className="font-mono text-xs uppercase tracking-wider text-ink/50">or</span>
          <hr className="flex-1 border-ink/20" />
        </div>

        {mode === "password" && (
          <form onSubmit={handlePassword} className="flex flex-col gap-4">
            <label className="block text-sm font-semibold text-ink">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
                {error}
              </p>
            )}
            <button type="submit" className="btn-brand mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold shadow-sm">
              Sign in
            </button>
            <button
              type="button"
              onClick={() => { setError(""); setMode("magic"); }}
              className="btn-outline flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold text-sm shadow-xs"
            >
              Email me a link instead
            </button>
          </form>
        )}

        {mode === "magic" && (
          <form onSubmit={sendMagicLink} className="flex flex-col gap-4">
            <label className="block text-sm font-semibold text-ink">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
                {error}
              </p>
            )}
            <button type="submit" className="btn-brand mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold shadow-sm">
              Send magic link
            </button>
            <button
              type="button"
              onClick={() => { setError(""); setMode("password"); }}
              className="btn-outline flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold text-sm shadow-xs"
            >
              Back to password
            </button>
          </form>
        )}

        {mode === "magic-sent" && (
          <form onSubmit={confirmMagicLink} className="flex flex-col gap-4">
            <p className="text-sm text-ink/80">
              We generated a 6-digit demo code for <strong>{email}</strong>. Enter it to finish signing in.
            </p>
            <label className="block text-sm font-semibold text-ink">
              Code
              <input
                inputMode="numeric"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
                className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 font-mono text-lg tracking-widest text-ink focus:border-cobalt focus:outline-none"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
                {error}
              </p>
            )}
            <button type="submit" className="btn-brand mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center font-bold shadow-sm">
              Verify code
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
