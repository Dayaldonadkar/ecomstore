import React from "react";
import { useFilterContext } from "../context/FilterContext";

const Search = () => {
  const {
    filter: { text },
    all_products,
    updateFilterValue,
  } = useFilterContext();
  console.log(text, "text");

  const getUniqueData = (data, property) => {
    let newVal = data.map((currELem) => {
      // console.log(data);
      console.log(property, "property");
      return currELem[property];
    });
    console.log(newVal);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <div>
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="SEARCH PRODUCT"
          onChange={updateFilterValue}
          className="border border-[#182B3A] placeholder:pl-2 placeholder:text-sm w-[70%] rounded-md"
        />
      </form>
    </div>
  );
};

export default Search;
