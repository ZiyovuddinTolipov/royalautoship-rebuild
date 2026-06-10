"use client";

import { useEffect, useRef, useState } from "react";

type ZipResult = { zip: string; city: string; state: string };

interface ZipSearchProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  onSelect: (result: ZipResult) => void;
  onClear: () => void;
  autoFocus?: boolean;
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export function ZipSearch({
  label,
  placeholder = "City, state or ZIP",
  initialValue = "",
  onSelect,
  onClear,
  autoFocus,
}: ZipSearchProps) {
  const [query, setQuery] = useState(initialValue);
  const [display, setDisplay] = useState(initialValue); // selected display string
  const [results, setResults] = useState<ZipResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (display) {
      setResults([]);
      setLoading(false);
      setOpen(false);
      return;
    }
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      setOpen(false);
      return;
    }
    setLoading(true);
    setOpen(true);
    setIdx(-1);

    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/zip/${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(Array.isArray(data) ? data : []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 280);

    return () => clearTimeout(t);
  }, [query, display]);

  const select = (r: ZipResult) => {
    const d = `${r.zip} — ${r.city}, ${r.state}`;
    setDisplay(d);
    setQuery(d);
    setResults([]);
    setOpen(false);
    setIdx(-1);
    onSelect(r);
  };

  const clear = () => {
    setQuery("");
    setDisplay("");
    setResults([]);
    setOpen(false);
    setIdx(-1);
    onClear();
    inputRef.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (idx >= 0 && results[idx]) select(results[idx]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setIdx(-1);
    }
  };

  return (
    <label className="relative block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <div className="relative">
        <input
          ref={inputRef}
          autoFocus={autoFocus}
          className={inputCls}
          placeholder={placeholder}
          value={display || query}
          autoComplete="off"
          onChange={(e) => {
            setDisplay("");
            setQuery(e.target.value);
          }}
          onKeyDown={onKey}
          onFocus={() => query && !display && setOpen(true)}
          aria-autocomplete="list"
          aria-expanded={open}
          aria-haspopup="listbox"
        />
        {(display || query) && (
          <button
            type="button"
            onClick={clear}
            className="absolute inset-y-0 right-3 flex items-center text-muted hover:text-ink"
            aria-label="Clear"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-1 max-h-60 overflow-y-auto rounded-xl border border-line bg-paper shadow-xl"
        >
          {loading ? (
            <li className="flex items-center justify-center gap-2 py-4 text-sm text-muted">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Searching…
            </li>
          ) : results.length === 0 ? (
            <li className="py-4 text-center text-sm text-muted">No results found</li>
          ) : (
            results.map((r, i) => (
              <li
                key={`${r.zip}-${r.city}`}
                role="option"
                aria-selected={i === idx}
                className={`flex cursor-pointer items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  i === idx ? "bg-gold/10 text-ink" : "text-muted hover:bg-paper-2/60 hover:text-ink"
                }`}
                onMouseDown={() => select(r)}
                onMouseEnter={() => setIdx(i)}
              >
                <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 5 6 14 6 14s6-9 6-14c0-3.314-2.686-6-6-6z" />
                  <circle cx="12" cy="8" r="2" />
                </svg>
                <span>
                  <strong className="font-semibold text-ink">{r.zip}</strong>
                  <span className="ml-2 text-muted">{r.city}, {r.state}</span>
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </label>
  );
}
