import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar/index.tsx";
import "./i18n";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
    </div>
  </StrictMode>
);
