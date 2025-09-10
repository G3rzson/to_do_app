import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalProvider } from "./GlobalContext/GlobalProvider.tsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS komponens
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
