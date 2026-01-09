// src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'fh72bd6f', // ←あなたの Project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getNews() {
  return await sanityClient.fetch(`
    *[_type == "news"] | order(date desc){
      _id,
      title,
      date,
      body
    }
  `)
}

