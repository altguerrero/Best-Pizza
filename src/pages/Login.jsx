import "@styles/Login.scss";
import React from "react";
// Components
import Logo from "@components/Logo";
import Title from "@components/Title";
import Description from "@components/Description";
// Assets
import IcUser from "@icons/ic_user.png";
import IcPassword from "@icons/ic_password.png";

const Login = () => {
  return (
    <section className="Login">
      <div className="Login-container">
        <Logo />
        <Title size="text-4xl" align="center">
          Bienvenido
        </Title>
        <Description size="text-xl" align="center">
          A las mejores pizzas del país
        </Description>
        <form action="/" className="Form">
          <label className="Form__label">
            <figure className="Form__icon">
              <img src={IcUser} alt="usuario" />
            </figure>
            <input type="text" placeholder="Usuario" className="Form__input" />
          </label>
          <label className="Form__label">
            <figure className="Form__icon">
              <img src={IcPassword} alt="usuario" />
            </figure>
            <input
              type="password"
              placeholder="Contraseña"
              className="Form__input"
            />
          </label>
          <a href="/" className="Form__link text-md">
            ¿Olvidaste tu contraseña?
          </a>
          <button class="btn-primary btn-login">Iniciar sesión</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
