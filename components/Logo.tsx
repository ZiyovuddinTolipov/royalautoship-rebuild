export function Crown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 20h26M4 17 2 6l7 5 7-9 7 9 7-5-2 11H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Crown className="w-7 text-gold" />
      <span
        className={`font-display text-lg leading-none tracking-wide ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        Royal{" "}
        <span className="font-light italic text-gold">Auto Ship</span>
      </span>
    </span>
  );
}
