import React from "react";
import plane from "../assets/plane.png";
import Card from "./offerings/Card";
import { CardProps } from "../types/offerings/card";
import { pack,plan, insurance } from "../assets";
import Slider from "react-slick";

const offerings: CardProps[] = [
  { title: "Package", img: pack , desc: "we provide package of Hotel , Food,    Transport , tour-guidance" }
  ,{ title: "Planning your travel", img: plan , desc: "we provide  a plan for your travel with sufficient information of city" }
  ,{ title: "Insurance", img: insurance , desc: "we provide Safe and Secure trip for yourself and for your family." }
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};


const Offerings = () => {
  return (
    <div className="bg-[#F7F8FC] mt-5 relative">
      <div>
        <h1 className="text-center font-bold text-primaryHeading tracking-wide font-serif">
          Things you will get <span className="text-secondary"> from US </span>
        </h1>
        <p className="text-center text-primary-text">
          We ensure that you’ll embark on a perfectly planned,
          <br /> safe vacation at a price you can afford.{" "}
        </p>
        <img src={plane} alt="" className="absolute top-5 right-5" />
      </div>
      {/* <div className="flex gap-3 justify-center pt-5"> */}
      <Slider {...settings}>

        {
          offerings.map(offering => <Card title={offering.title} img ={offering.img} desc={offering.desc}/>)
        }
        </Slider>
      {/* </div> */}
    </div>
  );
};

export default Offerings;
