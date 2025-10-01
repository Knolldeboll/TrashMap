
// Sammlung von Methoden für Netzwerk-Kommunikation (über REST)

import type { MarkerData } from "../types";

// TODO: durch Custom-Hooks ersetzen, wenn weitere Funktionalität wie z.b. das aufrechterhalten von States notwendig wird!
// z.B. wenn man auch das Handling von Errors etc. auslagern will und diese Sachen nen stabilen State benötigen

export const fetchAllMarkers = async (): Promise<MarkerData[]> => {

    // TODO: Richtige URL rein. 
    const response = await fetch("abc.de/markers");


    if (!response.ok) {
        //throw error in async: Returne das Promise, aber rejected!
        throw new Error('Error beim Laden der Ressourcen: ${response.status}');

    }

    const data: MarkerData[] = await response.json();

    // Return bedeutet in async: Pack den return-Wert in ein Promise bzw. Resolve das Promise mit dem Wert als Value
    return data;
}
