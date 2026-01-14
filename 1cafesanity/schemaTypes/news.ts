// schemaTypes/news.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'news',
  title: 'お知らせ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    //  追加：slug
    defineField({
      name: 'slug',
      title: 'スラッグ（URL）',
      type: 'slug',
      options: {
        source: 'title', // title から自動生成
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: '日付',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: '本文',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
