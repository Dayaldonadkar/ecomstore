import React, { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { useParams } from "react-router-dom";

const API = "https://api.pujakaitem.com/api/products";

const SinglePage = () => {
  const { getSingleProduct, singleProduct } = useGlobalContext();
  const { id } = useParams();
  console.log(id, "id");
  console.log(singleProduct, "single");
  const { name } = singleProduct;
  console.log(name, "name");

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <div>
      <p>{singleProduct.id}</p>
      <p></p>
    </div>
  );
};

export default SinglePage;
