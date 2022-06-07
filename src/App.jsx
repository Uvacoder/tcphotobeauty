import { Home, Photo, Video } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { routes } from "./config";
import { Pages } from "./pages";

function App() {
  return (
    <Router>
      <NavBar />

      <Pages />

      <Footer />
    </Router>
  );
}

export default App;
