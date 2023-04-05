import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContextProvider from "./Context/AppContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
