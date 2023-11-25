import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import Card from "./Card";

const SecondPart = () => {
  return (
    <div>
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

      <div className="py-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SecondPart;
