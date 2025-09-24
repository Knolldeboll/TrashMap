
// Soll einen komplett überliegenden Container mit dem unteren Feld für Eingaben, dem Slider und dem Einstellungsbutton erzeugen.
// Dieses Component stellt einfach nur die divs für die UI-Elemente bereit und positioniert diese.

import ControlField from "./ControlField";

const UIComponent = () => {


    // Der obere div soll fix immer Fullscreen sein, nicht beklickbar sein (man muss durch den durch noch die Karte bedienen können)
    // die weiteren sind Kinder von dem, und haben immer fixed Position an den richtigen Stellen und auch ihre höhe/breite.

    // Der Slider kommt hier dann auch iwie noch rein..


    // -> wir machen die Container-Divs für die UI-Elemente (Settings Button und ControlField) hier und auch deren Platzierung.
    // da diese Klasse sich ja auch um die UI gesamt kümmert! Das Aussehen etc. der enthaltenen Elemente erledigen dann die 
    // extrahierten Components.


    return <div id="uicontainer" className="h-screen w-screen fixed inset-0 pointer-events-none z-10">


        <div id="settingsbuttoncontainer" className="bg-gray-100 rounded-full h-16 w-16 fixed right-0 top-3/6 text-center pointer-events-auto">Stngs</div>
        <div id="controlfieldcontainer" className="bg-gray-100 fixed bottom-0 inset-x-0 mx-auto h-1/5 w-[99%] border-[1px] border-black rounded-t-md text-center pointer-events-auto">
            <ControlField></ControlField>
        </div>;



    </div>


};
export default UIComponent;