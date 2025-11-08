import type { MarkerData } from "../types";

const mockMarkerData: MarkerData[] = [];

export const fetchAllMarkers = async (): Promise<MarkerData[]> => {
  // TODO: Richtige URL rein.

  console.log("Mock-Fetch all Markers: ", mockMarkerData);
  // Return bedeutet in async: Pack den return-Wert in ein Promise bzw. Resolve das Promise mit dem Wert als Value
  // Gib aber ne Kopie von mockMarkerData zurück, da wenn man immer dieselbe Referenz zurückgibt und in den Store schreibt,
  // erkennt React keine Änderung davon! Denn den jucken die Werte im Store nicht, nur ob neue Referenzen reinkommen.
  return [...mockMarkerData];
};

export const postSingleMarker = async (marker: MarkerData) => {
  console.log("Mock-Post single Marker: ", marker);
  mockMarkerData.push(marker);
  return;
};
