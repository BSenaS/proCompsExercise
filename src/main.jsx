import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CompContextProvider from "./context/CompContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CompContextProvider>
      <App />
    </CompContextProvider>
  </React.StrictMode>
);
