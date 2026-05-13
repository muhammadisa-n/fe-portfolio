import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>
);
