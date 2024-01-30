import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./styles/Header.module.css";

const libraries = ["places"];

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuUDW8H_mEEvrV4IBDMicmTUDskp01b8g",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "50vw", height: "50vh" }}
        zoom={10}
        center={{ lat: 39.7850304, lng: -86.1340752 }}
      ></GoogleMap>
    </div>
  );
};

export default App;
