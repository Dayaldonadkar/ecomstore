const filterR = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      //   console.log(action.payload, "action");

      return {
        ...state,
        filter_products: [...action.payload],
      };

    case "GET_SORT_VALUE": {
      let userSortValue = document.getElementById("sort");
      //   console.log(userSortValue, "userSort");
      let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sortValue, "sortvalue");

      return {
        ...state,
        sorting_value: sortValue,
      };
    }

    default:
      return state;
  }
};

export default filterR;
