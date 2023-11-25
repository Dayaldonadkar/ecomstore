import React from "react";
import logo1 from "../React App_files/image2.png";
import logo2 from "../React App_files/image3.png";
import logo3 from "../React App_files/image4.png";
import logo4 from "../React App_files/image6.png";
import logo5 from "../React App_files/image8.png";

const Trust = () => {
  return (
    <div className="flex justify-center bg-[#F6F8FA] py-16">
      <div className="w-[90%]">
        <h1 className="flex justify-center text-xl font-medium pb-5">
          Trusted by 1000+ Companies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 place-items-center">
          <img className="w-[80%] lg:w-[60%]" src={logo1} alt="" />{" "}
          <img className="w-[80%] lg:w-[60%]" src={logo3} alt="" />
          <img className="w-[80%] lg:w-[60%]" src={logo5} alt="" />
          <img className="w-[80%] lg:w-[60%]" src={logo2} alt="" />
          <img className="w-[80%] lg:w-[60%]" src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
