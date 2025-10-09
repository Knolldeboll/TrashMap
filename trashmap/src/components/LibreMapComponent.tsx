import maplibregl, { Map, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

// Wird das hier überhaupt angewandt? Die darin genannten Klassen kommen iwie gar nicht vor...
import "./map.css";
import { useMarkerStore } from "../stores/MarkerStore";
import type { MarkerData } from "../types";
import { fetchAllMarkers } from "../utils/NetworkUtils";

const LibreMapComponent = () => {
  // TODO: any als generic type ist hier iwie doof, aber geht schon. Ref-Typ muss eig "string | HTMLElement" sein, aber man kann nur
  // noch mit extra "| null" machen.
  // -> Es kann prinzipiell auch null drin sein, wenn

  // Hier kommt das Div aus dem Render rein! Siehe unten
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const mapRef = useRef<maplibregl.Map>(null);

  // Store Access Methods/Fields
  const setAllMarkers = useMarkerStore((state) => state.setAllMarkers);
  const allMarkers = useMarkerStore((state) => state.allMarkers);

  const addCurrentDisplayMarker = useMarkerStore(
    (state) => state.addCurrentDisplayMarker
  );
  const setCurrentDisplayMarkers = useMarkerStore(
    (state) => state.setCurrentDisplayMarkers
  );
  const allCurrentDisplayMarkers = useMarkerStore(
    (state) => state.currentDisplayMarkers
  );

  // TS typing: Hier mit <> machen. Generics!
  // Der Typ wird wohl auch iwie für die .current - Property verwendet!
  // Ohne Generic type: map: React.RefObject<null>
  // Mit Generic type: map: React.RefObject<maplibregl.Map|null>
  //const map = useRef<maplibregl.Map>(null);

  // TODO: Sachen wie Zoom können als Param gegeben werden, von dessen Wert useEffect dann abhängig ist!

  // useEffect: wenn sich der im Array gegebene Wert (die Abhängigkeit) ändert, führe den Effect (Die Methode) aus!
  // Bei leer: Führe das beim Load aus.

  // TODO: Map in nem State speichern?

  useEffect(() => {
    console.log("LibreMapComponent useEffect []");

    if (!mapContainer.current) {
      console.log("No Mapcontainer div exists!");
      return;
    }

    // map einfach nur hier hinklatschen? ok wtf, vielleicht in nen State packen!
    // Aber andererseits: bei rerender wird neu geladen!

    const map = new maplibregl.Map({
      container: mapContainer.current, // container Object
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });

    // Persist Map object over renders
    mapRef.current = map;

    // Funktion zum asynchronen fetch von Map-Daten!
    // Muss hier intern definiert werden, da useEffect() keine async-Function mit "Promise" Rückgabewert nehmen kann!

    const getData = async () => {
      try {
        const data = await fetchAllMarkers();
        setAllMarkers(data);
      } catch (err) {
        console.error("Error while initially fetching marker Data:", err);
      }
    };

    // Wenn Map vorhanden, versuche alle Marker von der API zu holen
    if (map) {
      console.log("Map present after mount, try to load data!");
      getData();
    }
    // Return hier: Methode, die beim unmount aufgerufen werden soll oder so..
    return () => map.remove();
  }, []);

  // Reagiere auf neu in den Store geschriebene MarkerData und mal diese auf die Map!
  useEffect(() => {
    console.log("Libremapcomponent: allMarkers Changed!");

    if (mapRef == null) {
      console.log("Libremap useEffect on allMarkers: no map present!");

      return;
    }

    // Hier ist tatsächlich die einzige Stelle wo das repainten passiert - muss man nicht auslagern
    // ReloadButton triggert den Code hier, in dem der Store geändert wird!
    console.log("First remove currently displayed Markers");

    for (let mark of allCurrentDisplayMarkers) {
      mark.remove();
      setCurrentDisplayMarkers([]);
    }

    console.log(" then add new markers to the map!");

    for (let marker of allMarkers) {
      console.log("marker:", marker);
      const newMarker = new Marker()
        .setLngLat([marker.longitude, marker.latitude])
        .addTo(mapRef.current as Map);
      addCurrentDisplayMarker(newMarker);
    }
  }, [allMarkers]);

  // Ahh Digga: hier kommt nix rein, weil useEffect erst nach dem Rendern ausgeführt wird!
  //  console.log("LibreMapComponent: current map: ", map.current);

  // console.log("Return from LibreMapComp");

  // Das hier wird übrigens vor useEffect [] ausgeführt
  return (
    <div
      ref={mapContainer}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
};
export default LibreMapComponent;
