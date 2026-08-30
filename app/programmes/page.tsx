import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProgrammeDetailSection } from "@/components/programme-detail-section";
import { programmeDetails } from "@/data/site-content";

export const metadata: Metadata = { title: "Programmes" };

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Programs"
        title="What We Do"
        body="IRAID runs programs focused on long-term, sustainable change: community development projects, women and youth economic programs, health outreach, agricultural training and education for change."
      />

      <div className="programme-details">
        {programmeDetails.map((programme, index) => (
          <ProgrammeDetailSection
            key={programme.title}
            programme={programme}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
