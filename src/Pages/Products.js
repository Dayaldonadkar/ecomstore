import React from "react";
import { Slider } from "@material-tailwind/react";
import Sort from "../Components/Sort";
import Search from "../Components/Search";

const Products = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[90%] sm:flex">
        <div className="my-8">
          <Search />

          <div className="my-7">
            <h1 className="text-lg">Category</h1>
            <ul className="text-sm font-light py-2 space-y-2">
              <li>All</li>
              <li>Mobile</li>
              <li>Laptop</li>
              <li>Computer</li>
              <li>Accesories</li>
              <li>Watch</li>
            </ul>
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
