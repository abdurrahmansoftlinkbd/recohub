import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddQuery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const queryData = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      productImage: form.productImage.value,
      queryTitle: form.queryTitle.value,
      boycottReason: form.boycottReason.value,
      userEmail: user?.email,
      userName: user?.displayName,
      userImage: user?.photoURL,
      currentDateAndTime: format(new Date(), "PPpp"),
      recommendationCount: 0,
    };

    try {
      await axios.post(
        "https://b10-a11-product-recommendation-system-server.vercel.app/queries",
        queryData
      );
      form.reset();
      toast.success("Query added successfully!");
      navigate("/myQueries");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="bg-gray-50 font-inter py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm md:max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold font-montserrat text-zinc-950 uppercase">
            Add Your <span className="text-default">Query</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Share your product experience and get recommendations from the
            community
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleAddQuery} className="space-y-6">
            <div className="md:flex md:gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-montserrat font-semibold">
                    Product Name
                  </span>
                </label>
                <input
                  type="text"
                  name="productName"
                  required
                  className="input input-bordered"
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-montserrat font-semibold">
                    Product Brand
                  </span>
                </label>
                <input
                  type="text"
                  name="productBrand"
                  required
                  className="input input-bordered"
                  placeholder="Enter brand name"
                />
              </div>
            </div>
            <div className="md:flex md:gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-montserrat font-semibold">
                    Product Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="productImage"
                  required
                  className="input input-bordered"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-montserrat font-semibold">
                    Query Title
                  </span>
                </label>
                <input
                  type="text"
                  name="queryTitle"
                  required
                  className="input input-bordered"
                  placeholder="ex: Is there any better product that gives me the same quality?"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Boycotting Reason Details
                </span>
              </label>
              <textarea
                name="boycottReason"
                required
                className="textarea textarea-bordered h-32"
                placeholder="Explain why you're looking for alternatives..."
              />
            </div>
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn text-white bg-default border-default hover:bg-light hover:border-light  w-full"
              >
                Add Query
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Your query will be visible to the community, who can provide
            recommendations for alternative products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
