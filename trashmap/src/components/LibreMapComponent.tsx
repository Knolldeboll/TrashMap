import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import "./map.css";

const LibreMapComponent = () => {
  // TODO: any als generic type ist hier iwie doof, aber geht schon. Ref-Typ muss eig "string | HTMLElement" sein, aber man kann nur
  // noch mit extra "| null" machen.
  // -> Es kann prinzipiell auch null drin sein, wenn
  const mapContainer = useRef<any>(null);

  // TS typing: Hier mit <> machen. Generics!
  // Der Typ wird wohl auch iwie für die .current - Property verwendet!
  // Ohne Generic type: map: React.RefObject<null>
  // Mit Generic type: map: React.RefObject<maplibregl.Map|null>
  const map = useRef<maplibregl.Map>(null);

  // TODO: Sachen wie Zoom können als Param gegeben werden, von dessen Wert useEffect dann abhängig ist!


  // useEffect: wenn sich der im Array gegebene Wert (die Abhängigkeit) ändert, führe den Effect (Die Methode) aus!
  // Bei leer: Führe das beim Load aus.
  useEffect(() => {

    console.log("Useeffect effect")

    if (map.current) {
      console.log("LibreMapComponent: map.current already present! Look here:");
      console.log(map.current)
      console.log("Return");
      return;
    }
    if (mapContainer.current == null) {
      console.log("LibreMapComponent: No Map container present!");
      console.log("Return");
      return;
    }

    console.log("LibreMapComponent: Initializing map.current");
    map.current = new maplibregl.Map({
      container: "map", // container Object
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });
  }, []);


  // Ahh Digga: hier kommt nix rein, weil useEffect erst nach dem Rendern ausgeführt wird!
  console.log("LibreMapComponent: current map: ", map.current);



  console.log("Return from LibreMapComp");
  return (

    <div className="map-wrap">
      <div ref={mapContainer} id="map" className="map" />
    </div>

  );



};
export default LibreMapComponent;
