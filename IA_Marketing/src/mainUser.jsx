import React from "react";
import ReactDOM from "react-dom/client";
import AppUser from "./AppUser.jsx";
import "./indexUser.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("appUserRoot")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppUser />
    </BrowserRouter>
  </React.StrictMode>
);
