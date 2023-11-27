import React from "react";

const Myimage = ({ image }) => {
  console.log(image, "image2");
  return (
    <div>
      <div className="w-[90%] flex space-x-[1px]">
        {image.map((currEl, index) => {
          console.log(currEl.url, "lksa");
          return (
            <div key={index}>
              <img src={currEl.url} alt="currEl.url" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myimage;
