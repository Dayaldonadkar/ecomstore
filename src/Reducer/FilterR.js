const filterR = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      //   console.log(action.payload, "action");

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW": {
      return {
        ...state,
        gridView: true,
      };
    }

    case "SET_LIST_VIEW": {
      return {
        ...state,
        gridView: false,
      };
    }

    case "GET_SORT_VALUE": {
      let userSortValue = document.getElementById("sort");
      //   console.log(userSortValue, "userSort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value, "sortvalue");

      return {
        ...state,
        sorting_value: sort_value,
      };
    }

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      console.log("reducername", value);
      return {
        ...state,
        filter: {
          ...state.text,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color } = state.filter;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterR;
