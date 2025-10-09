import { create } from "zustand";
import type { MarkerData } from "../types";
import type { Marker } from "maplibre-gl";

// TODO: Feld für maplibregl.Marker machen.-

interface MarkerStore {
  allMarkers: MarkerData[];
  currentDisplayMarkers: Marker[];
  setAllMarkers: (newMarkers: MarkerData[]) => void;
  addSingleMarker: (newMarker: MarkerData) => void;
  setCurrentDisplayMarkers: (newDisplayMarker: Marker[]) => void;
  addCurrentDisplayMarker: (newDisplayMarker: Marker) => void;
}

export const useMarkerStore = create<MarkerStore>((set) => ({
  // Felder für Daten
  allMarkers: [],

  // Hier kann man auch direkt alle anzuzeigenden Marker als Maplibre-gl.Marker erzeugen und direkt bei Empfang
  // .setLnLat machen.
  //
  // Sobald sich die Markers geändert haben (neue Marker hinzu/alte weg), passiert dann in LibreMapComponent ein useEffect (dep auf dieses Array),
  // und die

  currentDisplayMarkers: [],

  // setter für Felder

  // Hier spezieller Setter: nicht allMarkers neu belegen,
  // sondern neue Liste mit bisheriger Liste spreaded + neuem Marker

  // Einfache Setter (einfach nur Wert eines Felds setzen) gehen immer so:
  // nameDesSetters: (neuerWert) => set({feldName:neuerWert})
  setAllMarkers: (newMarkers: MarkerData[]) => set({ allMarkers: newMarkers }),

  // Setter, die den alten State benötigen (z.B. zum updaten einer Liste) gehen so:
  addSingleMarker: (newMarker: MarkerData) =>
    set((state) => ({ allMarkers: [...state.allMarkers, newMarker] })),

  /**
   * Set all Maplibre Markers to be displayed
   * @param newMapLibreMarkers The Markers to be displayed
   * @returns
   */
  setCurrentDisplayMarkers: (newMapLibreMarkers: Marker[]) =>
    set({ currentDisplayMarkers: newMapLibreMarkers }),

  /**
   * Add a single Maplibre Marker to the store of all displayed Markers
   * @param newMapLibreMarker The new MapLibre Marker Object
   * @returns
   */
  addCurrentDisplayMarker: (newMapLibreMarker: Marker) =>
    set((state) => ({
      currentDisplayMarkers: [
        ...state.currentDisplayMarkers,
        newMapLibreMarker,
      ],
    })),
  // Man kann auf die Felder immer mit useEffect listenen, solange sich die Referenz ändert! Das passiert bei
  // Zuweisungen von neuen Werten automatisch, hier auch bei addSingleMarker. Da ist zwar das alte Array auch wieder drin, aber durch spread
  // wird ne neue Referenz gemacht! Neue Referenz geht auh z.B. mit .map() / .filter() / .reduce() usw.

  // Wenn man jetzt z.B. nur ein Objekt im Array updaten will (z.B. allMarkers [2]. longitude = 52.11111), bleibt das Array gleich, da
  // keine neuen
}));
