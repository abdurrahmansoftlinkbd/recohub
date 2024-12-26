import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { format } from "date-fns";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `https://b10-a11-product-recommendation-system-server.vercel.app/myRecommendations/${user?.email}`
      );
      setRecommendations(data);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const handleDelete = (recommendationId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            axios.delete(
              `https://b10-a11-product-recommendation-system-server.vercel.app/recommendations/${recommendationId}`
            );
            // await fetchRecommendations();
            Swal.fire({
              title: "Deleted!",
              text: "Your recommendation has been deleted.",
              icon: "success",
            });
            const remainingRecommendations = recommendations.filter(
              (recommendation) => recommendation._id !== recommendationId
            );
            setRecommendations(remainingRecommendations);
          } catch (err) {
            toast.error(err?.message);
          }
        }
      });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  if (recommendations.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Recommendations Found
        </h2>
        <p className="text-gray-500">
          You haven’t made any recommendations yet.
        </p>
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
                  key={recommendation._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {recommendation.queryTitle}
                      </span>
                      <span className="text-sm text-gray-500">
                        Product: {recommendation.productName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        referrerPolicy="no-referrer"
                        src={recommendation?.recommendedProductImage}
                        alt={recommendation.recommendedProductName}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {recommendation.recommendationTitle}
                        </span>
                        <span className="text-sm text-gray-500">
                          {recommendation.recommendedProductName}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-500">
                    {format(new Date(recommendation.currentDateAndTime), "PP")}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDelete(recommendation._id)}
                        className="btn btn-error btn-sm text-white"
                      >
                        Delete
                      </button>
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

export default MyRecommendations;
