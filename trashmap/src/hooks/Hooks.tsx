import { useEffect, useState } from "react"
import type { FetchItem } from "../types";



// TODO: Entweder verschiedene Hooks für jeden einzelnen API-Endpoint machen (z.B. useFetchAllMarkers, useFetchOwnMarkers, etc.)
//-> bevorzugte Methode für mich, da bessere Trennung! Alles für Network ist dann in dieser Datei drin, und nicht nur die Methoden hier,
// dafür aber dann die URLs und Typ-Angaben überall anders...

// Oder: generische Fetch-Hook, typisiert mit <T>, bei der die entsprechende URL und der erwartete Rückgabewert (statt T) angegeben werden kann!
// -> wenn generisch, dann für GET, POST, PUT, DELETE eine, oder die HTTP-Methode als Parameter angeben.

// TODO: Geht sowas auch mit async/await-Syntax statt Promise.then-Syntax?
// ggf. muss die Hook dann async sein und ein Promise mit den Daten als Value zurückgeben.
export const useFetch = (url: string): FetchItem[] | null => {

    const [data, setData] = useState<FetchItem[] | null>(null);

    // Hole Daten mit Fetch einmal am Anfang und wenn sich die URL ändert
    useEffect(() => {

        //console.log("fetch from url:" + url)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));

        console.log("useFetch: Effect triggered and data received:" + (data));


    }, [url]);

    return data;

};


// Hier muss noch kein try/catch rein, erst beim Aufrufer von useFetch

/**
 * Methode, die alle in der DB gespeicherten Marker zurückholt.
 * Da async/await verwendet wird unbedingt mit try/catch einpacken!
 * 
 * @param url 
 */



export const useFetchAllMarkers = async (url: String) => {

    // TODO: Implementieren, wenn für fetch stabiler state benötigt wird, z.B. fürs Handling von Errors oder so bums
    // useEffect hierdrin, damit 


    throw new Error("not Implemented! und vielleicht nicht caught du penner!")
};



