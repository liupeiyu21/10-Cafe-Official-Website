// src/lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "fh72bd6f",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

/* Topページ用：最新4件 */
export async function getNews() {
  return await sanityClient.fetch(`
    *[_type == "news"] | order(date desc)[0...4]{
      _id,
      title,
      date,
      body,
      slug
    }
  `);
}

/* ===== お知らせ詳細ページ用 ===== */
export async function getNewsBySlug(slug: string) {
  return await sanityClient.fetch(
    `
    *[_type == "news" && slug.current == $slug][0]{
      title,
      date,
      body,
      slug
    }
    `,
    { slug }
  );
}

// 一覧ページ用：10件ずつ取得
export async function getNewsList(page: number) {
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  return await sanityClient.fetch(
    `
    *[_type == "news"] | order(date desc)[$start...$end]{
      _id,
      title,
      date,
      slug
    }
    `,
    { start, end }
  );
}

// お知らせの総件数を取得
export async function getNewsCount() {
  return await sanityClient.fetch(
    `count(*[_type == "news"])`
  );
}




/* ===== 今月のCraft Drink（追加するのはここ） ===== */
export async function getSeasonal() {
  return await sanityClient.fetch(`
    *[_type == "seasonal"] | order(_createdAt desc)[0]{
      _id,
      title,
      description,
      image
    }
  `);
}

