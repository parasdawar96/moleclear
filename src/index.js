import "./index.css"; // Make sure this is the first import
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
