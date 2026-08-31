import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollToTop } from "@/components/scroll-to-top";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <SiteHeader />
      <main className="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
