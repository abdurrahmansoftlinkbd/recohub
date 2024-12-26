import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RecommendationsForMe = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommendationsRes = await axios.get(
          `http://localhost:5000/recommendations`
        );
        const myQueriesRes = await axios.get(
          `http://localhost:5000/myQueries/${user?.email}`
        );

        const myQueryIds = myQueriesRes.data.map((query) => query._id);
        const myRecommendations = recommendationsRes.data.filter((rec) =>
          myQueryIds.includes(rec.queryId)
        );

        setRecommendations(myRecommendations);
      } catch (error) {
        toast.error(error?.message);
      }
    };
    if (user?.email) {
      fetchData();
    }
  }, [user]);

  if (!recommendations.length) {
    return (
      <div className="hero min-h-[400px] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">No Recommendations Yet</h2>
            <p className="py-6">
              You haven’t received any recommendations for your queries.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">My Recommendations</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left">Original Query</th>
                <th className="px-4 py-3">My Recommendation</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((recommendation) => (
                <tr
                  key={recommendation?._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {recommendation?.queryTitle}
                      </span>
                      <span className="text-sm text-gray-500">
                        Product: {recommendation?.productName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        referrerPolicy="no-referrer"
                        src={recommendation?.recommendedProductImage}
                        alt={recommendation?.recommendedProductName}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {recommendation?.recommendationTitle}
                        </span>
                        <span className="text-sm text-gray-500">
                          {recommendation?.recommendedProductName}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-500">
                    {format(new Date(recommendation?.currentDateAndTime), "PP")}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <Link
                        to={`/queries/${recommendation?.queryId}`}
                        className="btn bg-default border-default hover:bg-light hover:border-light btn-sm text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsForMe;
