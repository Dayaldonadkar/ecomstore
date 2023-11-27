const Reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SET_API_DATA": {
      const featureData = action.payload.filter((currElem) => {
        return currElem.featured === true;
      });
      console.log(featureData, "featureProducts");
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    }
    case "API_ERROR": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "SET_SINGLE_PRODUCT": {
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    }
  }
  return state;
};
export default Reducer;
