import { AiOutlineMail } from "react-icons/ai"

const Subscribe = () => {
  return (
    <div>
      <div className="bg-secondary rounded-xl p-10 w-[80%] h-[300px] mx-auto">
      <h1 className="text-center text-primaryHeading text-white font-semibold font-montserrat">Subscribe and get exclusive <br /> deals & offer</h1>
      <div className="text-center pt-3 relative">
        <input type="text" placeholder="Enter your mail" className="w-[70%] p-3 rounded outline-none" />
      <button className="btn btn-md absolute top-4 right-40">Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Subscribe