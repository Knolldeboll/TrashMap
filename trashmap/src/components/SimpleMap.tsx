import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

const SimpleMap = () => {
  const mapRef = useRef(null); //Für ref auf den map-div
  const latitude: number = 51.505;
  const longitude: number = -0.09;

  const position: LatLngTuple = [latitude, longitude];

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    // Hier kann man als properties Insane viel mitgeben, was auch bei
    // regulärem Leaflet Zeug verfügbar wäre!
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    ></MapContainer>
  );
};

export default SimpleMap;
