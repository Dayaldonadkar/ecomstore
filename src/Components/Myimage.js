import React, { useState } from "react";

const Myimage = ({ image = [{ url: "" }] }) => {
  const [img, setImg] = useState([0]);
  const handleImageChange = (e) => {
    setImg(e);
    console.log(e);
  };
  console.log(image, "image2");
  return (
    <div className="space-y-3">
      <div className="flex space-x-[1px]">
        {image.map((currEl, index) => {
          console.log(currEl.url, "lksa");
          return (
            <div className="">
              <div key={index}>
                <img
                  onClick={() => handleImageChange(index)}
                  className="h-[54px]"
                  src={currEl.url}
                  alt="currEl.url"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <img src={image[img].url} alt="" />
      </div>
    </div>
  );
};

export default Myimage;
