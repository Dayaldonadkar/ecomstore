import React from "react";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShieldIcon from "@mui/icons-material/Shield";

const Delivery = () => {
  return (
    <div className="flex justify-center  py-5 my-10">
      <div className="w-[90%] space-y-5 lg:space-y-0 lg:flex lg:justify-between">
        <div className="space-y-5 sm:space-y-0 sm:flex sm:justify-between lg:w-[30%] xl:w-[]">
          <div className="flex lg:flex-col lg:justify-center items-center space-x-2 lg:space-x-0 lg:space-y-2 bg-[#F6F8FA] sm:w-[50%] lg:w-[100%] py-3 px-3 rounded-xl">
            <div className="bg-white px-2 py-2 rounded-full">
              <FireTruckIcon style={{ color: "blue" }} fontSize="large" />
            </div>
            <p className="lg:text-lg">Super fast and free Delivery</p>
          </div>
          <div className="sm:w-[47%] rounded-xl  bg-[#F6F8FA] lg:hidden">
            <div className="flex items-center space-x-2 pl-3 py-5 ">
              <div className="bg-white px-2 py-2 rounded-full">
                <PersonOffIcon style={{ color: "blue" }} />
              </div>
              <p className="text-lg">Non-contact Shipping</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[30%] 2xl:w-[35%] space-y-8 xl:space-y-20 py-5">
          <div className=" rounded-xl  bg-[#F6F8FA]">
            <div className="flex items-center space-x-2 pl-3 py-5 xl:py-7">
              <div className="bg-white px-2 py-2 rounded-full">
                <PersonOffIcon style={{ color: "blue" }} />
              </div>
              <p className="text-lg">Non-contact Shipping</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-[#F6F8FA]  pl-3 py-3 xl:py-5 rounded-xl">
            <div className="bg-white px-2 py-2 rounded-full">
              <AttachMoneyIcon style={{ color: "blue" }} fontSize="large" />
            </div>
            <p className="text-lg">Money-back Guranteed</p>
          </div>
        </div>
        <div className="space-y-5 sm:space-y-0 sm:flex sm:justify-between ">
          <div className="lg:hidden w-[50%]">
            <div className="flex items-center space-x-2 bg-[#F6F8FA] lg:w-[60%] pl-3 py-3 rounded-xl">
              <div className="bg-white px-2 py-2 rounded-full">
                <AttachMoneyIcon style={{ color: "blue" }} fontSize="large" />
              </div>
              <p className="text-lg">Money-back Guranteed</p>
            </div>
          </div>

          <div className="flex lg:flex-col lg:justify-center items-center space-x-2 bg-[#F6F8FA] xl:px-5 2xl:px-16 sm:w-[47%] lg:w-[100%] pl-3 py-3 rounded-xl">
            <div className="bg-white px-2 py-2 rounded-full">
              <ShieldIcon style={{ color: "blue" }} fontSize="large" />
            </div>
            <p className="text-lg">Super Secure Payment option</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
