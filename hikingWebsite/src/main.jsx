import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./components/Container.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Item from "./components/Item.jsx";
import Map from "./components/Map.jsx";
import HikeInfo from "./components/HikeInfo.jsx";

async function test({ params }) {
  return "test";
}
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Item />,
          },
          {
            path: "test",
            element: <HikeInfo />,
            loader: test,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
