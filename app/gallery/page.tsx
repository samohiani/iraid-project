import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="People, places and progress"
        body="A closer look at the people, places and practical work behind IRAID’s community-led programmes."
      />
      <section className="inner-section gallery-section">
        <div className="gallery-intro">
          <div>
            <p className="section-kicker">See the work</p>
            <h2>Small moments. Lasting change.</h2>
          </div>
          <p>
            From community conversations and skills training to better access
            to water, health and livelihoods, these moments show what progress
            looks like on the ground.
          </p>
        </div>
        <GalleryGrid />
      </section>
    </>
  );
}
