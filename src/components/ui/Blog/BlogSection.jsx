import React from "react";
import BlogCard from "../../common/cards/BlogCard";
import { blogs } from '../../../utils/constant';
import Button from "../../common/buttons/Button";


const BlogSection = () => {
  return (
    <div className="w-[90%] mx-auto rounded py-16 ">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase">Our Blog</p>
        <h2 className="text-3xl font-bold text-gray-800">Our travel memories</h2>
      </div>
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
      <div className="text-center mt-8">

        <Button
          text="Search"
          onClick={() => console.log('Button clicked!')}
          className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition mt-4"
        >
          View More
        </Button>

      </div>
    </div>
  );
};

export default BlogSection;
