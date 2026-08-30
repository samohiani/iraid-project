"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { testimonials } from "@/data/site-content";

export function TestimonialRail() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const item = testimonials[active];

  const animateContent = (direction: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    requestAnimationFrame(() => {
      animationRef.current?.cancel();
      animationRef.current =
        contentRef.current?.animate(
          [
            { transform: `translateX(${direction * 22}px)` },
            { transform: "translateX(0)" },
          ],
          {
            duration: 480,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          },
        ) ?? null;
    });
  };

  const showTestimonial = (next: number, direction: number) => {
    setActive(next);
    animateContent(direction);
  };

  const move = (amount: number) =>
    showTestimonial(
      (active + amount + testimonials.length) % testimonials.length,
      amount,
    );

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-portraits" aria-label="Testimonial speakers">
        {testimonials.map((person, index) => (
          <button
            type="button"
            key={person.name}
            className={index === active ? "is-active" : ""}
            onClick={() =>
              showTestimonial(index, index >= active ? 1 : -1)
            }
            aria-label={`Show testimonial from ${person.name}`}
          >
            <Image src={person.image} alt="" fill sizes="120px" />
          </button>
        ))}
      </div>
      <div className="testimonial-content">
        <button
          type="button"
          className="testimonial-arrow"
          onClick={() => move(-1)}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <article ref={contentRef}>
          <p>“{item.quote}”</p>
          <div className="stars" aria-label="Five stars">
            ★★★★★
          </div>
          <h3>{item.name}</h3>
          <span>Location: {item.location}</span>
        </article>
        <button
          type="button"
          className="testimonial-arrow"
          onClick={() => move(1)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
}
