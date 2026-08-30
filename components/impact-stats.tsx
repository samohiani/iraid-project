"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ImpactStat = readonly [displayValue: string, label: string];

function parseDisplayValue(displayValue: string) {
  const match = displayValue.match(/^([\d,.]+)(k)?(\+)?$/i);

  if (!match) return null;

  const hasK = Boolean(match[2]);
  const hasPlus = Boolean(match[3]);
  const numericValue = Number(match[1].replace(/,/g, ""));

  if (!Number.isFinite(numericValue)) return null;

  return {
    target: hasK ? numericValue * 1000 : numericValue,
    hasK,
    hasPlus,
  };
}

function formatCount(value: number, hasK: boolean, hasPlus: boolean) {
  const formatted =
    hasK && value >= 1000
      ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`
      : Math.round(value).toLocaleString("en-US");

  return `${formatted}${hasPlus ? "+" : ""}`;
}

function AnimatedStat({
  displayValue,
  label,
}: {
  displayValue: string;
  label: string;
}) {
  const statRef = useRef<HTMLDivElement>(null);
  const parsedValue = useMemo(() => parseDisplayValue(displayValue), [displayValue]);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!parsedValue || hasStarted) return;

    const element = statRef.current;
    if (!element) return;

    const startCounting = () => setHasStarted(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setCount(parsedValue.target);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        startCounting();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted, parsedValue]);

  useEffect(() => {
    if (!parsedValue || !hasStarted) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const duration = 1100;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(parsedValue.target * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, parsedValue]);

  if (!parsedValue) {
    return (
      <div ref={statRef}>
        <strong>{displayValue}</strong>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div ref={statRef}>
      <strong aria-label={`${displayValue} ${label}`}>
        {hasStarted ? formatCount(count, parsedValue.hasK, parsedValue.hasPlus) : "0"}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function ImpactStats({ stats }: { stats: readonly ImpactStat[] }) {
  return (
    <>
      {stats.map(([displayValue, label]) => (
        <AnimatedStat key={label} displayValue={displayValue} label={label} />
      ))}
    </>
  );
}
