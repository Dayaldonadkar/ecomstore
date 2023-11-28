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
    isSingleLoading: false,
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      // console.log(res);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });

      // console.log("products", products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log(error);
    }
  };

  const getSingleProduct = async (API) => {
    try {
      const res = await axios.get(API);
      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log(error);
    }
  };
  // const getSingleProduct = async (url) => {
  //   dispatch({ type: "SET_SINGLE_LOADING" });
  //   try {
  //     const res = await axios.get(url);
  //     const singleProduct = await res.data;
  //     dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  //   } catch (error) {
  //     dispatch({ type: "SET_SINGLE_ERROR" });
  //   }

  // };

  const formattedPrice = (price) =>
    Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <AppContext.Provider
        value={{ ...state, getSingleProduct, formattedPrice }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Approvider, AppContext, useGlobalContext };
