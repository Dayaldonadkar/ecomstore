import React from "react";
import family from "../React App_files/hero.jpg";

const About = () => {
  return (
    <div className="flex justify-center my-7">
      <div className="w-[90%] md:flex md:justify-between items-center">
        <div className="md:w-[50%] md:space-y-2">
          <div>
            <h3 className="text-[#513BEE] lg:text-lg xl:text-xl 2xl:text-2xl">
              Welcome to
            </h3>
            <h1 className="font-semibold text-5xl xl:text-6xl 2xl:text-7xl py-1">
              Dayal Store
            </h1>
          </div>
          <p className="text-xs lg:text-base py-3 pb-5 text-[#1D1D1D]/80 lg:w-[85%] xl:text-lg 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque temporibus veniam doloribus libero ad error omnis voluptates
            animi! Suscipit sapient
          </p>
          <button className="text-white px-3 xl:px-5 py-2 xl:py-3 bg-[#6254F3] shadow-lg rounded-md xl:text-lg">
            Shop Now
          </button>
        </div>
        <div className="my-10 md:w-[70%] flex justify-center items-center relative">
          <img className="md:w-[70%] z-10" src={family} alt="" />
          <div className="absolute w-[40%] h-[90%] bg-[#513BEE]/40 right-5 -top-10 xl:-top-14 xl:right-12 -z-2 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
