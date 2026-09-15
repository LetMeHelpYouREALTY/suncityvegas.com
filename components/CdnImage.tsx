import Image, { type ImageProps } from "next/image";
import { cfImage } from "@/lib/cf-image";

type CdnImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * next/image wrapper: Cloudflare Images when mapped, git /public/images otherwise.
 */
export default function CdnImage({ src, alt, ...props }: CdnImageProps) {
  return <Image src={cfImage(src)} alt={alt} {...props} />;
}
