import type { Metadata } from "next";
import localFont from "next/font/local";
import { HomepageIntro } from "@/components/homepage-intro";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/nunito-latin.woff2",
  variable: "--font-nunito",
  display: "swap",
  weight: "200 1000",
});
const caveat = localFont({
  src: "./fonts/caveat-latin.woff2",
  variable: "--font-caveat",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: { default: "IRAID | Integrated Rural Aid", template: "%s | IRAID" },
  description:
    "Integrated Rural Aid creates practical pathways to resilient communities.",
};

const homepageIntroStateScript = `
  (() => {
    const root = document.documentElement;
    const onHomepage = window.location.pathname === "/";
    root.dataset.iraidIntro = onHomepage ? "show" : "skip";
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <script
          id="iraid-intro-state"
          dangerouslySetInnerHTML={{ __html: homepageIntroStateScript }}
        />
      </head>
      <body>
        <HomepageIntro />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
