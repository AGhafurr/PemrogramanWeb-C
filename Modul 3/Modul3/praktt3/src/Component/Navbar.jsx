import React from "react";
import { Link } from "react-router-dom";
import ilab from "./logo-ilab.png";
import GH from "./Group 11.png";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "relative",
        justifyContent: "space-between",
        backgroundColor: "#ECCDB4",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3px",
          backgroundColor: "#F0EDD4",
          borderRadius: "0 0 40px 40px",
          borderColor: "#675D50",
          borderBottomWidth: "5px",
          borderTopWidth: "0px", // Tambahkan ini
          borderLeftWidth: "0px", // Tambahkan ini
          borderRightWidth: "0px", // Tambahkan ini
          borderStyle: "solid",
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
              width: "50x",
              height: "auto",
              padding: "15px",
            }}
            src={GH}
            alt="GH"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            <span>GH</span>
            <span>DANCE</span>
            <span>ACADEMY</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",

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
            style={{
              textDecoration: "none",

              color: "black",
            }}
          >
            Contact
          </Link>

          <button
            style={{
              marginLeft: "40px",
              marginRight: "20px",
              height: "50px",
              width: "180px",
              backgroundColor: "#675D50",
              color: "#F0EDD4",
              borderRadius: "10px",
              borderColor: "#675D50",
              fontSize: "15px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            Let's Dance
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
