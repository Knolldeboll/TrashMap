import { useEffect, useRef, useState } from "react";


const ReactTestComponent = () => {





    const [currentNumber, setCurrentNumber] = useState(0);
    const prevNumber = useRef(0);


    // zur besseren verdeutlichung printen wir nur Werte, wenn der count durch 5 teilbar ist!
    useEffect(() => {

        // console.log("old prevnumber is:" + prevNumber.current);

        // console.log("currentnumber is: " + currentNumber + ",save it in prevnumber");

        if (currentNumber % 5 == 0) {
            console.log("currentvalue is %5 yes")
            prevNumber.current = currentNumber;
        }


        console.log("both values in effect: prev " + prevNumber.current + " crrent " + currentNumber + "")

    }, [currentNumber])


    return <button onClick={() => { setCurrentNumber(currentNumber + 1) }} className="bg-amber-400">Testbutton </button>
};
export default ReactTestComponent;