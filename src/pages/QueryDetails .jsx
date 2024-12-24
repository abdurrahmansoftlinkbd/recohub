import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const QueryDetails = () => {
  const { _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState(null);

  const fetchQueryDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/queries/${_id}`);
      setQuery(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchQueryDetails();
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recommendationData = {
        queryId: query._id,
        queryTitle: query.queryTitle,
        productName: query.productName,
        userEmail: query.userEmail,
        userName: query.userName,
        recommenderEmail: user.email,
        recommenderName: user.displayName,
        currentDateAndTime: format(new Date(), "PPpp"),
      };
      toast.success("Recommendation added successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container w-11/12 mx-auto my-8 font-inter">
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={query?.userImage} alt={query?.userName} />
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
                {query?.recommendationCount} recommendations
              </div>
              <h3 className="font-bold font-montserrat text-lg mb-2">
                {query?.queryTitle}
              </h3>
              <p className="text-gray-700">{query?.boycottReason}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Form */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl mb-6">Add Your Recommendation</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommendation Title</span>
              </label>
              <input type="text" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommended Product Name</span>
              </label>
              <input type="text" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Recommended Product Image URL
                </span>
              </label>
              <input type="url" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommendation Reason</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Add Recommendation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
