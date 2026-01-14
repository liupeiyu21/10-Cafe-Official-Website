
// schemaTypes/menuItem.ts
export default {
  name: "menuItem",
  title: "メニュー商品",
  type: "document",
  fields: [
    { name: "title", title: "商品名", type: "string" },
    { name: "price", title: "価格", type: "number" },

    {
      name: "image",
      title: "商品画像",
      type: "image",
      options: { hotspot: true }
    },

    {
      name: "category",
      title: "カテゴリ",
      type: "reference",
      to: [{ type: "menuCategory" }]
    },

    {
      name: "isNew",
      title: "NEW商品",
      type: "boolean"
    },

    {
      name: "tags",
      title: "タグ（ICE / HOTなど）",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
}
