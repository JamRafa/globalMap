import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Paths from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Paths/>
  </React.StrictMode>
);
