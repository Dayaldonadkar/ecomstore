import React, { useState } from "react";

const Myimage = ({ image = [{ url: "" }] }) => {
  const [img, setImg] = useState([0]);
  //   const handleImageChange = (e) => {
  //     setImg(e);
  //     console.log(e, "e");
  //   };

  return (
    <div className="space-y-3">
      <div>
        <img className="h-56 w-full" src={image[img].url} alt="" />
      </div>
      <div className="flex space-x-[1px]">
        {image.map((currEl, index) => {
          //   console.log(currEl.url, "lksa");
          return (
            <div key={index} className="">
              <div key={index}>
                <img
                  onClick={() => setImg(index)}
                  className="h-[54px]"
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
