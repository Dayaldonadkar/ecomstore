import React from "react";
import { Slider } from "@material-tailwind/react";
import Sort from "../Components/Sort";
import Search from "../Components/Search";

const Products = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[90%] xl:w-[80%] sm:flex">
        <div className="my-8">
          <Search />

          <div className="pt-5">
            <div className="w-[10%]">
              <h1 className="pb-3">Price</h1>
              <Slider defaultValue={50} />
            </div>
          </div>

          <button className="bg-brown-900 text-white px-2 py-2 mt-10">
            Clear Filters
          </button>
        </div>
        <Sort />
      </div>
    </div>
  );
};

export default Products;
