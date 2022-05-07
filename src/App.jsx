import { Home, Photo, Video } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { routes } from "./config";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
