const VITE_MOCK_BACKEND = import.meta.env.VITE_MOCK_BACKEND;

let impl;

console.log("VITE_MOCK_BACKEND", VITE_MOCK_BACKEND);

let mock = true;
if (mock) {
  console.log("Exporting Mock NetworkUtils");
  impl = await import("./NetworkUtils.mock.ts");
} else {
  console.log("Exporting real NetworkUtils");
  impl = await import("./NetworkUtils.ts");
}

// Hier passiert der tatsächliche Export! Wenn man nun nur den utils-Ordner statt konkreter Files importiert, kommt man hier an!
export const { fetchAllMarkers, postSingleMarker } = impl;
