import React from "react";
import { Link } from "react-router-dom";
import ilab from "./hero.jpg";
const Hero = () => {
  return (
    <div class="container">
      <div class="image">
        <img src={ilab} class="w-100" />
        <div class="textdiatas">
          <h1>SELAMAT DATANG</h1>
          <h2>di website Praktikum Pemrograman Website</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
