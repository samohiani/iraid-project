import type { Metadata } from "next";
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { galleryQuery, hasSanityConfig, sanityClient } from "@/lib/sanity";

export const metadata: Metadata = { title: "Gallery" };

// Pick up newly published Sanity projects without requiring a code deployment.
export const revalidate = 60;

export default async function GalleryPage() {
  const projects = hasSanityConfig && sanityClient
    ? await sanityClient.fetch<Array<{ images?: Array<{ src?: string; alt?: string; caption?: string }>; category: string; status?: GalleryItem["status"] }>>(galleryQuery)
    : [];
  const managedItems = projects.flatMap((project) =>
    (project.images ?? [])
      .filter((image): image is { src: string; alt?: string; caption?: string } => Boolean(image.src))
      .map((image) => ({ category: project.category, src: image.src, title: image.caption || image.alt || project.category, status: project.status === "ongoing" ? ("ongoing" as const) : ("completed" as const) })),
  );

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
        <GalleryGrid items={managedItems} />
      </section>
    </>
  );
}
