import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Review } from "../../types/review/Review";

const Card: React.FC<Review> = (review) => {
  const stars = [<AiFillStar className="text-[#FFD700] w-10 h-10" />];
  return (
    <div className="flex flex-col bg-white shadow-lg gap-4 w-[300px] h-[300px] p-6">
      <div className="flex justify-center ">
        {[...Array(review.stars)].map((star, index) => (
          <AiFillStar className="text-[#FFD700] w-10 h-10" key={index} />
        ))}
      </div>
      <p>“{review.review}”</p>
      <div className="font-semibold text-center">
        {review.name} <br />
        <span className="text-primary-text">{review.country}</span>
        {/* <div className="rounded-full bg-white"> */}
        <img src={review.img} className="mx-auto mt-5" alt="" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
