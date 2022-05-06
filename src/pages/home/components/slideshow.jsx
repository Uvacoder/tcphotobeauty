import { Image, Box, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Slideshow({ images, delay }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(images.length - 1 === index ? 0 : index + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [index, images, delay]);

  return (
    <Box h="300px">
      {images.map((slide, i) => (
        <AnimatePresence>
          <HStack w="100%" justify="center" align="center">
            {i === index && (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <motion.div layoutId={index.toString()}>
                  <Image src={slide} />
                </motion.div>
              </motion.div>
            )}
          </HStack>
        </AnimatePresence>
      ))}
    </Box>
  );
}

export { Slideshow };
