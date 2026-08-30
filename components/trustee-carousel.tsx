"use client";

import { useCallback, useEffect, useState } from "react";
import { TrusteeCard } from "@/components/trustee-card";
import { trustees } from "@/data/trustees";

const AUTOPLAY_DELAY = 5200;
const VISIBLE_TRUSTEE_COUNT = 3;

export function TrusteeCarousel() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [paused, setPaused] = useState(false);
  const visible = Array.from(
    { length: VISIBLE_TRUSTEE_COUNT },
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
