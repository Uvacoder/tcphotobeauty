import { Page, Pricing, Carte } from "../../components";
import { VideoTile } from "./components/video-tile";
import { SimpleGrid, Spacer, Divider, Text } from "@chakra-ui/react";
import { videos, pricing, carte } from "./data.json";

function Video() {
  return (
    <Page>
      <SimpleGrid columns={[1, 3, 3]} spacing={2} w="5xl">
        {videos.map((video) => (
          <VideoTile
            key={video.id}
            thumbnail={video.thumbnail}
            video={video.video}
          />
        ))}
      </SimpleGrid>
      <Spacer p={5} />
      <Divider w={["md"]} />
      <Spacer p={5} />

      <Text fontSize={12} textTransform="uppercase">
        Pricing
      </Text>
      <Spacer p={2} />
      <SimpleGrid columns={[1, 2]} w={["5xl"]} spacing={2}>
        {pricing.map((plan, i) => (
          <Pricing
            key={i}
            name={plan.name}
            price={plan.price}
            services={plan.services}
          />
        ))}
      </SimpleGrid>
      <Spacer p={5} />
      <Carte services={carte} />
      <Spacer p={5} />
      <Divider w={["md"]} />
    </Page>
  );
}

export { Video };
