// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";


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


// menuCategory 取得
export async function getMenuItems() {
  return await sanityClient.fetch(`
    *[_type == "menuItem"]{
      _id,
      title,
      price,
      image,
      isNew,
      tags,
      category->{
        title,
        slug
      }
    }
  `)
}



const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

/* ===== メニュー用 ===== */
export async function getMenuByCategory(slug: string) {
  return await sanityClient.fetch(
    `
    *[_type == "menuCategory" && slug.current == $slug][0]{
      title,
      slug,
      "items": *[_type == "menuItem" && category._ref == ^._id] | order(isNew desc){
        _id,
        title,
        price,
        image,
        isNew,
        tags
      }
    }
    `,
    { slug }
  );
}

// Swiper用バナー取得
export async function getSwiperBanners() {
  return await sanityClient.fetch(`
    *[_type == "swiperBanner" && isActive == true]
    | order(order asc){
      _id,
      title,
      image,
      link
    }
  `);
}

// Top用イベント取得（最大3件）
export async function getTopEvents() {
  return await sanityClient.fetch(`
    *[_type == "event" && isPublished == true]
    | order(eventDate desc)[0...3] {
      _id,
      title,
      slug,
      image,
      summary,
      eventDate
    }
  `);
}



// 詳細用イベント取得
export async function getEventBySlug(slug: string) {
  return await sanityClient.fetch(
    `
    *[_type == "event" && slug.current == $slug][0] {
      title,
      image,
      body,
      eventDate
    }
    `,
    { slug }
  );
}


// イベント一覧取得 一覧用（全件）
export async function getEvents(page: number, limit = 10) {
  const start = (page - 1) * limit;
  const end = start + limit;

  return await sanityClient.fetch(
    `
    {
      "events": *[_type == "event"] | order(date desc)[$start...$end]{
        _id,
        title,
        slug,
        date,
        summary
      },
      "total": count(*[_type == "event"])
    }
    `,
    { start, end }
  );
}


