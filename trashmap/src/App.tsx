import "leaflet/dist/leaflet.css";
import "./App.css";
import SimpleMap from "./components/SimpleMap";
import LibreMapComponent from "./components/LibreMapComponent";
import tailwindcss from "@tailwindcss/vite";
import TailwindTestComponent from "./components/tailwindtestcomponent";
function App() {
  //const [count, setCount] = useState(0)

  //var map = L.map('map').setView([51.505, -0.09], 13);
  //return <SimpleMap />;

  /*
  return (
    <>
      <div id="center">
        <LibreMapComponent />
      </div>
    </>
  );

  */
  return <TailwindTestComponent></TailwindTestComponent>;
}
export default App;
