import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../blogs.json")
      .then((res) => res.json())
      .then((blogsData) => setBlogs(blogsData));
  }, []);

  return (
    <div>
      <h2 className="text-center text-6xl font-bold font-montserrat">
        FROM <span className="text-default">BLOG</span>
      </h2>
      <div className="grid gap-y-7 grid-cols-1 md:grid-cols-2 md:gap-x-7 lg:grid-cols-3 mt-12">
        {blogs.map((blog, i) => (
          <Blog key={i} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
