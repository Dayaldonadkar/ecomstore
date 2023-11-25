import React from "react";
import FirstPart from "../Components/FirstPart";
import SecondPart from "../Components/SecondPart";

const Products = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]">
        <FirstPart />
        <SecondPart />
      </div>
    </div>
  );
};

export default Products;
