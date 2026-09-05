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

export const videoWithCaption = defineType({
  name: "videoWithCaption",
  title: "Video with caption",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Video file",
      type: "file",
      options: { accept: "video/mp4,video/webm,video/quicktime" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "caption", title: "Video caption", type: "string" }),
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
      description: "Type an existing category exactly, or enter a new category. It will appear automatically on the website after publishing.",
      validation: (rule) => rule.required().min(2).max(40).custom((value) =>
        !value || value === value.trim()
          ? true
          : "Remove spaces from the beginning or end.",
      ),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Ongoing", value: "ongoing" }, { title: "Completed", value: "completed" }] },
      initialValue: "ongoing",
    }),
    defineField({
      name: "images",
      title: "Project images",
      type: "array",
      of: [{ type: "imageWithCaption" }],
      validation: (rule) => rule.custom((value, context) => {
        const document = context.document as { video?: unknown } | undefined;
        return value?.length || document?.video ? true : "Add at least one image or a video.";
      }),
    }),
    defineField({
      name: "video",
      title: "Optional project video",
      type: "videoWithCaption",
      validation: (rule) => rule.custom((value, context) => {
        const document = context.document as { images?: unknown[] } | undefined;
        return value || document?.images?.length ? true : "Add at least one image or a video.";
      }),
    }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "images.0.asset" } },
});
