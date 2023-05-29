import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AnimeState from "./Components/Context/animeState";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AnimeState>
        <App />
      </AnimeState>
    </Router>
  </React.StrictMode>
);
