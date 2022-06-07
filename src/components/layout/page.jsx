import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Wrapper = ({ children }) => (
  <motion.div
    ex
    initial="initial"
    key={children.toString()}
    animate="animate"
    exit={"exit"}
    variants={variants}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
  >
    <VStack as="main" padding="0 2rem 2rem 2rem" overflow="hidden">
      {children}
    </VStack>
  </motion.div>
);

function Page({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export { Page };
