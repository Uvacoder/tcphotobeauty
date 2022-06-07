import { Page, PhotoTile } from "../../components";
import { Slideshow } from "./components/slideshow";
import { SimpleGrid, Spacer, Text, Divider } from "@chakra-ui/react";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
];

function Home() {
  return (
    <Page>
      <Slideshow images={images} delay={7000} />
      <Spacer p={5} />
      <Divider w={["md"]} />
      <Spacer p={5} />
      <Text fontSize={12} textTransform="uppercase">
        Recent Work
      </Text>
      <Spacer p={2} />
      <SimpleGrid
        columns={[1, 3, 3, 3, 3]}
        spacing={2}
        w={["sm", "xl", "2xl", "3xl", "6xl"]}
      >
        <PhotoTile src={images[0]} />
        <PhotoTile src={images[1]} />
        <PhotoTile src={images[2]} />
      </SimpleGrid>
      <Spacer p={5} />
      <Divider w={["md"]} />
    </Page>
  );
}

export { Home };
