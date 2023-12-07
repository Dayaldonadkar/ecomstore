import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Link } from "react-router-dom";
import Card from "./Card";
import ListView from "./ListView";

const Sort = () => {
  const { filter_products, sorting, gridView, setGridView, setListView } =
    useFilterContext();
  // console.log(filter_products, "filter");
  console.log(gridView, "grid");

  return (
    <div>
      <div className="my-5 sm:my-8">
        <div className="flex justify-between">
          <div className="flex">
            <div onClick={setGridView}>
              <GridViewIcon />
            </div>
            <div onClick={setListView}>
              <ViewListIcon />
            </div>
          </div>
          <p className="font-light">
            {filter_products.length} Products Available
          </p>
          <div className="text-sm font-light ">
            <form action="#">
              <label htmlFor="sort"></label>
              <select name="sort" id="sort" onClick={sorting}>
                <option value="lowest">lowest</option>
                <option value="highest">highest</option>
                <option value="a-z">Price(a-z)</option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </form>
          </div>
        </div>
        {gridView && (
          <div className="py-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {filter_products.map((currElem) => {
              const { id } = currElem;
              return (
                <div className="py-2">
                  <Link to={`/singlepage/${id}`}>
                    <Card {...currElem} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {gridView === false && (
          <div className="py-5">
            {filter_products.map((currElem) => {
              const { id } = currElem;
              return (
                <div className="py-2">
                  <ListView {...currElem} id={id} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
