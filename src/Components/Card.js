import React from "react";

const Card = () => {
  return (
    <div className="bg-white px-5 sm:px-3 pt-5 sm:pt-3 pb-2 sm:pb-1 rounded-lg mx-2">
      <img
        src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="flex justify-between pt-2">
        <p>Iphone X</p>
        <p className="text-[#513BEE]">60,000</p>
      </div>
    </div>
  );
};

export default Card;
