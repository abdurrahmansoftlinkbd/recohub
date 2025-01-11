import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { title, category, image } = blog;

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full lg:w-72 xl:w-96">
      <figure className="relative">
        <img src={image} alt={category} />
        <div className="badge bg-default border-default text-white p-3 absolute bottom-4 left-5">
          {category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold font-montserrat">
          {title.slice(0, 50)}...
        </h2>
        <div className="card-actions">
          <button className="btn btn-sm bg-default border-default rounded-lg text-white hover:bg-light hover:border-light">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
