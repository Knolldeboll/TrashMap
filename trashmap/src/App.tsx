import "leaflet/dist/leaflet.css";
import "./App.css";
import SimpleMap from "./components/SimpleMap";
import LibreMapComponent from "./components/LibreMapComponent";

function App() {
  //const [count, setCount] = useState(0)

  //var map = L.map('map').setView([51.505, -0.09], 13);
  //return <SimpleMap />;
  return (

    <>
      <LibreMapComponent />
    </>

  )
}

export default App;
