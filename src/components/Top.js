import React from "react";
import logo from "../assets/logo.svg";
import CopyContainer from "./CopyContainer";

const Top = () => {
  return (
    <div className="top">
          <img src={logo} className="logo"  alt="no_image" />
          <CopyContainer />
    </div>
  );
};

export default Top;
