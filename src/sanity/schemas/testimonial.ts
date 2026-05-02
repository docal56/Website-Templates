import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
  ],
});
