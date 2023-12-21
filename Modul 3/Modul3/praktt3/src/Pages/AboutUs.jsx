import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "53vw",
          fontSize: "5vw",
          fontFamily: "serif",
          backgroundColor: "#ECCDB4",
        }}
      >
        Do You Wanna Know About Me?
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
