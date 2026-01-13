// src/lib/sanityImage.ts
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};
