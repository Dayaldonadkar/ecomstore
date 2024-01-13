import React from "react";
import { useGlobalContext } from "../context/Context";

const Card = ({ name, price, image }) => {
  const { formattedPrice } = useGlobalContext();

  return (
    <div className="bg-white px-5 sm:px-3 pt-5 sm:pt-3 pb-2 sm:pb-1 rounded-lg mx-2 cursor-pointer hover:scale-105 transition duration-150">
      <img className="" src={image} alt="" />
      <div className="flex justify-between pt-2">
        <p>{name}</p>
        <p className="text-[#513BEE]">{formattedPrice(price)}</p>
      </div>
    </div>
  );
};

export default Card;
