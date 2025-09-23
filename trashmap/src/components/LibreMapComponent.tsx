import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import "./map.css";

const LibreMapComponent = () => {
  // TODO: any als generic type ist hier iwie doof, aber geht schon. Ref-Typ muss eig "string | HTMLElement" sein, aber man kann nur
  // noch mit extra "| null" machen.
  // -> Es kann prinzipiell auch null drin sein, wenn

  // Hier kommt das Div aus dem Render rein! Siehe unten
  const mapContainer = useRef<HTMLDivElement | null>(null);

  // TS typing: Hier mit <> machen. Generics!
  // Der Typ wird wohl auch iwie für die .current - Property verwendet!
  // Ohne Generic type: map: React.RefObject<null>
  // Mit Generic type: map: React.RefObject<maplibregl.Map|null>
  //const map = useRef<maplibregl.Map>(null);

  // TODO: Sachen wie Zoom können als Param gegeben werden, von dessen Wert useEffect dann abhängig ist!


  // useEffect: wenn sich der im Array gegebene Wert (die Abhängigkeit) ändert, führe den Effect (Die Methode) aus!
  // Bei leer: Führe das beim Load aus.
  useEffect(() => {


    console.log("Useeffect effect")


    if (!mapContainer.current) {
      console.log("No Mapcontainer div exists!");
      return;
    }


    // map einfach nur hier hinklatschen? ok wtf
    // Aber andererseits: bei rerender wird neu geladen! 

    const map = new maplibregl.Map({
      container: mapContainer.current, // container Object
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });


    /*
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
      */

    return () => map.remove();
    console.log("LibreMapComponent: Initializing map.current");

  }, []);


  // Ahh Digga: hier kommt nix rein, weil useEffect erst nach dem Rendern ausgeführt wird!
  //  console.log("LibreMapComponent: current map: ", map.current);



  // console.log("Return from LibreMapComp");

  // Das hier wird übrigens vor useEffect [] ausgeführt
  return (
    <div ref={mapContainer} style={{ position: "absolute", width: "100%", height: "100%" }} />
  );

};
export default LibreMapComponent;
