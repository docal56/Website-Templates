import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business name", type: "string" }),
    defineField({ name: "location", title: "Main location", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({
      name: "areas",
      title: "Areas served",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "seoTitle", title: "Default SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "Default SEO description", type: "text" }),
  ],
});
