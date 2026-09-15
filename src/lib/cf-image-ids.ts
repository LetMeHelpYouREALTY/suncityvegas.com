/**
 * Maps git-backed public image paths to Cloudflare Images IDs.
 * Populated by scripts/upload-cf-images.mjs after a successful upload.
 */
export const cfImageIds: Record<string, string> = {};
