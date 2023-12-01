import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Starrating = ({ rating }) => {
  const roundRating = Math.round(rating * 2) / 2;
  //   console.log(roundRating, "rating", rating);
  //   console.log(typeof roundRating);
  console.log({ length: (roundRating * 2) / 2 });
  const length = (roundRating * 2) / 2;
  console.log(length, "length");
  const stars = Array.from({ length }, (_, index) => index + 1);
  console.log(stars, "stars");
  return (
    <div className="flex">
      {stars.map((star) => (
        <svg
          key={star}
          className={`text-yellow-500 w-6 h-6 fill-current ${
            star % 5 === 0 ? "ml-1" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />{" "}
        </svg>
      ))}
      {rating}
    </div>
  );
};

export default Starrating;
