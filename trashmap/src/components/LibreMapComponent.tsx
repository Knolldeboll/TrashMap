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

  // useEffect: rufe auf, wenn sich die Dependencies nach der Funktion (dem "Effect") ändern.
  useEffect(() => {
    if (map.current) {
      console.log("LibreMapComponent: map.current already present!");
      return;
    }
    if (mapContainer.current == null) {
      console.log("LibreMapComponent: No Map container present!");
      return;
    }

    console.log("LibreMapComponent: Initializing map.current");
    map.current = new maplibregl.Map({
      container: "map", // container Object
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });
  });

  console.log("LibreMapComponent: current map: ", map.current);
  return (
    <div className="map-wrap">
      <div ref={mapContainer} id="map" className="map" />
    </div>
  );
};
export default LibreMapComponent;
