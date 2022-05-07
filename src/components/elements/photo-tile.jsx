import { Box, Text, AspectRatio } from "@chakra-ui/react";

function PhotoTile({ src, onClick, title }) {
  return (
    <AspectRatio ratio={1}>
      <Box
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url(${src})`}
        onClick={onClick}
        cursor="pointer"
        w="100%"
        h="100%"
        transition={"all 0.1s ease-in-out"}
        _hover={{ opacity: 0.8 }}
      >
        <Box bg="black" w="100%" h="100%" position="absolute" opacity={0.4} />
        <Text position="relative" zIndex={10} color="white">
          {title || "Hello world"}
        </Text>
      </Box>
    </AspectRatio>
  );
}

export { PhotoTile };
