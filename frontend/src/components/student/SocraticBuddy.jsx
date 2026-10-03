import { useState } from "react";

/**
 * SocraticBuddy drawer.
 * Default "Teacher Aide" mode: Socratic hints, NEVER direct answers
 * (per teachers/ai-assistants/teachers_aide.md).
 * Switchable "Subject Tutor" mode: hook + analogy + one check
 * question for a deep-dive (per subject_tutor.md).
 *
 * This component ships with local hint scaffolds so it works
 * without a backend; wire `onAsk` to a real aide endpoint later.
 */

const HINT_STARTERS = [
  "What have you tried so far?",
  "Which part feels tricky — the first step or the middle?",
  "Can you restate the question in your own words?",
  "What would happen if you tried a smaller example first?",
];

function TutorDeepDive({ topic }) {
  const subject = topic || "this topic";
  return (
    <div className="rounded-lg border border-ink/20 bg-white p-3.5 text-xs text-ink flex flex-col gap-2">
      <p>
        <strong className="text-cobalt">Hook:</strong> Did you know {subject} shows up in everyday life more
        than most people notice?
      </p>
      <p>
        <strong className="text-cobalt">Analogy:</strong> Think of it like building blocks — each small idea
        snaps onto the last one. Which block do you already feel sure about?
      </p>
      <p>
        <strong className="text-cobalt">Your turn:</strong> Tell me one thing you think is true about{" "}
        {subject}, and we will explore from there.
      </p>
    </div>
  );
}

export default function SocraticBuddy({
  open,
  onClose,
  topic = "",
  onAsk,
  initialMode = "aide",
}) {
  const [mode, setMode] = useState(initialMode); // "aide" | "tutor"
  const [log, setLog] = useState([
    {
      from: "buddy",
      text:
        mode === "aide"
          ? "Hi! I give hints, never answers. What are you stuck on?"
          : "Hi! Pick a topic and we will dig in together.",
    },
  ]);
  const [draft, setDraft] = useState("");

  if (!open) return null;

  function push(text, from = "student") {
    setLog((prev) => [...prev, { from, text }]);
  }

  function suggestHint() {
    const hint = HINT_STARTERS[log.length % HINT_STARTERS.length];
    push(hint, "buddy");
  }

  function send() {
    const text = draft.trim();
    if (!text) return;
    push(text, "student");
    setDraft("");
    if (onAsk) {
      onAsk({ mode, text, reply: (t) => push(t, "buddy") });
      return;
    }
    if (mode === "aide") suggestHint();
    else push("Great start! What part of that feels most interesting?", "buddy");
  }

  return (
    <div
      className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-ink/20 bg-white shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-label="Socratic buddy"
    >
      <div className="masthead px-5 py-4 flex items-center justify-between">
        <div>
          <h2 className="wordmark text-xl text-ink font-bold">Study Buddy</h2>
          <p className="text-xs text-ink/80 font-medium">Hints only — never gives away the answer</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close study buddy"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-ink hover:bg-black/10 text-2xl font-bold"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
        <div className="grid grid-cols-2 gap-2" role="tablist" aria-label="Buddy mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "aide"}
            className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg text-xs font-bold transition-all ${
              mode === "aide"
                ? "btn-dark !text-white shadow-xs"
                : "btn-outline text-ink"
            }`}
            onClick={() => setMode("aide")}
          >
            Teacher Aide (hints)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "tutor"}
            className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg text-xs font-bold transition-all ${
              mode === "tutor"
                ? "btn-dark !text-white shadow-xs"
                : "btn-outline text-ink"
            }`}
            onClick={() => setMode("tutor")}
          >
            Subject Tutor (deep-dive)
          </button>
        </div>

        {mode === "tutor" && <TutorDeepDive topic={topic} />}

        <ol className="flex flex-1 flex-col gap-3 overflow-y-auto" aria-live="polite" aria-label="Conversation">
          {log.map((m, i) => (
            <li
              key={i}
              className={`rounded-2xl p-3.5 text-sm leading-relaxed ${
                m.from === "buddy"
                  ? "self-start rounded-tl-sm border border-ink/20 bg-white text-ink max-w-[88%]"
                  : "self-end rounded-tr-sm bg-ink text-white max-w-[88%]"
              }`}
            >
              {m.text}
            </li>
          ))}
        </ol>
      </div>

      <div className="border-t border-ink/20 bg-slate-50/60 p-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="ot-buddy-draft">
            Ask for a hint
          </label>
          <input
            id="ot-buddy-draft"
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type what is tricky…"
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            className="flex-1 min-h-[44px] rounded-lg border border-ink/20 bg-white px-3 py-2 text-sm text-ink focus:border-cobalt focus:outline-none"
          />
          <button
            type="button"
            className="btn-brand flex min-h-[44px] cursor-pointer items-center justify-center px-4 text-sm font-semibold"
            onClick={send}
          >
            Send
          </button>
        </div>

        <div className="flex gap-2">
          {mode === "aide" && (
            <button
              type="button"
              className="flex flex-1 min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-cobalt px-3 py-1.5 text-xs font-bold !text-white shadow-xs hover:brightness-110 transition-colors"
              onClick={suggestHint}
            >
              Give me a hint
            </button>
          )}
          <button
            type="button"
            className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center px-4 py-1.5 text-xs font-bold transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
