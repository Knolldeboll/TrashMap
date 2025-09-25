
// Feld, welches verschiedene Eingabemöglichkeiten beinhalten kann, 
// beispielweise den Button für Müll markieren + zugehöriges Einstellungsrad

import MarkTrashControl from "./MarkTrashControl";

// Soll entweder:
// 1. als Parameter die zu rendernde aktuelle Funktionalität bekommen (wird von UIComponent je nach Modus bereitgestellt) 
// 2. Selbst auf den State achten und dementsprechend selber die nötigen Komponenten einfügen

const ControlField = () => {

    // TODO tailwind: 100% breit, 100% hoch (in ) , rest in Kindern
    return <div className="w-[100%] h-[100%] flex flex-row">
        <MarkTrashControl></MarkTrashControl>
    </div>

};
export default ControlField;