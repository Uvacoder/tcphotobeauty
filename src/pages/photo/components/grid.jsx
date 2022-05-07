import { SimpleGrid } from "@chakra-ui/react";

function Grid({ children }) {
  return (
    <SimpleGrid
      columns={[1, 1, 2, 3, 4]}
      spacing={5}
      w={["sm", "xl", "2xl", "3xl", "5xl"]}
    >
      {children}
    </SimpleGrid>
  );
}

export { Grid };
