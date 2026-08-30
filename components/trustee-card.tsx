import Image from "next/image";
import type { Trustee } from "@/data/site-content";

export function TrusteeCard({
  trustee,
  grid = false,
}: {
  trustee: Trustee;
  grid?: boolean;
}) {
  return (
    <article className={`trustee-card${grid ? " reveal" : ""}`}>
      <div className={`trustee-photo ${trustee.portraitClass}`}>
        <Image
          src={trustee.image}
          alt={trustee.name}
          fill
          sizes={
            grid
              ? "(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
              : "(max-width: 700px) 88vw, (max-width: 1000px) 46vw, 30vw"
          }
        />
      </div>
      {grid ? (
        <div className="trustee-meta">
          <div>
            <h3>{trustee.name}</h3>
            <p>{trustee.role}</p>
          </div>
          <span>↗</span>
        </div>
      ) : (
        <div className="trustee-copy">
          <h3>{trustee.name}</h3>
          <p>{trustee.role}</p>
        </div>
      )}
    </article>
  );
}
