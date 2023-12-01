import React from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

const ListView = ({ name, price, image, description, id }) => {
  const { formattedPrice } = useGlobalContext();

  return (
    <div className="flex justify-center">
      <div className="bg-white flex flex-col border-2 w-[90%] px-5 py-3">
        <img className="w-96 h-44" src={image} alt="" />
        <div className="flex flex-col space-y-1 pt-4">
          <p>{name}</p>
          <p className="text-[#513BEE] text-sm font-light">
            {formattedPrice(price)}
          </p>
          <p className="font-light line-clamp-3 text-sm">{description}</p>
          <Link to={`/singlepage/${id}`}>
            <button className="text-[#513BEE] font-thin px-4 py-[8px] rounded-md border border-[#513BEE] mt-3">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListView;
