import { useEffect, useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
    setLoaded(false);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (fallbackSrc && imageSrc !== fallbackSrc) {
          setLoaded(false);
          setImageSrc(fallbackSrc);
        }
      }}
      className={`
        transition-all duration-700 ease-in-out
        ${
          loaded
            ? "blur-0 scale-100 opacity-100"
            : "blur-md scale-105 opacity-60"
        }
        ${className}
      `}
    />
  );
};

export default BlurImage;
