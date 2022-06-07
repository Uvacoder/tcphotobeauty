import { Home } from "./home";
import { Photo } from "./photo";
import { Video } from "./video";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </AnimatePresence>
  );
}

export { Pages };
