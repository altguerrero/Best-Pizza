import "@styles/Layout.scss";
import React from "react";
// assets
import background from "@images/background.png";
// Components
import Hero from "@components/Hero";
import Content from "@components/Content";

const Layout = ({ children }) => (
  <div className="Layout" style={{ backgroundImage: `url(${background})` }}>
    <Hero />
    <Content>{children}</Content>
  </div>
);

export default Layout;
