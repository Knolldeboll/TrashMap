const MarkTrashControl = () => {


    const sendTrashLocation = () => {

        // TODO: Triggere Methode von tatsächlichem Businesslogik-Component welcher für Netzwerk zuständig ist.

        console.log("Trash Location sent!")
    }


    return <>
        <div id="trashsettingswheel" className="w-1/2 h-full border-r-[1px] border-gray-200">
            wie viel Müll

        </div>

        <div id="trashmarkbutton" className="w-1/2 h-full border-l-[1px] border-gray-200 " onClick={sendTrashLocation}>
            Markiere Müll
        </div>
    </>



}; export default MarkTrashControl;