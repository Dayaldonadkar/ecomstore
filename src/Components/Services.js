import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

const Services = () => {
  const { featureProducts } = useGlobalContext();
  return (
    <div className="flex justify-center bg-[#F6F8FA] py-5">
      <div className="w-[90%] xl2:w-[80%]">
        <p className="text-[#513BEE]">Check Now!</p>
        <h1 className="font-semibold text-3xl xl:text-4xl 2xl:text-2xl pb-3">
          Our Feature Services
        </h1>

        <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 md:gap-x-10">
          {featureProducts.map((currElem) => {
            const { id } = currElem;
            return (
              <Link to={`/singlepage/${id}`}>
                <Card {...currElem} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
