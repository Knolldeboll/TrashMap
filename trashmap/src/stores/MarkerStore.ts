import { create } from "zustand";
import type { MarkerData } from "../types";

interface MarkerStore {
    allMarkers: MarkerData[]
}

const useMarkerStore = create<MarkerStore>((set) => ({
    // Felder für Daten
    allMarkers: [],

    // setter für Felder

    // Hier spezieller Setter: nicht allMarkers neu belegen, 
    // sondern neue Liste mit bisheriger Liste spreaded + neuem Marker

    // Einfache Setter (einfach nur Wert eines Felds setzen) gehen immer so: 
    // nameDesSetters: (neuerWert) => set({feldName:neuerWert})
    setAllMarkers: (newMarkers: MarkerData[]) => set({ allMarkers: newMarkers }),

    // Setter, die den alten State benötigen (z.B. zum updaten einer Liste) gehen so:
    addSingleMarker: (newMarker: MarkerData) => set((state) => ({ allMarkers: [...state.allMarkers, newMarker] }))

}));