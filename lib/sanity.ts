import { createClient } from "next-sanity";

export const hasSanityConfig = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      apiVersion: "2026-08-31",
      useCdn: true,
    })
  : null;

export const galleryQuery = `*[_type == "project" && published == true]
  | order(orderRank asc, publishedAt desc) {
    _id,
    title,
    category,
    status,
    "images": images[] {
      "src": asset->url,
      "alt": coalesce(altText, caption, ^.title),
      "caption": coalesce(caption, ^.title)
    }
  }`;
