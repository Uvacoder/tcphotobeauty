import { Box, Text, AspectRatio } from "@chakra-ui/react";

function PhotoTile({ src, onClick, title }) {
  return (
    <AspectRatio ratio={1}>
      <Box
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url(${src})`}
        onClick={onClick}
        w="100%"
        h="100%"
      >
        <Text>{title}</Text>
      </Box>
    </AspectRatio>
  );
}

export { PhotoTile };
