/**
 * Cloudflare hosted Images is the primary CDN.
 * Git copies in /public/images are the backup (Vercel Image Optimization).
 *
 * Delivery (hosted Images — not /cdn-cgi/image on www, which is gray-cloud DNS):
 *   https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>
 *
 * Mapping is written by `node scripts/upload-cf-images.mjs` after a successful
 * upload. Until then, local `/images/...` paths are served from git.
 */

import { cfImageIds } from "./cf-image-ids";

export const CF_IMAGES_HASH =
  process.env.NEXT_PUBLIC_CF_IMAGES_HASH || "byE6BTe9lNqo21V57n4aPQ";
export const CF_IMAGES_VARIANT =
  process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT || "public";

const SITE_ORIGIN = "https://www.suncityvegas.com";

/** Custom IDs allowed by Images: alphanumeric, `.`, `_`, `-` (no slashes). */
export function cfCustomId(src: string): string {
  return src.replace(/^\//, "").replace(/[^a-zA-Z0-9._-]/g, "-");
}

export function isCloudflareImageUrl(src: string): boolean {
  return src.startsWith("https://imagedelivery.net/");
}

export function cfDeliveryUrl(imageId: string, variant = CF_IMAGES_VARIANT): string {
  return `https://imagedelivery.net/${CF_IMAGES_HASH}/${imageId}/${variant}`;
}

/**
 * Resolve a local `/images/...` path to imagedelivery.net when an uploaded
 * id exists; otherwise return the git-backed public path.
 */
export function cfImage(src: string): string {
  if (!src) return src;
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }
  if (!CF_IMAGES_HASH) return src;
  const id = cfImageIds[src];
  if (!id) return src;
  return cfDeliveryUrl(id);
}

/** Absolute URL for Open Graph, Twitter, and JSON-LD. */
export function cfAbsoluteImage(src: string, origin = SITE_ORIGIN): string {
  const resolved = cfImage(src);
  if (
    resolved.startsWith("http://") ||
    resolved.startsWith("https://") ||
    resolved.startsWith("data:")
  ) {
    return resolved;
  }
  if (resolved.startsWith("/")) return `${origin}${resolved}`;
  return resolved;
}
