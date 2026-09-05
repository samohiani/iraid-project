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
      // Server-side gallery requests use the API endpoint for a more reliable
      // local/development connection. Image and video assets still come from
      // Sanity's CDN through their returned URLs.
      useCdn: false,
    })
  : null;

export const galleryQuery = `*[_type == "project" && !(_id in path("drafts.**"))]
  | order(_createdAt desc) {
    _id,
    title,
    category,
    status,
    "images": images[] {
      "src": asset->url,
      "alt": coalesce(altText, caption, ^.title),
      "caption": coalesce(caption, ^.title)
    },
    "video": video {
      "src": asset->url,
      "caption": coalesce(caption, ^.title)
    }
  }`;
