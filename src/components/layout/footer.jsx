import { VStack, HStack, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <VStack
      fontSize={11}
      as="footer"
      align="center"
      justify="center"
      spacing={2}
      py={20}
    >
      <Text>HUSBAND + WIFE</Text>
      <Text>PHOTOGRAPHY & VIDEOGRAPHY</Text>
      <Text>UTAH</Text>
    </VStack>
  );
}

export { Footer };
