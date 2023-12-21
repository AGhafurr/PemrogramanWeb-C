import React from "react";
import ilab from "./hero.jpg";
const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={ilab} className="w-100" alt="ilab" />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "10%",
          width: "100%",
          textAlign: "left",
          color: "white",
          fontWeight: "normal",
        }}
      >
        <h1>SELAMAT DATANG</h1>
        <h2>di website Praktikum Pemrograman Website</h2>
      </div>
    </div>
  );
};

export default Home;
