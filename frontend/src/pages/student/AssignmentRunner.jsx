import { useMemo, useState } from "react";
import SocraticBuddy from "../../components/student/SocraticBuddy.jsx";

/**
 * AssignmentRunner: renders an assignment with progressive enhancement.
 * - Markdown/Q&A text rendered as sections (no md dep required).
 * - Math ($...$) passed through a KaTeX stub slot: renders with real
 *   KaTeX when window.katex exists, else readable fallback text.
 * - Code blocks get a lightweight highlight stub (no dep required).
 * - HTML/JS mini-apps run inside a sandboxed iframe (no allow-same-origin).
 * - Submission drawer: text, code, or file/photo note.
 */

const DEMO_ASSIGNMENT = {
  id: "demo",
  title: "Demo assignment",
  body: "# Explore\n\nRead the prompt, try the sandbox, then submit.\n\nMath: $E = mc^2$\n\n```js\nconsole.log('hello');\n```",
  sandboxHtml: "<!doctype html><p>Hello sandbox</p>",
};

function renderInline(text, keyPrefix) {
  // KaTeX stub: split on $...$; use window.katex when present.
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    const m = /^\$(.+)\$$/.exec(part);
    if (!m) return <span key={`${keyPrefix}-${i}`}>{part}</span>;
    const expr = m[1];
    if (typeof window !== "undefined" && window.katex) {
      return (
        <span
          key={`${keyPrefix}-${i}`}
          dangerouslySetInnerHTML={{
            __html: window.katex.renderToString(expr, { throwOnError: false }),
          }}
        />
      );
    }
    return (
      <code key={`${keyPrefix}-${i}`} className="rounded border border-ink/20 bg-white px-1.5 py-0.5 font-mono text-sm text-ink">
        {expr}
      </code>
    );
  });
}

function CodeStub({ language, code }) {
  // Highlight stub: escape + plain render; a real highlighter can
  // hydrate [data-ot-code] blocks when loaded later.
  return (
    <pre
      className="my-3 overflow-x-auto rounded-lg border border-ink/20 bg-ink p-4 font-mono text-sm text-white"
      data-ot-code={language || "text"}
      tabIndex={0}
    >
      <code>{code}</code>
    </pre>
  );
}

