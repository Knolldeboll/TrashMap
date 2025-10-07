import { useState } from "react";
import { fetchAllMarkers } from "../utils/NetworkUtils";
import type { MarkerData } from "../types";
import { useMarkerStore } from "../stores/MarkerStore";

export const ReloadButton = () => {
  const [response, setResponse] = useState(null);

  const allMarkers = useMarkerStore((state) => state.allMarkers);
  const setAllMarkers = useMarkerStore((state) => state.setAllMarkers);

  const loadResourcesCallback = async () => {
    console.log("Reload Button Clicked! Calling API");

    try {
      // Hier kommt MarkerData[] zurück!
      // -> Und?!?
      const data = await fetchAllMarkers();

      // Bei Promise resolve/alles hat geklappt kommt hier ein Array zurück!

      console.log("RefreshButton: Data Received after reload button: ", data);

      // Dieses in den Store schreiben, dann aktualisiert sich die Karte!
      setAllMarkers(data);
    } catch (err) {
      console.log("caught Error after reload button:", err);
    }
  };

  return (
    <>
      <div
        id="reloadbutton"
        className="bg-gray-100 rounded-full h-16 w-16 text-center pointer-events-auto"
        onClick={loadResourcesCallback}
      >
        reload
      </div>
      <div id="displayresponse">Response: {response} </div>
    </>
  );
};
