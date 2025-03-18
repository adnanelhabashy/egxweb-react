import { Route } from "react-router-dom";
import About from "../pages/About.tsx";
export const mainRoutes = (
  <>
    <Route path="about" element={<About />} />
  </>
);
