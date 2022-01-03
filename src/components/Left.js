import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import logo1 from "../assets/logo1.svg";
import opensea from "../assets/opensea.svg";
import info from "../assets/info.svg";

const Left = () => {
  return (
    <div className="left">
      <div className="left-container">
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
        <h2 style={{ marginTop: "2rem" }}>Shards of ETH</h2>
        <h1 style={{ marginBlock: ".5rem" }}>Level Up</h1>
        <h2 style={{ marginBlock: ".5rem" }}>#007</h2>
        <button style={{ marginBlock: "1rem" }} className="button">
        <img src={info} alt="" />  About
        </button>
        <button
          style={{ marginBlock: "1rem", display: "flex", alignItems: "center" }}
          className="button1"
        >
          <img src={opensea} alt="" /> <p>View on OpenSea</p>
        </button>
      </div>
      <img src={logo1} className="logo1" />
    </div>
  );
};

export default Left;
