import { useState, useEffect } from "react";

const initialState = {
  store: undefined,
  details: false,
  user: JSON.parse(localStorage.getItem("user")) || {
    id: undefined,
    name: undefined,
  },
  search: "",
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(state.user));
    } catch (error) {
      localStorage.setItem("user", JSON.stringify(state.user));
      console.log(error);
    }
  }, [state.user]);

  const addStore = (payload) => {
    setState({
      ...state,
      store: payload,
      details: true,
    });
  };

  const removeStore = () => {
    setState({
      ...state,
      store: undefined,
      details: false,
    });
  };

  const login = (payload) => {
    setState({
      ...state,
      user: { id: payload[0].id, username: payload[0].name },
    });
  };

  const logout = () => {
    setState({
      ...state,
      user: { id: undefined, name: undefined },
    });
  };

  const search = (value) => {
    setState({
      ...state,
      search: value,
    });
  };

  return {
    state,
    addStore,
    removeStore,
    login,
    logout,
    search
  };
};

export default useInitialState;
