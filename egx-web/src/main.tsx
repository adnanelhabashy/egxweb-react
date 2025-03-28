import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import { mainRoutes } from "./routes/MainRoutes.tsx";
import "./index.css";
import "reflect-metadata"; // Must be imported first
import "./i18n"; // Initialize i18next

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent route with a Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {mainRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
