import { AspectRatio, Box } from "@chakra-ui/react";
import { useState } from "react";

function VideoTile({ video, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AspectRatio ratio={16 / 9}>
      {isPlaying ? <Video src={video} /> : <Thumbnail url={thumbnail} />}
    </AspectRatio>
  );
}

function Video({ src }) {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/PXtGrrdHmu4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

function Thumbnail({ url }) {
  return (
    <Box bgImage={`url(${url})`} bgPos="center" bgSize="cover">
      <p>play</p>
    </Box>
  );
}

export { VideoTile };
