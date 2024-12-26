import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateQuery = () => {
  const navigate = useNavigate();
  const { _id } = useLoaderData();
  const [query, setQuery] = useState(null);

  const fetchQuery = async () => {
    try {
      const { data } = await axios.get(
        `https://b10-a11-product-recommendation-system-server.vercel.app/queries/${_id}`
      );
      setQuery(data);
    } catch (error) {
      toast.error(error.message);
      navigate("/myQueries");
    }
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  const handleUpdateQuery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      productImage: form.productImage.value,
      queryTitle: form.queryTitle.value,
      boycottReason: form.boycottReason.value,
      userEmail: query.userEmail,
      userName: query.userName,
      userImage: query.userImage,
      currentDateAndTime: query.currentDateAndTime,
      recommendationCount: query.recommendationCount,
    };

    try {
      await axios.put(
        `https://b10-a11-product-recommendation-system-server.vercel.app/queries/${_id}`,
        updatedData
      );
      form.reset();
      toast.success("Query updated successfully!");
      navigate("/myQueries");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray-50 font-inter py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm md:max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold font-montserrat text-zinc-950 uppercase">
            Update Your <span className="text-default">Query</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <p>Originally posted: {query?.currentDateAndTime}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleUpdateQuery} className="space-y-6">
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
                  defaultValue={query?.productName}
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
                  defaultValue={query?.productBrand}
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
                  defaultValue={query?.productImage}
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
                  defaultValue={query?.queryTitle}
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
                defaultValue={query?.boycottReason}
                className="textarea textarea-bordered h-32"
                placeholder="Explain why you're looking for alternatives..."
              />
            </div>

            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn text-white bg-default border-default hover:bg-light hover:border-light w-full"
              >
                Update Query
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Your updated query will be visible to the community, maintaining all
            existing recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuery;
