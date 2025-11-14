// Soll einen komplett überliegenden Container mit dem unteren Feld für Eingaben, dem Slider und dem Einstellungsbutton erzeugen.
// Dieses Component stellt einfach nur die divs für die UI-Elemente bereit und positioniert diese.

import ControlField from "./ControlField";
import { ReloadButton } from "./ReloadButton";
import { SettingsButton } from "./SettingsButton";
import ModeSelector from "./ModeSelector";

// Component for organizing placement of contained UI elements
const UIComponent = () => {
  // Die divs hier dienen nur als Container zur Anordnung der UI-Elemente.
  // Die Kinder geben dann die konkret sichtbaren Styles an

  // TODO: Macht hier Grid auf oberstem Level Sinn, damit man die UI-Gruppen besser Platzieren kann? (Statt bottom-0 und so)

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
          className=" w-fit h-fit  pointer-events-auto"
        >
          <ControlField></ControlField>
        </div>
      </div>
    </div>
  );
};
export default UIComponent;
