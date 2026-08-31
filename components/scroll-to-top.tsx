"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function scrollToTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  // Keep route changes and reloads immediate even though in-page anchors can
  // still use the site's smooth scrolling behavior.
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousScrollBehavior;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
