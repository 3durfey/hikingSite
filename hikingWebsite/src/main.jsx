import React from "react";
import ReactDOM from "react-dom/client";
import Map from "./Map.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Map />
    <Footer />
  </React.StrictMode>
);
