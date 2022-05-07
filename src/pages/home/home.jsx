import { Page } from "../../components";
import { Slideshow } from "./components/slideshow";
import { useSlideshow } from "./hooks/useSlidshow";

const images = [
  "https://i.ytimg.com/vi/Ahzrv1TQGHY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Ci_NTNGcK00CZ1dxAbJoO_ieCw",
  "https://i.ytimg.com/vi/_jqWwQNWsg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK6jAs9evMV67q2uTSsbkTIuZOIg",
  "https://i.ytimg.com/vi/kR8DS99JwsQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMbiL3n378HbDiPTQaDC1cJrk7OA",
];

function Home() {
  return (
    <Page>
      <Slideshow images={images} delay={7000} />
    </Page>
  );
}

export { Home };
