const filterR = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      //   console.log(action.payload, "action");

      return {
        ...state,
        filter_products: [...action.payload],
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
      let tempSortData = [...action.payload];

      if (state.sorting_value === "lowest") {
        const sortingPro = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortData.sort(sortingPro);
      }
      if (state.sorting_value === "highest") {
        const sortingPro = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortData.sort(sortingPro);
      }

      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sorting_value === "z-a") {
        newSortData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      // if (state.sorting_value === "lowest") {
      //   const sortingProducts = tempSortData.sort((a, b) => {
      //     return a.price - b.price;
      //   });
      //   newSortData = tempSortData.sort(sortingProducts);
      // }

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default filterR;
