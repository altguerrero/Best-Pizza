import "@styles/Title.scss";
import React from "react";

const Title = ({ children, size = "text-lg", align = "left"}) => (
  <h1 className={`Title ${size}`} style={{textAlign: `${align}`}}>{children}</h1>
);

export default Title;
