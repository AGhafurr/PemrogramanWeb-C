import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Contact from "./Pages/Contact";
import Aboutus from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/AboutUs" exact Component={Aboutus} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      {/* <Hero /> */}
      <Footer />
    </Router>
  );
}

export default App;
