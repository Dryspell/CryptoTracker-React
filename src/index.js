import React from "react";
import "./index.css";
import App from "./App";
import CryptoContext from "./CryptoContext";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <CryptoContext>
    <App />
  </CryptoContext>
);
