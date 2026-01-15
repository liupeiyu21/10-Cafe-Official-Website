// schemaTypes/event.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "イベント",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "開催日",
      type: "date",
    }),
    defineField({
      name: "summary",
      title: "概要",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
