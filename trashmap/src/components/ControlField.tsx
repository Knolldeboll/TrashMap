// Feld, welches verschiedene Eingabemöglichkeiten (Controls) beinhalten kann,
// beispielweise den Button für Müll markieren + zugehöriges Einstellungsrad

import MarkTrashControl from "./MarkTrashControl";

// Soll entweder:
// 1. als Parameter die zu rendernde aktuelle Funktionalität bekommen (wird von UIComponent je nach Modus bereitgestellt)
// 2. Selbst auf den State achten und dementsprechend selber die nötigen Komponenten einfügen

const ControlField = () => {
  // TODO tailwind: 100% breit, 100% hoch (in ) , rest in Kindern
  // TODO: ControlField ist der eigentliche Rahmen mit BG und anderen Attributen. Dieser soll Attribute wie Höhe etc.
  // vorgeben, und nicht der Container in UIComponent!
  return (
    <div className="bg-gray-100 h-[20vh] w-[99vw] border-[1px] border-b-0 border-black rounded-t-md text-center flex flex-row">
      <MarkTrashControl></MarkTrashControl>
    </div>
  );
};
export default ControlField;
