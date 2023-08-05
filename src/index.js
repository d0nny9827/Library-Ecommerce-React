import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBoltLightning,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBoltLightning,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
