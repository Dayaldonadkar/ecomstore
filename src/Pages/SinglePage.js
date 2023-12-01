import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import { useParams } from "react-router-dom";
import Myimage from "../Components/Myimage";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Starrating from "../Components/Starrating";

const API = "https://api.pujakaitem.com/api/products";

const SinglePage = () => {
  const { getSingleProduct, singleProduct, formattedPrice } =
    useGlobalContext();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const {
    name,
    image,
    price,
    company,
    description,
    category,
    stock,
    reviews,
    stars,
  } = singleProduct;

  const handleAdd = () => {
    console.log(stock, "stock");
    setQuantity(quantity + 1);
  };

  //   console.log(stock, "stock");

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="w-[90%] 2xl:w-[80%] lg:flex xl:items-start  lg:justify-between">
        <Myimage image={image} />

        <div className="py-5 lg:py-0 space-y-2 lg:w-[50%] xl:w-[40%] 2xl:w-[45%] ">
          <h6 className="text-2xl capitalize">{name}</h6>
          <div className="space-x-2 ">
            <p>
              <Starrating rating={stars} />
            </p>
            <p className="pt-1">({reviews} customer reviews)</p>
          </div>
          <p className="">
            <span>MRP : </span>
            <span className="line-through">
              {formattedPrice((price * 3) / 2)}
            </span>
          </p>
          <p>
            <span className="text-[#6154F3]">
              Deal of the day : {formattedPrice(price)}
            </span>
          </p>
          <p className="text-sm font-light 2xl:w-[90%]">{description}</p>

          <div className="flex text-sm justify-between items-center py-5">
            <div className="flex flex-col items-center text-center space-y-2">
              <LocalShippingIcon />
              <p>Free Delivery</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <PublishedWithChangesIcon />
              <p>30 Days replacement</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <LocalShippingIcon />
              <p>Dayal Delivered</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <WorkspacePremiumIcon />
              <p>2 year Warranty</p>
            </div>
          </div>
          <p>Available : {stock > 0 ? "In stock" : "Out of stock"}</p>
          <p className="capitalize">Brand : {company}</p>
          <div>
            <div className="flex items-center space-x-2">
              {quantity === 1 ? (
                <button>
                  <RemoveIcon />
                </button>
              ) : (
                <button onClick={() => setQuantity(quantity - 1)}>
                  <RemoveIcon />
                </button>
              )}

              <p className="text-xl">{quantity}</p>

              {stock > quantity && quantity < 4 ? (
                <button onClick={() => handleAdd()}>
                  <AddIcon />
                </button>
              ) : (
                <button>
                  <AddIcon />
                </button>
              )}
            </div>
            <button className="bg-[#6154F3] text-white text-lg px-5 py-2 rounded-lg">
              Add to cart
            </button>

            <div className="pt-5 h-20 space-y-2">
              <p className="">
                {stock <= 10 ? <span>Only</span> : ""} {stock} {category} left
              </p>
              {quantity === 4 ? (
                <p className="text-red-800"> Max quantity reached</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
