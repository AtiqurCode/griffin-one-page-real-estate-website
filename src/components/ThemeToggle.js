"use client";

// Presentational toggle only — the icon shown is driven entirely by CSS
// (`:root[data-theme]` / `prefers-color-scheme`), so there is no React state
// to get out of sync and nothing to hydrate.
export default function ThemeToggle({ className = "" }) {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("gb-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`gb-theme-toggle ${className}`}
      aria-label="Switch between light and dark theme"
      title="Light / dark theme"
    >
      <svg className="gb-icon gb-icon--moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z"
          fill="currentColor"
        />
      </svg>
      <svg className="gb-icon gb-icon--sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <path
          d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
