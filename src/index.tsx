
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; // Global styles
import App from "./App";

// Create the root element and render the App
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
