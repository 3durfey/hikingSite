import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect } from "react";

const libraries = ["places"];

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={{ width: "50vw", height: "50vh" }}
        zoom={10}
        center={{ lat: 39.7850304, lng: -86.1340752 }}
        className="map"
      >
        <MarkerF
          label="Start"
          position={{ lat: 39.7850304, lng: -86.1340752 }}
        />
        <MarkerF label="End" position={{ lat: 39, lng: -86.13407520001 }} />
      </GoogleMap>
    </div>
  );
}

export default Map;
