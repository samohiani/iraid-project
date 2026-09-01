"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { ScrollToTop } from "@/components/scroll-to-top";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Sanity Studio owns its own application chrome and router.
  if (pathname.startsWith("/studio") || pathname === "/studio-login") {
    return children;
  }

  return (
    <div className="app-shell">
      <ScrollToTop />
      <SiteHeader />
      <main className="main-content">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
