import "@styles/StoreItem.scss";
import React, { useContext } from "react";
// Context
import AppContext from "@context/AppContext";

const StoreItem = ({ store }) => {
  const { addStore } = useContext(AppContext);

  const handleClick = (item) => {
    addStore(item);
  };

  return (
    <div className="StoreItem" onClick={() => handleClick(store)}>
      <figure>
        <img src={store.image} alt="image test" />
      </figure>
      <div className="StoreItem__info">
        <h3 className="text-sm">{store.name}</h3>
        <address className="text-xs">{store.address}</address>
      </div>
    </div>
  );
};

export default StoreItem;
