import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default CustomRoutes;
