import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import fetchPosts from "../jsFunctions/fetchPosts";
import PropTypes from "prop-types";

function Map({ post }) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  console.log(typeof lat, typeof lng);
  useEffect(() => {
    (async function () {
      const posts = await fetchPosts("categories");
      const val = posts.filter((postTemp) => {
        if (postTemp.name.toLowerCase() === post) {
          return postTemp;
        }
      });
      const [lat, lng] = val[0].description.split(",");
      setLat(parseInt(lat));
      setLng(parseInt(lng));
    })();
  }, [post]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
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
        center={{ lat: lat, lng: lng }}
        className="map"
      >
        <MarkerF label="Start" position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </div>
  );
}

export default Map;
