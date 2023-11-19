import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

const LazyImage = ({ src, alt, className, onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(true);
      if (onLoad) {
        onLoad();
      }
    };
  }, [src, onLoad]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? '' : 'hidden'}`}
      />
    </Suspense>
  );
};

export default LazyImage;
