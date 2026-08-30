import type { Metadata } from "next";
import Image from "next/image";
import { programmeDetails } from "@/data/site-content";

export const metadata: Metadata = { title: "Programmes" };

export default function ProgrammesPage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Our Programs</p>
        <h1>What We Do</h1>
        <p>
          IRAID runs programs focused on long-term, sustainable change:
          community development projects, women and youth economic programs,
          health outreach, agricultural training and education for change.
        </p>
      </header>

      <div className="programme-details">
        {programmeDetails.map((programme, index) => (
          <section
            className={`programme-detail ${index % 2 ? "programme-detail--alternate" : ""}`}
            key={programme.title}
          >
            <div className="programme-detail-copy">
              <p className="section-kicker">{programme.eyebrow}</p>
              <h2>{programme.title}</h2>
              {programme.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="programme-photo-grid">
              {programme.images.map(([src, caption]) => (
                <figure key={src}>
                  <div>
                    <Image
                      src={src}
                      alt={caption}
                      fill
                      sizes="(max-width: 720px) 92vw, (max-width: 1100px) 43vw, 27vw"
                    />
                  </div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
