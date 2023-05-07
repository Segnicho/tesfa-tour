import { BsArrowLeftCircle , BsArrowRightCircle} from 'react-icons/bs'
import { Carousel } from 'react-responsive-carousel';
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
] 
const Couresel = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      stopOnHover={false}
      swipeable={true}
      emulateTouch={true}
      renderArrowPrev={(clickHandler, hasPrev, label) =>
        hasPrev && (
          <button onClick={clickHandler} title={label} className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 focus:outline-none">
            <BsArrowLeftCircle size={50} />
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext, label) =>
        hasNext && (
          <button onClick={clickHandler} title={label} className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 focus:outline-none">
            <BsArrowRightCircle size={50} />
          </button>
        )
      }
    >
      {
          destinations.map((destination:CardProps) =><Card  {...destination} />)
        }
      {/* Add carousel items here */}
    </Carousel>
  )
}

export default Couresel