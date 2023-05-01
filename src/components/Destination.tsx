// import { BsArrowLeftCircle , BsArrowRightCircle} from 'react-icons/bs'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { CardProps } from "../types/destination/card";
import Card from "./destination/Card";
import { lalibela, gonder, axum, abay } from "../assets";

const destinations:CardProps[] = [
  { name: "Axum Obelics", desc: "Axum Obliesk, Arc of the covenant, ancient city building",img:axum, location: "Tigray", payment: 350, discount: 100, rating: 4.8},
  { name: "Lalibela", desc: "Rock hewen church,ancient churches, community",img:lalibela, location: "Wollo", payment: 350, discount: 100, rating: 4.8},
  { name: "Fasil Castle", desc: "Fasil Castle, 16thc castle and bridges, religious place",img:gonder, location: "Gonder", payment: 350, discount: 100, rating: 4.8},
  { name: "Tis Tis Falls", desc: "Tis tis falls, Un forgotable adventure, Blue Nile",img:abay, location: "Gojjam", payment: 350, discount: 100, rating: 4.8},
  { name: "Axum Obelics", desc: "Axum Obliesk, Arc of the covenant, ancient city building",img:axum, location: "Tigray", payment: 350, discount: 100, rating: 4.8},

] 
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

const Destination = () => {
  return (
    <div id="destination">
      <h1 className="text-center text-primaryHeading font-bold font-serif">
        Some of <span className="text-secondary">Destinations</span>
      </h1>
      <p className="text-center text-primary-text">
        Discover our fantastic early booking discounts
        <br /> & start planning your journey.{" "}
      </p>
      <Slider {...settings}>
      {/* <div className="flex gap-3"> */}
        {
          destinations.map((destination:CardProps) =><Card  {...destination} />)
        }
      {/* </div> */}
      </Slider>
      {/* <div className='flex justify-center gap-3 pt-5'>
        <BsArrowLeftCircle className = "w-7 h-7 text-primary-text cursor-pointer "/>
        <BsArrowRightCircle className= "w-7 h-7 text-primary-text cursor-pointer" />
      </div> */}
    </div>
  );
};

export default Destination;
