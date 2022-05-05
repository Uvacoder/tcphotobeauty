import { Home, Photo } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Photo />
    </div>
  );
}

export default App;
