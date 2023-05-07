import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { BlogCard } from "../types/blogs/Blog"
import { blog1, blog2, blog3, blog4 } from "../assets"
import Card from "./blog/Card"
const blogs:BlogCard[]  = [
  {img: blog1, title: "The Amazing Difference a Year of Travelling .", date: "July 17 2021" }
,  {img: blog2, title: "Travel far enough, you will eventaully meet yourself.", date: "July 17 2021"}
,  {img: blog3, title: "How to hike in a trip  While Visiting Africa .", date: "July 17 2021"}
,  {img: blog4, title: "Reflections on 5 Months of Travel: Time to Hang. ", date: "July 17 2021"}
,  {img: blog3, title: "How to hike in a trip  While Visiting Africa .", date: "July 17 2021"}

] 




const Blog = () => {
  return (
    <div id="blogs" className="bg-[#F7F8FC] my-10" >
      <div className="py-7">
      <h1 className="text-center font-montserrat text-primaryHeading font-bold">
        Get Update with <span className="text-secondary">latest blog</span>
      </h1>
      </div>
      <div className="flex">
        {/* <Slider {...settings}> */}
          {blogs.map((blog:BlogCard) => <Card {...blog}/>)}
        {/* </Slider> */}
        
      </div>

    </div>
  )
}

export default Blog