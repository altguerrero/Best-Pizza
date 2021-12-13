import "@styles/StoreList.scss";
import React, { useContext, useState } from "react";
// Components
import StoreItem from "@components/StoreItem";
import { StoreImages } from "@components/StoreImages";
// Hooks
import useGetStores from "@hooks/useGetStores";
// Context
import AppContext from "@context/AppContext";

const API = process.env.API;

const StoreList = () => {
  const { state } = useContext(AppContext);
  const stores = useGetStores(API);
  const filterStores = stores.filter((x) => x.name.toLowerCase().includes(state.search.toLowerCase()));

  return (
    <section className="StoreList">
      {filterStores
        ? filterStores.map((store) => {
            store.image = StoreImages[store.id - 1];
            return <StoreItem store={store} key={`store${store.id}`} />;
          })
        : stores.map((store) => {
            store.image = StoreImages[store.id - 1];
            return <StoreItem store={store} key={`store${store.id}`} />;
          })}
    </section>
  );
};

export default StoreList;
