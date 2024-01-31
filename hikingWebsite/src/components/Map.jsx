import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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
      ></GoogleMap>
    </div>
  );
}

export default Map;
