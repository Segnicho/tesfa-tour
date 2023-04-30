import flight from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="flex justify-between gap-2 pt-5">
      <div className="flex flex-col">
        <h1>
          Get Started your exciting <span>journey</span> with us.
        </h1>
        <p>
          A Team of experienced tourism agencies that will provide you with the
          best advice , tips and for your desire place.{" "}
        </p>
        <button>Discover Now</button>
      </div>
      <div>
        <img src={flight} alt="" className="" />
      </div>
    </div>
  );
};

export default About;
