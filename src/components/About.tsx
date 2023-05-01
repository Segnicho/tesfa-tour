import flight from "../assets/about.png";
import googleMap from "../assets/google-map.png";
import { AiOutlineDown } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div id="about" className="flex  gap-0 pt-5">
        <div className="flex flex-col justify-start px-auto gap-4">
          <h1 className="font-bold text-primaryHeading tracking-wide font-serif">
            Get Started your <br /> exciting{" "}
            <span className="text-secondary">journey</span>
            <br /> with us.
          </h1>
          <p className="text-primary-text">
            A Team of experienced tourism agencies that will <br /> provide you
            with the best advice, tips and for <br /> your desire place.{" "}
          </p>
          <div className="">
            <button className="text-secondary bg-white border border-secondary rounded-md px-4 py-2">
              Discover Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={flight} alt="" className="pl-0" />
        </div>
        <div className="p-2 flex gap-1 my-auto shadow-md rounded-sm ">
          <img src={googleMap} alt="" className="w-10 h-10 my-auto" />
          <div>
            <h1 className="text-md">Explore</h1>
            <p className="text-sm">Every corner of <br /> the world with us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 shadow-md bg-white mt-10 w-[80%] mx-auto py-8">
        <div>
          <div className="text-md font-semibold flex">
            Location
            <span className="pl-1 pt-1">
              <AiOutlineDown />
            </span>
          </div>
          <p>where are you going</p>
        </div>
        <div>
          <div className="text-md font-semibold flex">
            Date
            <span className="pl-1 pt-1">
              <AiOutlineDown />
            </span>
          </div>
          <p>when will you go</p>
        </div>
        <div>
          <div className="text-md font-semibold flex">
            Gusests
            <span className="pl-1 pt-1">
              <AiOutlineDown />
            </span>
          </div>
          <p>Number of guests</p>
        </div>

        <button className="btn btn-md">Explore Now</button>
      </div>
    </>
  );
};

export default About;
