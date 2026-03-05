import Image from "next/image";

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  wide?: boolean;
}

export default function ImageCaption({
  src,
  alt,
  caption,
  credit,
  wide = false,
}: ImageCaptionProps) {
  return (
    <figure
      className={`my-12 ${wide ? "-mx-6 md:-mx-12 lg:-mx-24" : ""
        }`}
    >
      <div className={`relative aspect-[3/2] bg-bg-secondary overflow-hidden rounded-lg ${wide ? "max-w-wide mx-auto" : ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-[center_10%]"
          sizes={wide ? "100vw" : "(max-width: 1024px) 100vw, 1024px"}
          priority
          unoptimized
        />
      </div>
      {(caption || credit) && (
        <figcaption className={`mt-3 ${wide ? "max-w-content mx-auto px-6" : ""}`}>
          {caption && <span className="caption">{caption}</span>}
          {credit && (
            <span className="caption text-text-muted">
              {caption ? " · " : ""}Photo: {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
