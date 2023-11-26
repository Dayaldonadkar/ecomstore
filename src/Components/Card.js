import React from "react";

const Card = ({ name, price, image }) => {
  const options = { maximumFractionDigits: 0 };
  const formattedPrice = Intl.NumberFormat("en-US", options).format(price);
  return (
    <div className="bg-white px-5 sm:px-3 pt-5 sm:pt-3 pb-2 sm:pb-1 rounded-lg mx-2">
      <img src={image} alt="" />
      <div className="flex justify-between pt-2">
        <p>{name}</p>
        <p className="text-[#513BEE]">₹{formattedPrice}</p>
      </div>
    </div>
  );
};

export default Card;
