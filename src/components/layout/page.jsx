import { VStack } from "@chakra-ui/react";

const Wrapper = ({ children }) => (
  <VStack as="main" padding="2rem">
    {children}
  </VStack>
);

function Page({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export { Page };
