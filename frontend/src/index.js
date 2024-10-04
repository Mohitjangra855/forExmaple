import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./landing_page/home/Home";
import About from "./landing_page/about/About";
import Signup from "./landing_page/signup/Signup";
import Products from "./landing_page/products/Products";
import Pricing from "./landing_page/pricing/Pricing";
import Support from "./landing_page/support/Support";
import NotFound from "./landing_page/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
