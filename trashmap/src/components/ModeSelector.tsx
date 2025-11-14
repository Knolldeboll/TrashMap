// Feld, welches eine Auswahl an Modi als Buttons anbietet. Kann durch den Pfeil-Button geöffnet werden.

import { useState } from "react";

const ModeSelector = () => {
  // TODO: Manage State for "mode selection up", changes when arrow button is pressed.
  // Da reicht hier ein einfaches State Dings.

  const [isUp, setIsUp] = useState(false);

  // Wenn isUp, wird anderes CSS angewandt einfach.
  // Sitzt im UI-Container, dieser legt dann die Hauptposition des ModeSelectors fest!

  // TODO: Feld mit einzelnen Modi-Buttons reinmachen

  return (
    <div>
      <div
        className="bg-amber-50 w-14 h-10 text-center"
        id="openButton"
        onClick={() => {
          setIsUp(!isUp);
          console.log("isUp changed");
        }}
      >
        {isUp ? "v" : "^"}
      </div>
    </div>
  );
};
export default ModeSelector;
