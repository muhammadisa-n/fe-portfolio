import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`
        w-full h-64 object-cover rounded-md
        transition-all duration-700 ease-in-out
        ${
          loaded
            ? "blur-0 scale-100 opacity-100"
            : "blur-md scale-105 opacity-60"
        }
      `}
    />
  );
};

export default BlurImage;
