import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service pages",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "eyebrow", title: "Small label", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "hero", title: "Hero copy", type: "text" }),
    defineField({
      name: "bullets",
      title: "Key bullet points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text" }),
  ],
});
