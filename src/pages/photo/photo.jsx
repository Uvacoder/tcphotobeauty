import { SimpleGrid, Spacer, Text, Divider } from "@chakra-ui/react";
import { Page, PhotoTile, Pricing, Carte } from "../../components";
import { Grid } from "./components/grid";
import { photos, pricing, carte } from "./data.json";

function Photo() {
  return (
    <Page>
      <Grid>
        {photos.map((photo, i) => (
          <PhotoTile key={i} src={photo} />
        ))}
      </Grid>
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

export { Photo };
