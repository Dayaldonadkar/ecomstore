import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import Reducer from "../Reducer/Reducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const Approvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      console.log(res);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });

      console.log("products", products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    </div>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Approvider, AppContext, useGlobalContext };
