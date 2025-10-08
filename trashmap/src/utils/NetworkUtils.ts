// Sammlung von Methoden für Netzwerk-Kommunikation (über REST)

import type { MarkerData } from "../types";

const VITE_MARKER_URL = import.meta.env.VITE_BACKEND_API_ALL_MARKERS;
const VITE_POST_MARKER_URL = import.meta.env.VITE_BACKEND_API_SINGLE_MARKER;

// TODO: durch Custom-Hooks ersetzen, wenn weitere Funktionalität wie z.b. das aufrechterhalten von States notwendig wird!
// z.B. wenn man auch das Handling von Errors etc. auslagern will und diese Sachen nen stabilen State benötigen

export const fetchAllMarkers = async (): Promise<MarkerData[]> => {
  // TODO: Richtige URL rein.

  console.log("Fetch all Markers");

  // Der hier wirft automatisch nen Error, wenn z.B. die Adresse nicht aufgelöst werden kann!
  // Das untere response.ok ist also ggf. unnötig
  const response = await fetch(`${VITE_MARKER_URL}`);

  console.log("response", response);

  //.ok ist, wenn übertragung gepasst hat, technisch gesehen!
  if (!response.ok) {
    //throw error in async: Returne das Promise, aber rejected!
    console.log("networkutils response not ok!");
    throw new Error(`Error beim Laden der Ressourcen: ${response.status}`);
  }

  // hier werden die aus dem Json gewonnenen Objekte direkt in ne Liste vom Typ MarkerData[] gemappt!
  // Das kann man ez machen, solange es nur DTOs ohne Methoden sind!
  const data: MarkerData[] = await response.json();

  // Return bedeutet in async: Pack den return-Wert in ein Promise bzw. Resolve das Promise mit dem Wert als Value
  return data;
};

export const postSingleMarker = async (marker: MarkerData) => {
  console.log("Post single Marker");
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      latitude: marker.latitude,
      longitude: marker.longitude,
      datetime: marker.datetime,
      username: marker.username,
    }),
  };

  console.log("init: " + init.body);
  const response = await fetch(`${VITE_POST_MARKER_URL}`, init);

  if (!response.ok) {
    console.error("POST response not ok: ");
    throw new Error(`Error beim Posten des Markers: ${response.status}`);
  }

  console.log("response ok:", response);
  return response;
};
