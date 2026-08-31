import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TrusteeCard } from "@/components/trustee-card";
import { trustees } from "@/data/trustees";

export const metadata: Metadata = { title: "Our team" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet The Trustees"
        body="Meet the people responsible for guiding Integrated Rural Aid Foundation and its community development work."
      />
      <section className="section-space">
        <div className="trustee-grid">
          {trustees.map((trustee, index) => (
            <TrusteeCard
              key={trustee.name}
              trustee={trustee}
              grid
              priority={index === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
