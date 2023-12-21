import React from "react";
import GH from "./Group 11.png";
import { Link } from "react-router-dom";
import instagramm from "./logo-instagram.png";
import fb from "./logo-facebook.png";
import tiktok from "./tiktok.png";
import x from "./logo-twitter.png";
import ytb from "./ytb.png";

export const Footer = () => {
  return (
    <div
      style={{
        display: "relative",
        justifyContent: "space-between",
        backgroundColor: "#ECCDB4",
        width: "100%",
        height: "auto",
      }}
    >
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3px",
          backgroundColor: "#F0EDD4",
          borderRadius: "40px 40px 0 0 ",
          borderColor: "#675D50",
          borderBottomWidth: "0px",
          borderTopWidth: "5px", // Tambahkan ini
          borderLeftWidth: "0px", // Tambahkan ini
          borderRightWidth: "0px", // Tambahkan ini
          borderStyle: "solid",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Mengubah ke tata letak vertikal
            alignItems: "center", // Menyusun konten ke tengah pada layar kecil
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Membuat elemen berada di tengah secara horizontal
              alignItems: "center", // Membuat elemen berada di tengah secara vertikal
              marginLeft: "20px",
            }}
          >
            <img
              style={{
                width: "80px",
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
              marginTop: "10px",
              fontSize: "1.8vw",
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
              style={{
                textDecoration: "none",
                margin: "0 20px",
                color: "black",
              }}
            >
              Service
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
            <Link
              to="/About"
              style={{
                textDecoration: "none",
                margin: "0 20px",
                color: "black",
              }}
            >
              About
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontFamily: "serif",
              marginTop: "10px",
              textAlign: "center",
              padding: " 0 20vw",
              fontSize: "1.5vw",
            }}
          >
            <p>
              We are a talent agency dedicated to assisting our artists in
              securing professional opportunities worldwide through our reliable
              network.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2vw",
              width: "100vw",
            }}
          >
            <div
              style={{
                width: "35vw",
                height: "80px",
                background: "#675D50",
                borderTopRightRadius: "50px",
                marginRight: "5vw",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30vw",
                }}
              >
                <dev
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "none",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <button
                    className="nav-link service-custom"
                    style={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={instagramm}
                      alt="IG"
                      height="30vw"
                      className="ig"
                    />
                  </button>
                </dev>

                <li
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "none",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <img src={fb} alt="IG" height="20vw" className="ig" />
                  <a
                    className="nav-link service-custom"
                    href="https://www.instagram.com/labit.umm/"
                    style={{
                      textDecoration: "none",
                    }}
                  ></a>
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "none",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <img src={tiktok} alt="IG" height="20vw" className="ig" />
                  <a
                    className="nav-link service-custom"
                    href="https://www.instagram.com/labit.umm/"
                    style={{
                      textDecoration: "none",
                    }}
                  ></a>
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "none",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <img src={x} alt="IG" height="20vw" className="ig" />
                  <a
                    className="nav-link service-custom"
                    href="https://www.instagram.com/labit.umm/"
                    style={{
                      textDecoration: "none",
                    }}
                  ></a>
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "none",
                    marginLeft: "10px",
                  }}
                >
                  <img src={ytb} alt="IG" height="20vw" className="ig" />
                  <a
                    className="nav-link service-custom"
                    href="https://www.instagram.com/labit.umm/"
                    style={{
                      textDecoration: "none",
                    }}
                  ></a>
                </li>
              </div>
            </div>
            <div
              style={{
                width: "35vw",
                height: "80px",
                background: "#675D50",
                borderTopLeftRadius: "50px",
                marginLeft: "2vw",
                position: "static",
              }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
