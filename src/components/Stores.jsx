import "@styles/Stores.scss";
import React from "react";
// Components
import Title from "@components/Title";
import Description from "@components/Description";
import StoreList from "@containers/StoreList";
import Details from "@containers/Details";

const Stores = () => {
  return (
    <section className="Stores">
      <Title size="text-2xl" align="center">
        Tiendas
      </Title>
      <Description size="text-sm">Escoge tu pizzería favorita</Description>
      <StoreList />
      <Details />
    </section>
  );
};

export default Stores;