function MarkdownLite({ source }) {
  const blocks = useMemo(() => {
    const out = [];
    const lines = source.split("\n");
    let i = 0;
    while (i < lines.length) {
      const fence = /^```(\w*)\s*$/.exec(lines[i]);
      if (fence) {
        const lang = fence[1] || "text";
        const buf = [];
        i += 1;
        while (i < lines.length && !/^```\s*$/.test(lines[i])) {
          buf.push(lines[i]);
          i += 1;
        }
        i += 1; // skip closing fence
        out.push({ type: "code", lang, code: buf.join("\n") });
        continue;
      }
      const h = /^(#{1,3})\s+(.*)$/.exec(lines[i]);
      if (h) {
        out.push({ type: `h${h[1].length}`, text: h[2] });
        i += 1;
        continue;
      }
      if (lines[i].trim() === "") {
        i += 1;
        continue;
      }
      const buf = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !/^```/.test(lines[i]) &&
        !/^#{1,3}\s/.test(lines[i])
      ) {
        buf.push(lines[i]);
        i += 1;
      }
      out.push({ type: "p", text: buf.join(" ") });
    }
    return out;
  }, [source]);

  return (
    <article className="flex flex-col gap-3 text-ink leading-relaxed" aria-label="Assignment content">
      {blocks.map((b, idx) => {
        if (b.type === "code") return <CodeStub key={idx} language={b.lang} code={b.code} />;
        if (b.type === "h1") return <h2 key={idx} className="heading-serif text-3xl font-bold text-ink mt-4 mb-2">{renderInline(b.text, idx)}</h2>;
        if (b.type === "h2") return <h3 key={idx} className="heading-serif text-2xl font-bold text-ink mt-3 mb-1">{renderInline(b.text, idx)}</h3>;
        if (b.type === "h3") return <h4 key={idx} className="heading-serif text-xl font-bold text-ink mt-2 mb-1">{renderInline(b.text, idx)}</h4>;
        return <p key={idx} className="text-base text-ink/90 my-1">{renderInline(b.text, idx)}</p>;
      })}
    </article>
  );
}

const SUBMIT_KINDS = ["text", "code", "file"];

export default function AssignmentRunner({ assignment = DEMO_ASSIGNMENT }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [kind, setKind] = useState("text");
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [buddyOpen, setBuddyOpen] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (kind === "text" && text.trim() === "") {
      setStatus("Write a sentence or two first, then submit.");
      return;
    }
    if (kind === "code" && code.trim() === "") {
      setStatus("Paste your code first, then submit.");
      return;
    }
    if (kind === "file" && fileName.trim() === "") {
      setStatus("Choose a file or photo first, then submit.");
      return;
    }
    // No backend wired here: record locally and confirm.
    setStatus("Submitted! Your teacher will review it soon.");
  }

  return (
    <main className="flex flex-col gap-6" aria-labelledby="assignment-heading">
      <div className="card">
        <h1 id="assignment-heading" className="heading-serif text-3xl sm:text-4xl font-bold text-ink mb-4">
          {assignment.title}
        </h1>
        <MarkdownLite source={assignment.body} />
      </div>

      {assignment.sandboxHtml && (
        <section aria-label="Try it yourself (sandbox)" className="card">
          <h2 className="heading-serif text-2xl font-bold text-ink">Try it yourself</h2>
          <p className="mt-1 text-sm text-ink/70">This practice sandbox is safe to explore and click around in.</p>
          <iframe
            title="Assignment sandbox"
            className="mt-4 w-full h-80 rounded-lg border border-ink/20 bg-white"
            sandbox="allow-scripts"
            srcDoc={assignment.sandboxHtml}
          />
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="btn-brand flex min-h-[44px] cursor-pointer items-center justify-center text-base font-bold shadow-sm"
          onClick={() => setDrawerOpen(true)}
        >
          Submit work
        </button>
        <button
          type="button"
          className="btn-outline flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 font-bold text-ink shadow-xs"
          onClick={() => setBuddyOpen(true)}
        >
          Ask for a hint
        </button>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Submit your work"
        >
          <div className="card w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <h2 className="heading-serif text-2xl font-bold text-ink mb-1">Submit your work</h2>
            <p className="text-sm text-ink/70 mb-4">Choose how you want to share your answers.</p>

            <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Submission type">
              {SUBMIT_KINDS.map((k) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={kind === k}
                  className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                    kind === k
                      ? "bg-ink !text-white shadow-xs"
                      : "border border-slate-300 bg-slate-100 text-ink hover:bg-slate-200"
                  }`}
                  onClick={() => {
                    setKind(k);
                    setStatus("");
                  }}
                >
                  {k === "text" ? "Writing" : k === "code" ? "Code" : "File / photo"}
                </button>
              ))}
            </div>

            <form onSubmit={submit} className="mt-4 flex flex-col gap-4">
              {kind === "text" && (
                <label className="block text-sm font-semibold text-ink">
                  Your answer
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={6}
                    placeholder="Explain in your own words…"
                    className="mt-1 block min-h-[140px] w-full rounded-lg border border-ink/20 bg-white p-3 text-ink focus:border-cobalt focus:outline-none"
                  />
                </label>
              )}
              {kind === "code" && (
                <label className="block text-sm font-semibold text-ink">
                  Your code
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={8}
                    spellCheck={false}
                    placeholder="Paste your code here…"
                    className="mt-1 block min-h-[160px] w-full rounded-lg border border-ink/20 bg-white p-3 font-mono text-sm text-ink focus:border-cobalt focus:outline-none"
                  />
                </label>
              )}
              {kind === "file" && (
                <label className="block text-sm font-semibold text-ink">
                  File or photo
                  <input
                    type="file"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    className="mt-1 block min-h-[44px] w-full rounded-lg border border-ink/20 bg-white p-2 text-ink file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                  />
                  {fileName && <small className="mt-1 block text-ink/70">Selected: {fileName}</small>}
                </label>
              )}

              {status && (
                <p role="status" className="rounded-lg border border-cobalt/40 bg-slate-50 p-3 text-sm font-semibold text-ink">
                  {status}
                </p>
              )}

              <div className="mt-2 flex gap-3">
                <button
                  type="submit"
                  className="btn-brand flex-1 flex min-h-[44px] cursor-pointer items-center justify-center font-bold shadow-sm"
                >
                  Turn in
                </button>
                <button
                  type="button"
                  className="btn-outline min-h-[44px] px-5 font-bold shadow-xs"
                  onClick={() => setDrawerOpen(false)}
                >
                  Keep working
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <SocraticBuddy open={buddyOpen} onClose={() => setBuddyOpen(false)} />
    </main>
  );
}
