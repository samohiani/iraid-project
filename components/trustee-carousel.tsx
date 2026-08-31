"use client";

import { useCallback, useEffect, useState } from "react";
import { TrusteeCard } from "@/components/trustee-card";
import { trustees } from "@/data/trustees";

const AUTOPLAY_DELAY = 6500;
const VISIBLE_TRUSTEE_COUNT = 3;

type Direction = "next" | "previous";

export function TrusteeCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [readyToSlide, setReadyToSlide] = useState(false);
  const [paused, setPaused] = useState(false);

  const move = useCallback(
    (amount: number) => {
      if (animating) return;

      const nextDirection: Direction = amount > 0 ? "next" : "previous";
      setDirection(nextDirection);
      setAnimating(true);
      setReadyToSlide(false);

      // Put the incoming card just outside the window before sliding it in.
      setOffset(nextDirection === "next" ? 0 : -1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setReadyToSlide(true);
          setOffset(nextDirection === "next" ? -1 : 0);
        });
      });
    },
    [animating],
  );

  const finishSlide = useCallback(() => {
    if (!animating || !readyToSlide) return;

    setCurrent((index) =>
      direction === "next"
        ? (index + 1) % trustees.length
        : (index - 1 + trustees.length) % trustees.length,
    );
    setAnimating(false);
    setReadyToSlide(false);
    setOffset(direction === "next" ? 0 : -1);
  }, [animating, direction, readyToSlide]);

  useEffect(() => {
    if (paused || animating) return;
    const timer = window.setInterval(() => move(1), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [animating, move, paused]);

  const firstCard =
    direction === "next"
      ? current
      : (current - 1 + trustees.length) % trustees.length;
  const cards = Array.from(
    { length: VISIBLE_TRUSTEE_COUNT + 1 },
    (_, index) => trustees[(firstCard + index) % trustees.length],
  );

  return (
    <div
      className="trustee-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="trustee-carousel-toolbar"
        aria-label="Trustee carousel controls"
      >
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
      <div className="trustee-window" aria-live="polite">
        <div
          className="trustee-track"
          data-sliding={readyToSlide}
          onTransitionEnd={finishSlide}
          style={{ "--trustee-offset": offset } as React.CSSProperties}
        >
          {cards.map((trustee, index) => (
            <TrusteeCard
              key={`${trustee.name}-${firstCard}-${index}`}
              trustee={trustee}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
