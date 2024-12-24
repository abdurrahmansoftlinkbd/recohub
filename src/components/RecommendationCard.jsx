import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RecommendationCard = ({ query }) => {
  const {
    _id,
    productImage,
    productName,
    productBrand,
    recommendationCount,
    currentDateAndTime,
    boycottReason,
    queryTitle,
  } = query || {};

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <img
          src={productImage}
          alt={productName}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title font-montserrat font-bold">
              {productName}
            </h2>
            <p className="text-sm text-gray-500">{productBrand}</p>
            <p className="text-xs text-gray-500">
              Posted: {currentDateAndTime}
            </p>
          </div>
        </div>
        <h3 className="font-bold font-montserrat mt-2">{queryTitle}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{boycottReason}</p>
        <p className=" text-gray-800">
          Recommendation Count: {recommendationCount}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/queries/${_id}`}
            className="btn text-white bg-default border-default hover:bg-light hover:border-light  btn-block"
          >
            Recommend Alternative
          </Link>
        </div>
      </div>
    </div>
  );
};

RecommendationCard.propTypes = {
  query: PropTypes.object,
};

export default RecommendationCard;
