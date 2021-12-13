import "@styles/Hero.scss";
import React from "react";
// assets
import HeroImage from "@images/Pizza.png";
import Logo from "@images/Logo.png";
// hooks
import useAuth from "@hooks/useAuth";

const Hero = () => {
  const user = useAuth();

  return (
    <figure className="Hero">
      <img className="Hero__background" src={HeroImage} alt="pizza" />
      {user.id && (
        <a href="/">
          <img className="Hero__logo" src={Logo} alt="pizza" />
        </a>
      )}
    </figure>
  );
};

export default Hero;
