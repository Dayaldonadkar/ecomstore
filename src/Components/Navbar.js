import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);

  const toggleHam = () => {
    setHamburger(!hamburger);
  };

  return (
    <main>
      <section>
        <div className="flex justify-between items-center px-5 lg:px-20 py-4 relative">
          <h1 className="text-4xl">
            <span>DAYAL</span>
            <span>STORE</span>
          </h1>
          <div className="hidden md:block">
            <div className="flex space-x-6 lg:space-x-10 items-center">
              <ul className="flex space-x-5  lg:space-x-7 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div onClick={toggleHam} className="md:hidden">
            {hamburger ? <DensityMediumIcon /> : <CloseIcon />}
          </div>
        </div>
        <div className="md:hidden">
          {!hamburger && (
            <div className="absolute top-0 left-0 bg-white w-[80%] py-10 pl-10 flex flex-col justify-between z-20">
              <div className="flex justify-between items-center ">
                <h1>
                  <span className="bg-blue-300">DAYAL</span>
                  <span>STORE</span>
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
      </section>
    </main>
  );
};

export default Navbar;
