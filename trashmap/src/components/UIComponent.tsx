// Soll einen komplett überliegenden Container mit dem unteren Feld für Eingaben, dem Slider und dem Einstellungsbutton erzeugen.
// Dieses Component stellt einfach nur die divs für die UI-Elemente bereit und positioniert diese.

import ControlField from "./ControlField";
import { ReloadButton } from "./ReloadButton";
import { SettingsButton } from "./SettingsButton";
import ModeSelector from "./ModeSelector";

const UIComponent = () => {
  // Der obere div soll fix immer Fullscreen sein, nicht beklickbar sein (man muss durch den durch noch die Karte bedienen können)
  // die weiteren sind Kinder von dem, und haben immer fixed Position an den richtigen Stellen und auch ihre höhe/breite.

  // Der Slider kommt hier dann auch iwie noch rein..

  // -> wir machen die Container-Divs für die UI-Elemente (Settings Button und ControlField) hier und auch deren Platzierung.
  // da diese Klasse sich ja auch um die UI gesamt kümmert! Das Aussehen etc. der enthaltenen Elemente erledigen dann die
  // extrahierten Components.

  // TODO: Styles bei größen reaktiv Anpassen! z.B. sind die Buttons bei Tablet/iPad zu klein!
  return (
    <div
      id="uicontainer"
      className="h-screen w-screen fixed inset-0 pointer-events-none z-10"
    >
      <div
        id="settingsbuttoncontainer"
        className="fixed right-0 top-2/6 flex flex-col space-y-5"
      >
        <SettingsButton></SettingsButton>
        <ReloadButton></ReloadButton>
      </div>
      <div
        id="lowerui"
        className="fixed bottom-0 w-full flex flex-col items-center"
      >
        <div
          id="modeselectorcontainer"
          className="w-fit h-fit pointer-events-auto"
        >
          <ModeSelector></ModeSelector>
        </div>
        <div
          id="controlfieldcontainer"
          className="bg-gray-100 h-[20vh] w-[99%] border-[1px] border-b-0 border-black rounded-t-md text-center pointer-events-auto"
        >
          <ControlField></ControlField>
        </div>
      </div>
    </div>
  );
};
export default UIComponent;
