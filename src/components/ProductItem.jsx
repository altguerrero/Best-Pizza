import "@styles/ProductItem.scss";
import React from "react";

import ImageTest from "@images/sbarro_pizza.png";

const ProductItem = ({ product }) => (
  <div className="ProductItem">
    <figure>
      <img src={product.image} alt="test" />
    </figure>
    <h4 className="sm__text-xs text-sm">{product.name}</h4>
  </div>
);

export default ProductItem;
