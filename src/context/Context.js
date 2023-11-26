import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const Approvider = ({ children }) => {
  const API = "https://api.pujakaitem.com/api/products";
  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      console.log(res);
      const products = await res.data;
      console.log("products", products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ name: "dayal" }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Approvider, AppContext, useGlobalContext };
