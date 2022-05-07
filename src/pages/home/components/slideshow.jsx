import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlideshow } from "../hooks/useSlidshow";

function Slideshow({ images, delay }) {
  const image = useSlideshow(images, delay);

  return (
    <Box position="relative" w={["md", "xl", "2xl", "3xl", "5xl"]} h={[500]}>
      <AnimatePresence initial={false}>
        <motion.img
          key={image}
          src={image}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
        />
      </AnimatePresence>
    </Box>
  );
}

export { Slideshow };
