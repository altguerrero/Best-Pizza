import "@styles/Title.scss";
import React from "react";

const Title = ({ children, size = "text-lg" }) => (
  <h1 className={`Title ${size}`}>{children}</h1>
);

export default Title;
