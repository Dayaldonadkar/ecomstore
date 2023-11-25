import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="bg-[#0A1436] py-5 flex justify-center">
      <div className="w-[90%] text-white">
        <div className=" space-y-3">
          <h1 className="text-white text-lg">Dayal Store</h1>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="py-8">
          <p>Subscribe to get important updates</p>
          <div className="flex pt-2">
            <input
              placeholder="Your E-mail"
              type="email"
              className="py-2 placeholder:pl-2 rounded-l-lg"
            />
            <button className="bg-[#6154F3] px-5 rounded-r-lg">
              SUBSCRIBE
            </button>
          </div>

          <div className="py-8">
            <p className="pb-3">Follow Us</p>
            <div className="flex space-x-8 items-center">
              <div className="border p-3 rounded-full">
                <InstagramIcon fontSize="medium" clas />
              </div>
              <div className="border p-3  rounded-full">
                <FacebookIcon fontSize="medium" />
              </div>
              <div className="border p-3 rounded-full">
                <LinkedInIcon fontSize="medium" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p>Call us</p>
            <p>+919423669658</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
