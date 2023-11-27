import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import Card from "./Card";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

const SecondPart = () => {
  const { products, isLoading } = useGlobalContext();
  console.log("pro", products);

  return (
    <div className="my-5 sm:my-8">
      <div className="flex justify-between">
        <div className="flex">
          <GridViewIcon />
          <ViewListIcon />
        </div>
        <p className="font-light">12 Products Available</p>
        <div className="text-sm font-light border border-black">
          <select label="Select Version">
            <option>Price(lowest)</option>
            <option>Price(highest)</option>
            <option>Price(a-z)</option>
            <option>Price(z-a)</option>
          </select>
        </div>
      </div>

      <div className="py-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((currElem) => {
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
    </div>
  );
};

export default SecondPart;
