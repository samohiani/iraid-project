import Image from "next/image";
import { programmeDetails } from "@/data/site-content";

export type ProgrammeDetail = (typeof programmeDetails)[number];

export function ProgrammeDetailSection({
  programme,
  index,
  id,
}: {
  programme: ProgrammeDetail;
  index: number;
  id?: string;
}) {
  return (
    <section
      className={`programme-detail${index % 2 ? " programme-detail--alternate" : ""}`}
      id={id}
    >
      <div className="programme-detail-copy">
        <p className="section-kicker">{programme.eyebrow}</p>
        <h2>{programme.title}</h2>
        {programme.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {programme.callout ? (
          <aside className="programme-callout">
            <p className="programme-callout-label">{programme.callout.title}</p>
            <p>{programme.callout.text}</p>
          </aside>
        ) : null}
        {programme.processSteps ? (
          <aside className="programme-process-note">
            <h3>{programme.processSteps.title}</h3>
            <ol>
              {programme.processSteps.items.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </aside>
        ) : null}
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
  );
}
