import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import App from "App";
//import { Game } from "../Games/index"
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const Blog = React.lazy(() => import("pages/Blog"));
//const Game = React.lazy(() => import("pages/Games"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<DesktopOne />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
