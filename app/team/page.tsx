import type { Metadata } from "next";
import { trustees } from "@/data/site-content";
import { TrusteeCard } from "@/components/trustee-card";

export const metadata: Metadata = { title: "Our team" };

export default function TeamPage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Our team</p>
        <h1>Meet The Trustees</h1>
        <p>
          Meet the people responsible for guiding Integrated Rural Aid
          Foundation and its community development work.
        </p>
      </header>
      <section className="section-space">
        <div className="trustee-grid">
          {trustees.map((trustee) => (
            <TrusteeCard key={trustee.name} trustee={trustee} grid />
          ))}
        </div>
      </section>
    </>
  );
}
