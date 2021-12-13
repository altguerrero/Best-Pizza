import { useContext } from "react";
import AppContext from "@context/AppContext";

export default function useAuth() {
  const { state } = useContext(AppContext);

  return state.user;
}
