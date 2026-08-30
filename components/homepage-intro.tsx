"use client";

import { useEffect, useState } from "react";

export function HomepageIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;

    if (root.dataset.iraidIntro !== "show") {
      setVisible(false);
      return;
    }

    body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
      root.dataset.iraidIntro = "leaving";
    }, 950);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      root.dataset.iraidIntro = "skip";
      body.style.overflow = previousBodyOverflow;
    }, 1500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      body.style.overflow = previousBodyOverflow;
      root.dataset.iraidIntro = "skip";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`homepage-intro${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Opening Integrated Rural Aid Foundation"
    >
      <div className="homepage-intro__content">
        <span className="homepage-intro__welcome" aria-hidden="true">
          Welcome to
        </span>
        <span className="homepage-intro__name" aria-hidden="true">
          Integrated Rural Aid
        </span>
        <span className="homepage-intro__foundation" aria-hidden="true">
          Foundation
        </span>
        <span className="homepage-intro__line" aria-hidden="true" />
      </div>
    </div>
  );
}
