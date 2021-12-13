import "@styles/Description.scss";
import React from "react";

const Description = ({ children, size = "text-md" }) => (
  <p className={`Description ${size}`}>{children}</p>
);

export default Description;
