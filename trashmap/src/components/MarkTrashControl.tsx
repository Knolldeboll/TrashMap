import { useMarkerStore } from "../stores/MarkerStore";
import type { MarkerData } from "../types";
import { fetchAllMarkers, postSingleMarker } from "../utils/index";

const MarkTrashControl = () => {
  const setAllMarkers = useMarkerStore((state) => state.setAllMarkers);

  const sendTrashLocation = async () => {
    const mockMarker: MarkerData = {
      latitude: Math.random() * 10,
      longitude: Math.random() * 10,
      datetime: "08-10-2025 15:56",
      username: "Grobian",
    };
    // TODO: Triggere Methode von tatsächlichem Businesslogik-Component welcher für Netzwerk zuständig ist.
    console.log("Sending Trash Location:", mockMarker);

    // Try Posting
    try {
      const postresponse = await postSingleMarker(mockMarker);

      // Try refreshing data
      try {
        const data = await fetchAllMarkers();
        setAllMarkers(data);
      } catch (err) {
        console.log("Error while refreshing data after post:", err);
      }
    } catch (err) {
      console.error("Error while sending marker: ", err);
    }
  };

  return (
    <>
      <div
        id="trashsettingswheel"
        className="w-1/2 h-full border-r-[1px] border-gray-200"
      >
        wie viel Müll
      </div>

      <div
        id="trashmarkbutton"
        className="w-1/2 h-full border-l-[1px] border-gray-200 "
        onClick={sendTrashLocation}
      >
        Markiere Müll
      </div>
    </>
  );
};
export default MarkTrashControl;
