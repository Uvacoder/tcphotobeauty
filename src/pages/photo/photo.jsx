import { Page, PhotoTile } from "../../components";
import { Grid } from "./components/grid";
import { photos } from "./data.json";

function Photo() {
  return (
    <Page>
      <Grid>
        {photos.map((photo, i) => (
          <PhotoTile key={i} src={photo} />
        ))}
      </Grid>
    </Page>
  );
}

export { Photo };
