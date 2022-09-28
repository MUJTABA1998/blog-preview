import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ index, blog, getParaGraphs, getImages }) => {
  // console.log(getImages(index));
  // console.log("Blog...", blog);
  return (
    <div
      key={index}
      className="grid w-full max-w-3xl mx-auto h-auto sm:h-[200px]   relative  grid-cols-2 gap-x-7"
    >
      <Link to={`/blog/${blog._id}`} className="w-[110%] ">
        <h2 className="text-[15px] sm:text-[20px]">{blog.title}</h2>
        <div className="mt-3 ">
          <p className="text-[12px] sm:text-[16px] mb-10 sm:mb-0 tracking-wider text-gray-700 font-[300]">
            {getParaGraphs(index).slice(0, 200)}{" "}
            <Link className="text-sm text-indigo-600" to={`/blog/${blog._id}`}>
              Read more
            </Link>
          </p>
        </div>
        <div className="absolute flex items-center gap-4 mt-0 sm:mt-6 ">
          <h6 className="text-xs text-gray-400 font-main">
            Posted on {blog.postedOn}
          </h6>
          <BsBookmarkPlus className="text-gray-400" />
          <FaShare className="text-gray-400" />
        </div>
      </Link>
      <div className="w-[100%] flex justify-end items-start">
        <img
          src={getImages(index)}
          alt={index}
          key={index}
          className="max-w-[140px] h-[80px] sm:max-w-[220px] sm:h-[130px] object-cover rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default BlogCard;
