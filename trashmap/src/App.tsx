import "leaflet/dist/leaflet.css";
import "./App.css";
import LibreMapComponent from "./components/LibreMapComponent";
import UIComponent from "./components/UIComponent";

function App() {
  //const [count, setCount] = useState(0)

  //var map = L.map('map').setView([51.505, -0.09], 13);
  //return <SimpleMap />;

  // Hier kommt Logik rein: welche UI Component (Modus) wird aktuell gerendert?

  // Hier kommt schlussendlich rein:
  // Current UI Component (Settings/Controls)
  // Maps

  return (
    <>
      <div id="center" className="h-screen w-screen">
        <LibreMapComponent />
        <UIComponent></UIComponent>
      </div>
    </>
  );

  //return <JsTestComponent></JsTestComponent>;//<ReactTestComponent></ReactTestComponent>

  // return <TailwindTestComponent></TailwindTestComponent>;
}
export default App;
