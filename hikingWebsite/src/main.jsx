import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./components/Container.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  </React.StrictMode>
);
export { queryClient };
