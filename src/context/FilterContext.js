import { createContext, useContext, useReducer, useEffect } from "react";

import FilterR from "../Reducer/FilterR";
import { useGlobalContext } from "./Context";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "",
  gridView: true,
};
const FilterContextProvider = ({ children }) => {
  const { products } = useGlobalContext();
  // console.log(products, "filterCon");

  const [state, dispatch] = useReducer(FilterR, initialState);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };
  const sorting = () => {
    return dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(() => {
    console.log("hi");
    console.log(state.sorting_value, "sortingvalue");
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, sorting, setListView }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
