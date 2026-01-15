import { defineType, defineField } from "sanity";

export default defineType({
  name: "swiperBanner", // ← ここが一番大事
  title: "スワイパーバナー",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル（管理用）",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "画像",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "リンク先（任意）",
      type: "url",
    }),

    defineField({
      name: "order",
      title: "表示順",
      type: "number",
    }),

    defineField({
      name: "isActive",
      title: "表示する",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
