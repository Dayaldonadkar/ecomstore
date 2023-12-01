import React, { useState } from "react";

const Myimage = ({ image = [{ url: "" }] }) => {
  const [img, setImg] = useState([0]);
  //   const handleImageChange = (e) => {
  //     setImg(e);
  //     console.log(e, "e");
  //   };

  return (
    <div className="space-y-3 xl:space-y-0 lg:w-[45%] xl:w-[50%] xl:flex xl:flex-row-reverse xl:items-center">
      <div className="xl:w-[90%]">
        <img
          className="h-56 sm:h-96  2xl:h-96 w-full xl:w-full 2xl:w-[95%]"
          src={image[img].url}
          alt=""
        />
      </div>
      <div className="flex xl:flex-col space-x-[1px] xl:space-x-0 sm:space-x-2 2xl:space-y-2 justify-between 2xl:justify-start 2xl:pr-2">
        {image.map((currEl, index) => {
          //   console.log(currEl.url, "lksa");
          return (
            <div key={index} className="">
              <div key={index} className="">
                <img
                  onClick={() => setImg(index)}
                  className="h-[54px] sm:w-44 sm:h-24 2xl:w-48 2xl:h-28"
                  src={currEl.url}
                  alt="currEl.url"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myimage;
