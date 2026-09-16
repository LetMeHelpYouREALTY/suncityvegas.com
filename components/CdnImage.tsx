import Image, { type ImageProps } from "next/image";
import { cfImage, isCloudflareImageUrl } from "@/lib/cf-image";

/**
 * next/image wrapper: Cloudflare hosted Images when mapped, git /public/images otherwise.
 * Hosted Images already negotiates AVIF/WebP, so CF URLs skip Vercel optimization.
 */
export default function CdnImage({
  src,
  alt,
  unoptimized,
  ...props
}: ImageProps) {
  const resolved = typeof src === "string" ? cfImage(src) : src;
  const fromCf =
    typeof resolved === "string" && isCloudflareImageUrl(resolved);

  return (
    <Image
      {...props}
      src={resolved}
      alt={alt}
      unoptimized={Boolean(fromCf || unoptimized)}
    />
  );
}
