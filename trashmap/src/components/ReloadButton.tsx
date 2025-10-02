import { useState } from "react";
import { fetchAllMarkers } from "../utils/NetworkUtils";
import type { MarkerData } from "../types";


export const ReloadButton = () => {


    const [response, setResponse] = useState(null);

    const loadResourcesCallback = async () => {
        console.log("Reload Button Clicked! Calling API")

        try {

            // Hier kommt MarkerData[] zurück!
            const data = await fetchAllMarkers();

            // Array handeln also!
            const responseString = data.map((value: MarkerData) => console.log(value));

            // console.log("Data Received after reload button: ", responseString);

        } catch (err) {
            console.log("caught Error after reload button:", err);
        }
    }


    return (<>
        <div id="reloadbutton" className="bg-gray-100 rounded-full h-16 w-16 text-center pointer-events-auto" onClick={loadResourcesCallback}>reload</div>
        <div id="displayresponse">Response: {response} </div>
    </>)



}