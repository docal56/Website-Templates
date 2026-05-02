import { defineField, defineType } from "sanity";

export const bookingOption = defineType({
  name: "bookingOption",
  title: "Booking options",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "idealFor", title: "Ideal for", type: "string" }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
  ],
});
