import { createContext, useContext, useReducer, useEffect } from "react";

import FilterR from "../Reducer/FilterR";
import { useGlobalContext } from "./Context";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "",
  gridView: true,
  filter: {
    text: "",
  },
};

console.log(initialState.sorting_value);

const FilterContextProvider = ({ children }) => {
  const { products } = useGlobalContext();
  // console.log(products, "filterCon");

  const [state, dispatch] = useReducer(FilterR, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const sorting = () => {
    return dispatch({ type: "GET_SORT_VALUE" });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    console.log(name, "contextname");
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, products, state.filter]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, sorting, setListView, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
