import "@styles/Header.scss";
import React, { useContext } from "react";
// Assets
import IcCandado from "@icons/ic_candado.png";
import Lupa from "@icons/lupa.png";
// Context
import AppContext from "@context/AppContext";

const Header = () => {
  const { logout, search } = useContext(AppContext);

  const handleClick = () => {
    logout();
  };

  const handleChange = (e) => {
    search(e.target.value);
  };

  return (
    <header className="Header">
      <h2 className="text-sm">Pizzerías</h2>
      <div className="Header-actions">
        <button onClick={() => handleClick()} href="#" className="Logout text-xs">
          <figure>
            <img src={IcCandado} alt="salir" />
          </figure>
          Salir
        </button>
        <div className="Search">
          <input
            onChange={handleChange}
            type="search"
            className="text-sm"
            placeholder="Buscar en Best pizza"
          />
          <img src={Lupa} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
