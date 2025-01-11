import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("../reviews.json")
      .then((res) => res.json())
      .then((reviewsData) => setReviews(reviewsData));
  }, []);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase">
          What our <span className="text-default">customers</span> say
        </h2>
        <p className="text-gray-600 mt-3">
          See what our customers are saying about our recommended products.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.reviewId}
            className="card bg-white shadow-md pt-7 px-6 pb-10 rounded-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <img
                src={review.userImage}
                alt={`${review.userName}'s profile`}
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
            <div className="mt-2 flex items-center justify-center">
              <ReactStars
                count={5}
                size={24}
                value={review.rating}
                isHalf={true}
                activeColor="#ffa200"
                edit={false}
              />
            </div>
            <h4 className="text-lg font-semibold text-center font-montserrat mb-2">
              {review.reviewTitle}
            </h4>
            <p className="text-gray-600 mb-6 text-sm">
              {review.reviewDescription}
            </p>
            <div className="flex justify-center items-center">
              <h3 className="font-semibold text-sm text-gray-800 mr-1">
                {review.userName} -
              </h3>
              <p className="text-sm text-gray-500">{review.productBrand}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
