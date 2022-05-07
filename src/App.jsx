import { Home, Photo } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
