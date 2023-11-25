import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  const toggleHam = () => {
    setHamburger(!hamburger);
  };

  return (
    <main className="flex justify-center">
      <section className="flex justify-between w-[90%] sm:w-[92%] items-center space-x- sm:spce-x-0">
        <div className="flex justify-between items-center sm:px-0 sm:w-[80%] lg:w-[85%] py-4 relative">
          <h1 className="text-3xl font-semibold border-2 border-black py-2 px-1">
            <span className="bg-[#5271FF] text-white  px-2 py-1">DAYAL</span>
            <span className="pl-2">STORE</span>
          </h1>
          <div className="hidden md:block">
            <div className="flex space-x-6 lg:space-x-10 items-center">
              <ul className="flex space-x-5  lg:space-x-7 text-sm">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          {!hamburger && (
            <div className="absolute top-0 left-0 bg-white w-[80%] h-full py-10 pl-10 flex flex-col justify-between z-20">
              <div className="flex justify-between items-center ">
                <h1 className="text-3xl font-semibold border-2 border-black py-2 px-1">
                  <span className="bg-[#5271FF] text-white  px-2 py-1">
                    DAYAL
                  </span>
                  <span className="pl-2">STORE</span>
                </h1>
                <div onClick={() => toggleHam(false)}>
                  <CloseIcon />
                </div>
              </div>
              <ul className="space-y-7 py-28">
                <li className="hover:underline">Home</li>
                <li className="hover:underline">About</li>
                <li className="hover:underline">Product</li>
                <li className="hover:underline">Contact</li>
              </ul>
              <div className="flex text-black flex-col space-y-3 w-[90%]">
                <button className="border border-black py-3 rounded-full hover:text-white hover:bg-black">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
        <div onClick={toggleHam} className="md:hidden">
          {hamburger ? <DensityMediumIcon /> : <CloseIcon />}
        </div>
      </section>
    </main>
  );
};

export default Navbar;
