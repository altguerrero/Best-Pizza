import "@styles/Logo.scss";
import React from "react";
// assets
import LogoImage from "@images/Login-Best-Pizza.png";

const Logo = () => (
  <figure className="Logo">
    <img src={LogoImage} alt="Rest Pizza"></img>
  </figure>
);

export default Logo;
