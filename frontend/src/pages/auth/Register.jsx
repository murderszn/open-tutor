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

// Family / classroom educator setup. Nickname/first-name only, localStorage
// only — no PII leaves the browser. Optionally invites co-educators, whose
// pending invites are stored locally until they register.
export default function Register({ onDone }) {
  const [accountType, setAccountType] = useState("family"); // family | classroom
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spaceName, setSpaceName] = useState("");
  const [invite, setInvite] = useState("");
  const [invites, setInvites] = useState([]);
  const [error, setError] = useState("");

  function addInvite() {
    const value = invite.trim();
    if (!value) return;
    if (invites.includes(value)) return;
    setInvites([...invites, value]);
    setInvite("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const name = nickname.trim();
    if (!name) return setError("Please choose a first name or nickname.");
    const educators = loadEducators();
    if (educators.some((x) => x.email && x.email.toLowerCase() === email.trim().toLowerCase())) {
      return setError("That email is already registered. Try signing in.");
    }
    const educator = {
      nickname: name,
      email: email.trim(),
      password,
      accountType,
      spaceName: spaceName.trim(),
      invites,
      created: Date.now(),
    };
    educators.push(educator);
    localStorage.setItem(EDUCATORS_KEY, JSON.stringify(educators));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ role: "educator", nickname: name, method: "register", at: Date.now() }));
    onDone && onDone(educator);
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="card p-6 md:p-8">
        <div className="section-kicker">
          <img src="/assets/micro/m16-ot-mark.png" alt="" className="w-4 h-4 filter brightness-0" />
          ACCOUNT REGISTRATION
        </div>
        <h1 className="heading-serif text-3xl font-bold text-ink">
          Create your {accountType === "family" ? "family" : "classroom"} account
        </h1>
        <p className="mt-1 text-sm text-ink/70">
          Zero PII leaves your browser. Profile data stays in local storage.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <fieldset className="border-0 p-0">
            <legend className="text-sm font-semibold text-ink">Account type</legend>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <label
                className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 font-medium transition-colors ${
                  accountType === "family"
                    ? "border-cobalt bg-cobalt/5 text-cobalt font-semibold"
                    : "border-ink/20 bg-white text-ink/80 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="accountType"
                  checked={accountType === "family"}
                  onChange={() => setAccountType("family")}
                  className="accent-cobalt"
                />
                Family
              </label>
              <label
                className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 font-medium transition-colors ${
                  accountType === "classroom"
                    ? "border-cobalt bg-cobalt/5 text-cobalt font-semibold"
                    : "border-ink/20 bg-white text-ink/80 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="accountType"
                  checked={accountType === "classroom"}
                  onChange={() => setAccountType("classroom")}
                  className="accent-cobalt"
                />
                Classroom
              </label>
            </div>
          </fieldset>

          <label className="block text-sm font-semibold text-ink">
            Your first name or nickname
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
            />
          </label>

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
            Password (at least 8 characters)
            <input
              type="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
            />
          </label>

          <label className="block text-sm font-semibold text-ink">
            {accountType === "family" ? "Family" : "Classroom"} name
            <input
              value={spaceName}
              onChange={(e) => setSpaceName(e.target.value)}
              placeholder={accountType === "family" ? "e.g. The Rivera crew" : "e.g. Room 4B"}
              className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
            />
          </label>

          <fieldset className="rounded-lg border border-ink/20 bg-slate-50/50 p-4">
            <legend className="px-1 text-sm font-semibold text-ink">Invite co-educators (optional)</legend>
            <div className="mt-2 flex gap-2">
              <input
                value={invite}
                onChange={(e) => setInvite(e.target.value)}
                placeholder="Email or nickname"
                className="flex-1 min-h-[44px] rounded-lg border border-ink/20 bg-white px-3 py-2 text-ink focus:border-cobalt focus:outline-none"
              />
              <button
                type="button"
                onClick={addInvite}
                className="btn-dark min-h-[44px] px-5 font-bold shadow-sm"
              >
                Add invite
              </button>
            </div>
            {invites.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {invites.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 rounded-md border border-ink/20 bg-white px-3 py-1 text-sm font-medium text-ink"
                  >
                    <span>{i}</span>
                    <button
                      type="button"
                      onClick={() => setInvites(invites.filter((x) => x !== i))}
                      className="cursor-pointer text-xs font-bold text-ink/60 hover:text-rose-600"
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </fieldset>

          {error && (
            <p role="alert" className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-brand mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
