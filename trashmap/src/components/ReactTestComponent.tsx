import { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/Hooks";
import type { FetchItem } from "../types";


const ReactTestComponent = () => {


    const [currentNumber, setCurrentNumber] = useState(0);
    const prevNumber = useRef(0);

    //anscheinend nur kake
    // wird bei jedem Rerender ausgeführt
    const fetchdata = useFetch("https://jsonplaceholder.typicode.com/todos");
    console.log("fetchdata in reacttestcomp: ", fetchdata)

    // zur besseren verdeutlichung printen wir nur Werte, wenn der count durch 5 teilbar ist!
    useEffect(() => {

        // console.log("old prevnumber is:" + prevNumber.current);

        // console.log("currentnumber is: " + currentNumber + ",save it in prevnumber");

        if (currentNumber % 5 == 0) {
            console.log("currentvalue is %5 yes")
            prevNumber.current = currentNumber;
        }


        console.log("both values in effect: prev " + prevNumber.current + " crrent " + currentNumber + "")

    }, [])

    /**
     *     {fetchdata &&
            fetchdata.map((item) => {
                // Wir sind hier in ner Funktion.. da muss auch return passieren :D
                if (item && item.id < 10) return <p key={item.id}>{item.title}</p>


            })}







     */


    return (<>

        <button onClick={() => { setCurrentNumber(currentNumber + 1) }}>{currentNumber}</button>

        {fetchdata &&
            fetchdata.map((item: FetchItem) => {
                // Wir sind hier in ner Funktion.. da muss auch return passieren :D
                if (item && item.id < 10) return <p key={item.id}>{item.title}</p>

            })}

    </>)



};
export default ReactTestComponent;