import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useContext } from "react";
const libraries = ["places"];
import { PostContext } from "./Container.jsx";

function Map() {
  const posts = useContext(PostContext);
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
  /*
  let result = posts[0];
  if (result !== undefined) {
    console.log(result.excerpt.rendered);
  }
  */
  return (
    <div className="map">
      {posts.map((post, index) => (
        <div key={index}>{post.title.rendered}</div>
      ))}
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
