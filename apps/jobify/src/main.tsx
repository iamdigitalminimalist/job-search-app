import { StrictMode } from "react";
import "normalize.css";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
