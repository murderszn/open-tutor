import { useEffect, useState } from "react";

export default function AssignmentViewer({ assignment }) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!assignment) return;
    setError("");
    fetch(`${import.meta.env.BASE_URL || "/"}${assignment.path}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(setBody)
      .catch(() => setError("Spec file not served in this preview; open " + assignment.path + " in the repo."));
  }, [assignment]);

  if (!assignment) {
    return (
      <div className="card text-center py-8">
        <p className="text-sm font-medium text-ink/60">
          Select an assignment above to preview its rubric and deliverables.
        </p>
      </div>
    );
  }

  return (
    <article className="card">
      <h2 className="heading-serif text-3xl font-bold text-ink">{assignment.title}</h2>
      <p className="mt-1 font-mono text-xs text-ink/60">{assignment.path}</p>
      {assignment.summary && <p className="mt-3 text-sm text-ink/80">{assignment.summary}</p>}
      <section className="mt-6">
        <h3 className="heading-serif text-2xl font-bold text-ink mb-2">Deliverables &amp; rubric</h3>
        {error ? (
          <p className="rounded-lg border border-brand bg-brand/10 p-3 text-sm font-medium text-ink">
            {error}
          </p>
        ) : (
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-ink/20 bg-white p-4 font-mono text-xs text-ink">
            {body.slice(0, 4000)}
          </pre>
        )}
      </section>
      <button
        onClick={() => window.print()}
        className="btn-dark mt-6 font-bold shadow-sm px-6 py-2.5"
      >
        Print worksheet
      </button>
    </article>
  );
}
