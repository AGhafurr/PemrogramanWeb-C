import React from "react";
import { Link } from "react-router-dom";
import ilab from "./logo-ilab.png";
import fbook from "./logo-facebook.png";
import instagramm from "./logo-instagram.png";
import tw from "./logo-twitter.png";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      <div style={{ margin: "20px" }}>
        <img src={ilab} alt="logoilab" height="100" width="210" />
        <p className="title-custom">Copyright &copy; 2022. Infinite Learning</p>
      </div>

      <div style={{ color: "black" }}>
        <ul style={{ listStyleType: "none" }}>
          <p style={{ color: "grey", fontSize: "18px" }}>Services</p>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Email Marketing
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Campaigns
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Branding
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Offline
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          <p style={{ color: "grey", fontSize: "18px" }}>About</p>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Our Story
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Benefits
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Team
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <a
              className="nav-link service-custom"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          <p style={{ color: "grey", fontSize: "18px" }}>Follow Us</p>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <img src={fbook} height="20" alt="Fb" className="fb" />
            <a
              className="nav-link service-custom"
              href="https://www.facebook.com/labit.umm/?locale=id_ID"
              style={{ textDecoration: "none", marginLeft: "23px" }}
            >
              Facebook
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <img src={tw} alt="Twit" height="20" />
            <a
              className="nav-link service-custom"
              href="https://twitter.com/labit_umm"
              style={{ textDecoration: "none", marginLeft: "10px" }}
            >
              Twitter
            </a>
          </li>
          <li style={{ marginTop: "10px", marginBottom: "10px" }}>
            <img src={instagramm} alt="IG" height="20" className="ig" />
            <a
              className="nav-link service-custom"
              href="https://www.instagram.com/labit.umm/"
              style={{ textDecoration: "none", marginLeft: "18px" }} // Menambahkan margin kiri antara gambar dan teks
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
