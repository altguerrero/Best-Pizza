import "@styles/Details.scss";
import React, { useContext } from "react";
// assets
import IcBack from "@icons/atras.png";
import { ProductImages } from "@components/ProductImages";
// Context
import AppContext from "@context/AppContext";
// Components
import ProductItem from "@components/ProductItem";
import ProductList from "@containers/ProductList";
import ImageTest from "@images/trulli.png";

const Details = () => {
  const { state, removeStore } = useContext(AppContext);
  const { store } = state;
  const handleClick = () => {
    removeStore();
  };

  return (
    <section className={`Details ${state.details ? "Active" : ""}`}>
      {store && (
        <div className="Details-container">
          <header className="Details-header">
            <figure className="Details-header__store">
              <img src={store.image} alt="test" />
            </figure>
            <div>
              <h2>{store.name}</h2>
              <p>{store.description}</p>
              <address>{store.address}</address>
            </div>
            <figure
              className="Details-header__back"
              onClick={() => handleClick()}
            >
              <img src={IcBack} alt="atras" />
              <figcaption className="text-xs">Volver</figcaption>
            </figure>
          </header>
          <div className="Details-content">
            <h2>Menú</h2>
            <ProductList>
              {store.products.map((product) => {
                product.image = ProductImages[product.id - 1];
                return <ProductItem product={product} />;
              })}
            </ProductList>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
