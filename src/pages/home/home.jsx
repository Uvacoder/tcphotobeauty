import { Page, PhotoTile } from "../../components";
import { Slideshow } from "./components/slideshow";
import { useSlideshow } from "./hooks/useSlidshow";
import { SimpleGrid, Spacer, Text } from "@chakra-ui/react";

const images = [
  "https://i.ytimg.com/vi/Ahzrv1TQGHY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Ci_NTNGcK00CZ1dxAbJoO_ieCw",
  "https://i.ytimg.com/vi/_jqWwQNWsg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK6jAs9evMV67q2uTSsbkTIuZOIg",
  "https://i.ytimg.com/vi/kR8DS99JwsQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMbiL3n378HbDiPTQaDC1cJrk7OA",
];

function Home() {
  return (
    <Page>
      <Slideshow images={images} delay={7000} />
      <Spacer p={10}/>
      <Text>Recent Work</Text>
      <SimpleGrid columns={[1, 3, 3]} spacing={10} w="4xl">
        <PhotoTile src={images[0]} />
        <PhotoTile src={images[1]} />
        <PhotoTile src={images[2]} />
      </SimpleGrid>
    </Page>
  );
}

export { Home };
