import { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const QueryDetails = () => {
  const { _id } = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const fetchQueryDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/queries/${_id}`);
      setQuery(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/recommendations/`
      );
      setRecommendations(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchQueryDetails();
    fetchRecommendations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (user?.email === query?.userEmail) {
      toast.error("You cannot recommend alternatives to your own query!");
      return;
    }
    try {
      const recommendationData = {
        recommendationTitle: form.recommendationTitle.value,
        recommendedProductName: form.recommendedProductName.value,
        recommendedProductImage: form.recommendedProductImage.value,
        recommendationReason: form.recommendationReason.value,
        queryId: query._id,
        queryTitle: query.queryTitle,
        productName: query.productName,
        userEmail: query.userEmail,
        userName: query.userName,
        recommenderEmail: user?.email,
        recommenderName: user?.displayName,
        recommenderImage: user?.photoURL,
        currentDateAndTime: format(new Date(), "PPpp"),
      };
      await axios.post(
        "http://localhost:5000/recommendations",
        recommendationData
      );

      fetchQueryDetails();
      fetchRecommendations();

      form.reset();
      toast.success("Recommendation added successfully!");
      navigate("/queries");
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <div className="container w-11/12 mx-auto my-8 font-inter">
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={query?.userImage}
                  alt={query?.userName}
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">{query?.userName}</h3>
              <p className="text-sm text-gray-500">{query?.userEmail}</p>
              <p className="text-xs text-gray-400">
                Posted on: {query?.currentDateAndTime}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={query?.productImage}
                alt={query?.productName}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="card-title text-2xl font-bold font-montserrat mb-2">
                {query?.productName}
              </h2>
              <p className="text-gray-600 mb-2">Brand: {query?.productBrand}</p>
              <div className="badge text-white bg-default border-default mb-4">
                {query?.recommendationCount || 0} recommendations
              </div>
              <h3 className="font-bold font-montserrat text-lg mb-2">
                {query?.queryTitle}
              </h3>
              <p className="text-gray-700">{query?.boycottReason}</p>
            </div>
          </div>
        </div>
      </div>

      {recommendations.length > 0 ? (
        <div className="card bg-base-100 mb-8 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-6">All Recommendations</h2>
            <div className="space-y-6">
              {recommendations.map((recommendation) => (
                <div key={recommendation._id} className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={recommendation.recommenderImage}
                          alt={recommendation.recommenderName}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {recommendation.recommenderName}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {recommendation.currentDateAndTime}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2">
                    {recommendation.recommendationTitle}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <img
                      src={recommendation.recommendedProductImage}
                      alt={recommendation.recommendedProductName}
                      className="rounded-lg w-full object-cover h-48"
                    />
                    <div>
                      <h5 className="font-semibold mb-2">
                        {recommendation.recommendedProductName}
                      </h5>
                      <p className="text-gray-700">
                        {recommendation.recommendationReason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {user?.email !== query?.userEmail ? (
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold font-montserrat mb-6">
              Add Your Recommendation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="md:flex md:gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold font-montserrat">
                      Recommendation Title
                    </span>
                  </label>
                  <input
                    type="text"
                    name="recommendationTitle"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold font-montserrat">
                      Recommended Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="recommendedProductName"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-montserrat">
                    Recommended Product Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="recommendedProductImage"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-montserrat">
                    Recommendation Reason
                  </span>
                </label>
                <textarea
                  name="recommendationReason"
                  className="textarea textarea-bordered h-24"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-block text-white bg-default border-default hover:bg-light hover:border-light font-montserrat font-bold"
              >
                Add Recommendation
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="alert alert-info bg-error border-error shadow-lg mb-8">
          <div className="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>You cannot add recommendations to your own query.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryDetails;
