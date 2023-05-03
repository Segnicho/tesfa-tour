import React from "react";
import { BlogCard } from "../../types/blogs/Blog";
const Card: React.FC<BlogCard> = (blog) => {
  console.log(blog);
  return (
    <div className="w-[300px] h-[300px] p-2 flex flex-col gap-3">
      <img src={blog.img} alt="" className="object-cover" />
      <h1 className="font-semibold">{blog.title}</h1>
      <span className="text-primary-text">
        <>{blog.date} </>
      </span>
    </div>
  );
};

export default Card;
