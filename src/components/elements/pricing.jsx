import { VStack, Text, Heading } from "@chakra-ui/react";

function Pricing({ name, price, services }) {
  return (
    <VStack spacing={4}>
      <Heading
        as="h3"
        fontSize={24}
        w="100%"
        py={4}
        border="1px solid black"
        textAlign="center"
      >
        {name}
      </Heading>
      <Heading fontSize={18}>${price}</Heading>
      {services.map((service, i) => (
        <Text fontSize={12} fontWeight={300} key={i}>
          {service}
        </Text>
      ))}
    </VStack>
  );
}

export { Pricing };
