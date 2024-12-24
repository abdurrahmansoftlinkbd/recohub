import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyQueriesCards = ({ query }) => {
  const {
    _id,
    productName,
    productBrand,
    queryTitle,
    productImage,
    currentDateAndTime,
    boycottReason,
    recommendationCount,
  } = query;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src={productImage}
          alt={productName}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title font-montserrat text-xl">{productName}</h2>
          <p className="text-sm text-gray-500">{productBrand}</p>
          <p className="text-xs text-gray-500">Posted: {currentDateAndTime}</p>
        </div>
        <h3 className="font-semibold font-montserrat text-lg mt-2">
          {queryTitle}
        </h3>
        <div className="mt-2">
          <p
            title={boycottReason}
            className="text-sm text-gray-600 line-clamp-2"
          >
            {boycottReason}
          </p>
        </div>
        <p className=" text-gray-800">
          Recommendation Count: {recommendationCount}
        </p>
        {/* Action Buttons */}
        <div className="card-actions justify-center mt-4">
          <Link
            to={`/queries/${_id}`}
            className="btn text-white bg-default border-default hover:bg-light hover:border-light btn-sm"
          >
            View Details
          </Link>
          <Link
            to={`/update-query/${_id}`}
            className="btn text-white btn-success btn-sm"
          >
            Update
          </Link>
          <button
            onClick={() => document.getElementById("delete_modal").showModal()}
            className="btn text-white btn-error btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyQueriesCards.propTypes = {
  query: PropTypes.object,
};

export default MyQueriesCards;
