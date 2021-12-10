import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import { UiProvider } from "./store/ui";

ReactDOM.render(
  <UiProvider>
    <App />
  </UiProvider>,
  document.getElementById("root")
);

reportWebVitals();
