import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent route with a Layout */}
        <Route path="/" element={<Layout />}>
          {/* Index route => Home */}
          <Route index element={<Home />} />

          {/* /about => About page */}
          <Route path="about" element={<About />} />

          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
