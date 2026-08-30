"use client";

import { useEffect, useState, type MouseEvent } from "react";

export function VideoModal({ src = "/IRAID/video.mp4" }: { src?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsOpen(false);
  };

  return (
    <>
      <button
        className="round-play"
        type="button"
        aria-label="Play IRAID introduction video"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        ▶
      </button>

      {isOpen ? (
        <div
          className="video-modal-backdrop"
          role="presentation"
          onMouseDown={closeFromBackdrop}
        >
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="IRAID introduction video"
          >
            <button
              className="video-modal-close"
              type="button"
              aria-label="Close video"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <video controls autoPlay playsInline src={src} />
          </div>
        </div>
      ) : null}
    </>
  );
}
