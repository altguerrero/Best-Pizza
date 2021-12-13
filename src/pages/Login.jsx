import "@styles/Login.scss";
import React, { useRef, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// Components
import Logo from "@components/Logo";
import Title from "@components/Title";
import Description from "@components/Description";
// Assets
import IcUser from "@icons/ic_user.png";
import IcPassword from "@icons/ic_password.png";
// Context
import AppContext from "@context/AppContext";

const API = process.env.API;

const Login = () => {
  const { login } = useContext(AppContext);
  const [error, setError] = useState(false);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios(API);
    const users = response.data.response.users;
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const validUser = users.filter(
      (x) => x.name === data.username || x.email === data.username && x.password === data.password
    );

    if (validUser.length === 1) {
      login(validUser);
      history.push({ pathname: "/" });
    } else {
      setError(true);
      form.current.reset();
    }
  };

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
        <form action="/" className="Form" ref={form}>
          <label className="Form__label">
            <figure className="Form__icon">
              <img src={IcUser} alt="usuario" />
            </figure>
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              className="Form__input"
            />
          </label>
          <label className="Form__label">
            <figure className="Form__icon">
              <img src={IcPassword} alt="usuario" />
            </figure>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="Form__input"
            />
          </label>
          {error && (
            <div className="Error">
              <p className="text-sm">El usuario o contraseña que ingresaste no está conectado a una cuenta.</p>
            </div>
          )}
          <a href="/" className="Form__link text-md">
            ¿Olvidaste tu contraseña?
          </a>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn-primary btn-login"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
