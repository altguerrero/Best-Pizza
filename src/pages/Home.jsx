import "@styles/Home.scss";
import React from "react";

// Components
import Header from "@components/Header";
import Stores from "@components/Stores";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <main className="Home">
        <Header />
        <Stores />
        <Footer />
      </main>
    </>
  );
};

export default Home;
