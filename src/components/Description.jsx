import "@styles/Description.scss";
import React from "react";

const Description = ({ children, size = "text-md", align = "left" }) => (
  <p className={`Description ${size}`} style={{ textAlign: `${align}` }}>
    {children}
  </p>
);

export default Description;
