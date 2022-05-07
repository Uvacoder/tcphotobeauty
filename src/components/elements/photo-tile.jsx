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
      >
        <Text
          color="white"
          _before={{
            content: `""`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.5)",
            opacity: 0.7,
          }}
        >
          {title || "Hello world"}
        </Text>
      </Box>
    </AspectRatio>
  );
}

export { PhotoTile };
