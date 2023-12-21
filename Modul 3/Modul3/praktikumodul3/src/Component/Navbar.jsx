import React from "react";
import { Link } from "react-router-dom";
import ilab from "./logo-ilab.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "20px",
        }}
      >
        <img
          style={{
            width: "100px",
            height: "50px",
            padding: "15px",
          }}
          src={ilab}
          alt="ilab"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          fontWeight: "bold",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            marginRight: "20px",
            color: "black",
          }}
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          style={{ textDecoration: "none", margin: "0 20px", color: "black" }}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", marginLeft: "20px", color: "black" }}
        >
          Contact
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <button
          style={{
            marginRight: "10px",
            height: "40px",
            width: "120px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            borderWidth: "2px",
          }}
        >
          SIGN UP
        </button>
        <button
          style={{
            height: "40px",
            width: "120px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            borderColor: "blue",
          }}
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
