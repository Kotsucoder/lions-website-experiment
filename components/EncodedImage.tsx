import Image, { ImageProps } from "next/image";

export default function EncodedImage(props: ImageProps) {
  const src = typeof props.src === "string" ? encodeURI(props.src) : props.src;
  return <Image {...props} src={src} />;
}
