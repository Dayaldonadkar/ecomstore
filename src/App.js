import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SinglePage from "./Pages/SinglePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
