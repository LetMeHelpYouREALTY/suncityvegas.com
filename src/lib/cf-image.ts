/**
 * Cloudflare Images is the primary CDN. Git copies in /public/images are the backup.
 *
 * When NEXT_PUBLIC_CF_IMAGES_HASH is set and a local path has an uploaded image id
 * in cf-image-ids.ts, next/image loads from imagedelivery.net.
 * Otherwise the git-tracked /public/images path is used (Vercel Image Optimization).
 *
 * Upload mapping: `node scripts/upload-cf-images.mjs`
 */

import { cfImageIds } from "./cf-image-ids";

const CF_HASH = process.env.NEXT_PUBLIC_CF_IMAGES_HASH;
const CF_VARIANT = process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT || "public";

export function cfImage(src: string): string {
  if (!src) return src;
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  if (!CF_HASH) return src;
  const id = cfImageIds[src];
  if (!id) return src;
  return `https://imagedelivery.net/${CF_HASH}/${id}/${CF_VARIANT}`;
}
