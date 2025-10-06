
// Sammlung von Methoden für Netzwerk-Kommunikation (über REST)

import type { MarkerData } from "../types";

// TODO: durch Custom-Hooks ersetzen, wenn weitere Funktionalität wie z.b. das aufrechterhalten von States notwendig wird!
// z.B. wenn man auch das Handling von Errors etc. auslagern will und diese Sachen nen stabilen State benötigen

export const fetchAllMarkers = async (): Promise<MarkerData[]> => {

    // TODO: Richtige URL rein. 

    // Der hier wirft automatisch nen Error, wenn z.B. die Adresse nicht aufgelöst werden kann! 
    // Das untere response.ok ist also ggf. unnötig
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("response", response)

    //.ok ist, wenn übertragung gepasst hat, technisch gesehen!
    if (!response.ok) {
        //throw error in async: Returne das Promise, aber rejected!
        console.log("networkutils response not ok!")
        throw new Error(`Error beim Laden der Ressourcen: ${response.status}`);

    }


    // hier werden die aus dem Json gewonnenen Objekte direkt in ne Liste vom Typ MarkerData[] gemappt! 
    // Das kann man ez machen, solange es nur DTOs ohne Methoden sind!
    const data: MarkerData[] = await response.json();

    // Return bedeutet in async: Pack den return-Wert in ein Promise bzw. Resolve das Promise mit dem Wert als Value
    return data;
}
