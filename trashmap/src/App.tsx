import "leaflet/dist/leaflet.css";
import "./App.css";
import SimpleMap from "./components/SimpleMap";
import LibreMapComponent from "./components/LibreMapComponent";
import tailwindcss from "@tailwindcss/vite";

function App() {
  //const [count, setCount] = useState(0)

  //var map = L.map('map').setView([51.505, -0.09], 13);
  //return <SimpleMap />;
  return (
    <>
      <div id="center">
        <LibreMapComponent />
      </div>

      <div className="flex items-center justify-items-center flex-col">
        <p>test1</p>
        <p>test2</p>
      </div>
    </>
  );
}

export default App;
