import { defineField, defineType } from "sanity";

export const imageWithCaption = defineType({
  name: "imageWithCaption",
  title: "Image with caption",
  type: "object",
  fields: [
    defineField({ name: "asset", title: "Image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: "caption", title: "Label / caption", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "altText", title: "Accessibility description", type: "string" }),
  ],
  preview: { select: { title: "caption", media: "asset" } },
});

export const project = defineType({
  name: "project",
  title: "Project / Work",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Community", "Empowerment", "Agriculture", "Skills", "Education", "Health", "Water", "Roads"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Ongoing", value: "ongoing" }, { title: "Completed", value: "completed" }] },
      initialValue: "ongoing",
    }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "publishedAt", title: "Date", type: "date" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "orderRank", title: "Display order", type: "number", initialValue: 0 }),
    defineField({ name: "published", title: "Show on website", type: "boolean", initialValue: false }),
    defineField({
      name: "images",
      title: "Project images",
      type: "array",
      of: [{ type: "imageWithCaption" }],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "images.0.asset" } },
});
