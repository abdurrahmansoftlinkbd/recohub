import PropTypes from "prop-types";
import { Users, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const RecentQueriesCards = ({ query }) => {
  const {
    _id,
    productName,
    productImage,
    queryTitle,
    userName,
    userImage,
    currentDateAndTime,
    recommendationCount,
  } = query;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <img
          src={productImage}
          alt={productName}
          className="rounded-xl h-44 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 mb-2">
          <img
            referrerPolicy="no-referrer"
            src={userImage}
            alt={userName}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">
            {userName.length > 15 ? `${userName.slice(0, 12)}...` : userName}
          </span>
        </div>
        <h3 className="card-title font-bold font-montserrat text-lg">
          {queryTitle.slice(0, 20)}...
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Clock className="w-4 h-4" />
          <span>{currentDateAndTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>{recommendationCount} recommendations</span>
        </div>
        <div className="card-actions justify-center mt-4">
          <Link
            to={`/queries/${_id}`}
            className="btn bg-default text-white border-default hover:bg-light hover:border-light btn-sm gap-2"
          >
            View Details
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

RecentQueriesCards.propTypes = {
  query: PropTypes.object,
};

export default RecentQueriesCards;
