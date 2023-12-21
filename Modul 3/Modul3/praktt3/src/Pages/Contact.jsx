import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";

const Contact = () => {
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
        This My Contact:)
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
