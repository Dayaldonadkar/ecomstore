import React from "react";
import { useFilterContext } from "../context/FilterContext";

const Search = () => {
  const {
    filter: { text, category },
    all_products,
    updateFilterValue,
  } = useFilterContext();
  console.log(text, "text");

  const getUniqueData = (data, property) => {
    let newVal = data.map((currELem) => {
      // console.log(data);

      return currELem[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
    // console.log(newVal);
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

      <div className="my-7">
        <h1 className="text-lg">Category</h1>
        <ul className="text-sm font-light py-2 space-y-2"> </ul>
        {categoryOnlyData.map((currELem, index) => {
          return (
            <div>
              <button
                type="button"
                name="category"
                onClick={updateFilterValue}
                value={currELem}
              >
                {currELem}
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h1 className="text-lg">Company</h1>
        <div className="w-10">
          <select label="Select Version">
            <option>All</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Dell</option>
            <option>Nokia</option>
            <option>Asus</option>
            <option>Lenovo</option>
            <option>Rolex</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
