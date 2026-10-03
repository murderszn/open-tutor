import { useEffect, useRef, useState } from "react";

/**
 * FocusToolBelt: Pomodoro timer (per OpenTutor design: Focus 25,
 * Short Break 5, Long Break 15) + scratchpad + calculator +
 * mind-map viewer. Kid-safe: big buttons, clear status notes.
 */

const MODES = {
  focus: { label: "Focus", minutes: 25 },
  short: { label: "Short Break", minutes: 5 },
  long: { label: "Long Break", minutes: 15 },
};

function formatClock(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function Pomodoro() {
  const [mode, setMode] = useState("focus");
  const [remaining, setRemaining] = useState(MODES.focus.minutes * 60);
  const [running, setRunning] = useState(false);
  const [note, setNote] = useState("Pick a mode, then press Start.");
  const timerRef = useRef(null);

  function selectMode(next) {
    setMode(next);
    setRemaining(MODES[next].minutes * 60);
    setRunning(false);
    setNote(`${MODES[next].label} ready: ${MODES[next].minutes} minutes.`);
  }

  function resetSession() {
    setRemaining(MODES[mode].minutes * 60);
    setRunning(false);
    setNote(`${MODES[mode].label} reset.`);
  }

  function stopAndClear() {
    setRunning(false);
    setRemaining(MODES[mode].minutes * 60);
    setNote("Timer stopped. Take a breath!");
  }

  useEffect(() => {
    if (!running) return undefined;
    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          setRunning(false);
          setNote("Time! Nice focus session.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [running]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <section aria-label="Pomodoro focus timer" className="card">
      <h3 className="heading-serif text-2xl font-bold text-ink mb-3">Pomodoro Timer</h3>
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(MODES).map(([key, m]) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg text-sm font-bold transition-colors ${
              mode === key
                ? "bg-ink !text-white shadow-xs"
                : "border border-slate-300 bg-slate-100 text-ink hover:bg-slate-200"
            }`}
            onClick={() => selectMode(key)}
          >
            {m.label} ({m.minutes})
          </button>
        ))}
      </div>
      <p
        className="my-6 text-center font-display text-6xl font-bold tracking-tight text-ink"
        role="timer"
        aria-live="off"
        aria-label={`${MODES[mode].label}, ${formatClock(remaining)} left`}
      >
        {formatClock(remaining)}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-brand flex flex-1 min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
          aria-label={running ? "Pause timer" : "Start timer"}
          onClick={() => {
            setRunning((r) => !r);
            setNote(running ? "Paused. You can resume anytime." : "Going! Stay with it.");
          }}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold text-ink shadow-xs"
          onClick={resetSession}
        >
          Reset Session
        </button>
        <button
          type="button"
          className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold text-ink shadow-xs"
          onClick={stopAndClear}
        >
          Stop &amp; Clear
        </button>
      </div>
      <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-ink/70" role="status">
        {note}
      </p>
    </section>
  );
}

export function Scratchpad() {
  const [text, setText] = useState("");
  return (
    <section aria-label="Scratchpad" className="card">
      <h3 className="heading-serif text-2xl font-bold text-ink mb-1">Scratchpad</h3>
      <p className="text-xs text-ink/60 mb-3">Jot down quick thoughts (stays on this device).</p>
      <label className="sr-only" htmlFor="ot-scratch">
        Jot down ideas
      </label>
      <textarea
        id="ot-scratch"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Jot down ideas here… (stays on this device)"
        className="w-full rounded-lg border border-ink/20 bg-white p-3 text-ink focus:border-cobalt focus:outline-none min-h-[120px]"
      />
      <div className="mt-3 flex">
        <button
          type="button"
          className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold text-ink shadow-xs"
          onClick={() => setText("")}
        >
          Clear page
        </button>
      </div>
    </section>
  );
}

export function Calculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function evaluate() {
    // Kid-safe: allow only digits, whitespace, and basic operators.
    if (!/^[0-9+\-*/().\s%]+$/.test(expr) || expr.trim() === "") {
      setError("Use only numbers and + − × ÷ symbols.");
      setResult("");
      return;
    }
    try {
      // eslint-disable-next-line no-new-func
      const value = Function(`"use strict"; return (${expr});`)();
      if (typeof value !== "number" || !Number.isFinite(value)) throw new Error("bad");
      setResult(String(Math.round(value * 1e10) / 1e10));
      setError("");
    } catch {
      setError("Hmm, that did not compute. Check the numbers.");
      setResult("");
    }
  }

  return (
    <section aria-label="Calculator" className="card">
      <h3 className="heading-serif text-2xl font-bold text-ink mb-3">Calculator</h3>
      <label className="block text-sm font-semibold text-ink">
        Type a sum
        <input
          type="text"
          inputMode="decimal"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder="e.g. 12 * 8"
          aria-describedby="ot-calc-help"
          className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white px-3 py-2 font-mono text-lg text-ink focus:border-cobalt focus:outline-none"
        />
      </label>
      <p id="ot-calc-help" className="mt-1 text-xs text-ink/60">
        Numbers and + - * / ( ) only.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="btn-brand flex flex-1 min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
          onClick={evaluate}
        >
          Equals
        </button>
        <button
          type="button"
          className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold text-ink shadow-xs"
          onClick={() => {
            setExpr("");
            setResult("");
            setError("");
          }}
        >
          Clear
        </button>
      </div>
      {result && (
        <p className="mt-3 rounded-lg border border-cobalt bg-white p-3 font-mono font-bold text-ink" role="status">
          Answer: <span className="text-cobalt">{result}</span>
        </p>
      )}
      {error && (
        <p className="mt-3 rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

export function MindMapViewer({ src = "/teachers/sites/mind-map/index.html" }) {
  const [open, setOpen] = useState(false);
  return (
    <section aria-label="Mind map viewer" className="card">
      <h3 className="heading-serif text-2xl font-bold text-ink mb-1">Mind Map</h3>
      <p className="text-sm text-ink/70 mb-3">See how ideas connect before you write.</p>
      <button
        type="button"
        className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold text-ink shadow-xs"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Hide map" : "Show map"}
      </button>
      {open && (
        <iframe
          title="Mind map"
          className="mt-3 w-full h-80 rounded-lg border border-ink/20 bg-white"
          sandbox="allow-scripts"
          src={src}
        />
      )}
    </section>
  );
}

export default function FocusToolBelt(props) {
  return (
    <aside className="flex flex-col gap-6" aria-label="Focus tool belt">
      <div className="card">
        <h2 className="heading-serif text-3xl font-bold text-ink">Focus Tools</h2>
        <p className="mt-1 text-sm text-ink/70">
          Timer, scratchpad, math helper, and concept map.
        </p>
      </div>
      <Pomodoro />
      <Scratchpad />
      <Calculator />
      <MindMapViewer src={props.mindMapSrc} />
    </aside>
  );
}
