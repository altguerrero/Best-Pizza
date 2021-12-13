import "@styles/Footer.scss";
import React from "react";
// Assets
import { Facebook, Instagram } from "@components/IconsSVG";
import Logo from "@images/logo-best-pizza.png";

const Footer = () => (
  <footer className="Footer">
    <div className="Social">
      <a
        href="https://www.facebook.com/pages/category/Restaurant/Best-pizza-104491097952935/"
        target="_blank"
        rel="nofollow noopener"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/bestpizzaarmenia"
        target="_blank"
        rel="nofollow noopener"
      >
        <Instagram />
      </a>
    </div>
    <figure className="Logo">
      <a href="/">
        <img src={Logo} alt="Logo rest pizza" />
      </a>
    </figure>
  </footer>
);

export default Footer;
