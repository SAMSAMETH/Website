import { useState } from "react";

export default function BlurImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`blur-load ${loaded ? "loaded" : ""} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
