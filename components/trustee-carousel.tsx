"use client";

import { useCallback, useEffect, useState } from "react";
import { trustees } from "@/data/site-content";
import { TrusteeCard } from "@/components/trustee-card";

const AUTOPLAY_DELAY = 5200;

export function TrusteeCarousel() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [paused, setPaused] = useState(false);
  const visible = trustees.map(
    (_, offset) => trustees[(start + offset) % trustees.length],
  );

  const move = useCallback((amount: number) => {
    setDirection(amount > 0 ? "next" : "previous");
    setStart(
      (current) => (current + amount + trustees.length) % trustees.length,
    );
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [move, paused]);

  return (
    <div
      className="trustee-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="trustee-carousel-toolbar">
        <button
          className="carousel-arrow"
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous trustee"
        >
          ←
        </button>
        <button
          className="carousel-arrow"
          type="button"
          onClick={() => move(1)}
          aria-label="Next trustee"
        >
          →
        </button>
      </div>
      <div
        className={`trustee-window move-${direction}`}
        key={`${start}-${direction}`}
        aria-live="polite"
      >
        {visible.map((trustee) => (
          <TrusteeCard key={trustee.name} trustee={trustee} />
        ))}
      </div>
    </div>
  );
}
