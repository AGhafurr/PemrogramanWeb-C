import React from "react";
import dancee from "./wepik-hand-drawn-dance-school-class-poster-20231002143920mKE1.png";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#ECCDB4" }}>
      <Navbar />
      <div
        style={{
          backgroundColor: "#ECCDB4",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "serif",
              padding: "20px",
              fontSize: "3vw",
              width: "100%",
              textAlign: "center",
              fontFamily: "Unlock",
            }}
          >
            <span>EMPOWERING</span>
            <span>Artists Globally</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "serif",
              padding: "20px",
              fontSize: "2vw",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span>We are a talent agency dedicated to assisting our</span>
            <span>artists in securing professional opportunities </span>
            <span>worldwide through our reliable network.</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1vw",
            }}
          >
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
              }}
            >
              Let's Dance
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              padding: "1vw",
            }}
          >
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
              }}
            >
              Book An Artist
            </button>
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
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              paddingTop: "1px",
              display: "flex",
              justifyContent: "center",
            }}
            src={dancee}
            alt="dance"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
