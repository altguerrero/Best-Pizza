import "@styles/Hero.scss";
import React from "react";

import HeroImage from "@images/Pizza.png";

const Hero = () => (
  <figure className="Hero">
    <img src={HeroImage} alt="pizza" />
  </figure>
);

export default Hero;
