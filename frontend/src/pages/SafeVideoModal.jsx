const ALLOW = [
  /(^|\.)youtube-nocookie\.com$/,
  /(^|\.)youtube\.com$/,
  /(^|\.)youtu\.be$/,
  /(^|\.)khanacademy\.org$/,
  /(^|\.)pbs\.org$/,
  /(^|\.)pbskids\.org$/,
];

function toEmbedUrl(raw) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  if (!ALLOW.some((re) => re.test(u.hostname))) return null;
  if (u.hostname.includes("youtu")) {
    const id = u.hostname.includes("youtu.be")
      ? u.pathname.slice(1)
      : u.searchParams.get("v") || u.pathname.split("/").pop();
    if (!id) return null;
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=0`;
  }
  return u.toString();
}

export default function SafeVideoModal({ url, title, onClose }) {
  if (!url) return null;
  const embed = toEmbedUrl(url);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video player"}
      onClick={onClose}
    >
      <div
        className="card relative w-full max-w-2xl bg-white shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/20 pb-3 mb-4">
          <h2 className="heading-serif text-2xl font-bold text-ink">
            {title || "Safe Video Player"}
          </h2>
          <button
            onClick={onClose}
            autoFocus
            className="btn-outline text-xs px-3 py-1.5"
          >
            Close
          </button>
        </div>
        {embed ? (
          <div className="aspect-video w-full overflow-hidden rounded-xs border border-ink/20 bg-black">
            <iframe
              title={title || "Video"}
              src={embed}
              className="h-full w-full border-0"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="rounded-lg border border-brand bg-brand/10 p-4 text-sm font-medium text-ink">
            Blocked: only YouTube (privacy-enhanced), Khan Academy, and PBS embeds are allowed.
          </p>
        )}
      </div>
    </div>
  );
}

export { toEmbedUrl };
