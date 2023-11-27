import React, { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { useParams } from "react-router-dom";
import Myimage from "../Components/Myimage";

const API = "https://api.pujakaitem.com/api/products";

const SinglePage = () => {
  const { getSingleProduct, singleProduct } = useGlobalContext();
  const { id } = useParams();

  console.log(singleProduct, "single");
  const { name, image } = singleProduct;
  console.log(image, "image");

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <div className="flex justify-center">
      <Myimage image={image} />
    </div>
  );
};

export default SinglePage;
