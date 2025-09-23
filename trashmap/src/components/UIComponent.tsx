
// Soll einen komplett überliegenden Container mit dem unteren Feld für Eingaben, dem Slider und dem Einstellungsbutton erzeugen.

const UIComponent = () => {



    // Es soll so sein, dass hier auf jeden Fall die Divs für schittsy

    // Der obere div soll fix immer Fullscreen sein, nicht beklickbar sein (man muss durch den durch noch die Karte bedienen können)
    // die weiteren sind Kinder von dem, und haben immer fixed Position an den richtigen Stellen und auch ihre höhe/breite.

    // Der Slider kommt hier dann auch iwie noch rein..

    // -> Muss der obere Flex sein wegen der Positionierung? Oder egal, weil die Kids ihre eigene Pos setzen?
    return <div id="uicontainer" className="h-screen w-screen fixed inset-0 pointer-events-none">

        <div id="settingsbutton" className="bg-blue-400 rounded-full h-16 w-16 fixed right-0 top-3/6 text-center pointer-events-auto">Stngs</div>
        <div id="controlfield" className="bg-amber-700 fixed bottom-0 h-1/5 w-full text-center pointer-events-auto"> Eingaben</div>


    </div>


};
export default UIComponent;