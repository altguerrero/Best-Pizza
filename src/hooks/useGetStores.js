import { useEffect, useState } from "react";
import axios from "axios";

const useGetStores = (API) => {
  const [stores, setStores] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setStores(response.data.response.stores);
  }, []);

  return stores;
};

export default useGetStores;
