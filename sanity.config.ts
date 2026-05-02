import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "website_templates",
  title: "Website Templates CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo123",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
