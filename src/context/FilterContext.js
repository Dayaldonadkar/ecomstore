import { createContext, useContext, useReducer, useEffect } from "react";

import FilterR from "../Reducer/FilterR";
import { useGlobalContext } from "./Context";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "",
};
const FilterContextProvider = ({ children }) => {
  const { products } = useGlobalContext();
  // console.log(products, "filterCon");

  const [state, dispatch] = useReducer(FilterR, initialState);

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    console.log("hi");
    console.log(state.sorting_value, "sortingvalue");
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
