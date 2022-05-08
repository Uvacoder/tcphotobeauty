import { VStack, Text, Heading } from "@chakra-ui/react";

function Carte({ services }) {
  return (
    <VStack spacing={4}>
      <Heading
        as="h3"
        fontSize={24}
        w={["sm", "xl", "2xl", "3xl", "5xl"]}
        border="1px solid black"
        py={4}
        textAlign="center"
      >
        A La Carte
      </Heading>
      {services.map((service, i) => (
        <Text fontSize={12} fontWeight={300} key={i}>
          {service.name} | ${service.price}
        </Text>
      ))}
    </VStack>
  );
}

export { Carte };
