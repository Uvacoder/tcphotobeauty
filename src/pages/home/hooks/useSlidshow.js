import { useState, useEffect } from "react";

function useSlideshow(images, delay) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(images.length - 1 === index ? 0 : index + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [index, images, delay]);

  return images[index];
}

export { useSlideshow };
