import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuCategory",
  title: "メニューカテゴリ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "カテゴリ名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
