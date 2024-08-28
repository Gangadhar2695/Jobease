import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./context/DataProvider";

import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);