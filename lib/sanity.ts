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
      body
    }
  `);
}


/* ===== 季節限定（追加するのはここ） ===== */
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

