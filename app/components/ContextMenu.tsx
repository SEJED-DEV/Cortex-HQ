"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface Item {
  label: string;
  href: string;
}

const items: Item[] = [
  { label: "Home", href: "/" },
  { label: "Bots", href: "#bots" },
  { label: "Services", href: "#services" },
  { label: "Support", href: "/support" },
  { label: "GitHub", href: "https://github.com/SEJED-DEV" },
];

export default function ContextMenu() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const onContext = useCallback((e: MouseEvent) => {
    e.preventDefault();

    const menuWidth = 200;
    const menuHeight = items.length * 44 + 16;

    let x = e.clientX;
    let y = e.clientY;

    if (x + menuWidth > window.innerWidth) {
      x = window.innerWidth - menuWidth - 12;
    }
    if (y + menuHeight > window.innerHeight) {
      y = window.innerHeight - menuHeight - 12;
    }

    setPos({ x, y });
    setOpen(true);
  }, []);

  const onClick = useCallback((e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onContext, onClick, onKeyDown]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      style={{ left: pos.x, top: pos.y }}
      className="fixed z-[9999] w-[200px] bg-white border border-cortex-border rounded-xl py-2 shadow-2xl shadow-black/10"
    >
      <div className="px-3 pb-2 mb-1 border-b border-cortex-border">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-cortex-muted/50">
          Navigate
        </span>
      </div>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-2.5 mx-1 rounded-lg text-sm text-cortex-text hover:bg-cortex-border/50 transition-colors"
        >
          {item.label === "GitHub" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          )}
          {item.label === "Support" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          {(item.label === "Bots" || item.label === "Services") && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          )}
          {item.label === "Home" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          )}
          {item.label}
        </a>
      ))}
    </div>
  );
}
