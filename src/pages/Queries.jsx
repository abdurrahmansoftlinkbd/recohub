import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import QueriesCards from "../components/QueriesCards";
import { FaSort } from "react-icons/fa";
import Loading from "./Loading";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState(3);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortByRecommendation, setSortByRecommendation] = useState(false);

  const sortByDate = (data) => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.currentDateAndTime);
      const dateB = new Date(b.currentDateAndTime);
      return dateB - dateA;
    });
  };

  const sortByRecommendationCount = (data) => {
    return [...data].sort(
      (a, b) => b.recommendationCount - a.recommendationCount
    );
  };

  useEffect(() => {
    const fetchQueries = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://b10-a11-product-recommendation-system-server.vercel.app/queries?search=${search}`
        );
        const sortedData = sortByDate(data);
        setQueries(sortedData);
      } catch (error) {
        toast.error(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, [search]);

  useEffect(() => {
    if (sortByRecommendation) {
      setQueries((prev) => sortByRecommendationCount(prev));
    } else {
      setQueries((prev) => sortByDate(prev));
    }
  }, [sortByRecommendation]);

  const toggleSort = () => {
    setSortByRecommendation((prev) => !prev);
  };

  const getGridClass = () => {
    switch (layout) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="container w-11/12 mx-auto my-16 font-inter">
      <h2 className="text-default text-center text-5xl uppercase font-bold font-montserrat mt-2 mb-8">
        Queries
      </h2>
      <div className="flex justify-between gap-2 items-center mb-6">
        <div className="flex gap-2 items-center flex-1">
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered w-full max-w-md bg-white border-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={toggleSort}
            className={`btn ${
              sortByRecommendation
                ? "bg-default border-default"
                : "bg-light border-light"
            } text-white hover:bg-dark hover:border-dark`}
            title={
              sortByRecommendation
                ? "Sort by Date"
                : "Sort by Recommendation Count"
            }
          >
            <FaSort className="text-xl"></FaSort>
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLayout(1)}
            className={`btn bg-light border-light text-white hover:bg-dark hover:border-dark ${
              layout === 1 ? "btn-active bg-default border-default" : ""
            }`}
          >
            <CiGrid2H className="text-xl" />
          </button>
          <button
            onClick={() => setLayout(2)}
            className={`btn bg-light border-light text-white hover:bg-dark hover:border-dark ${
              layout === 2 ? "btn-active bg-default border-default" : ""
            }`}
          >
            <IoGridOutline className="text-xl" />
          </button>
          <button
            onClick={() => setLayout(3)}
            className={`btn bg-light border-light text-white hover:bg-dark hover:border-dark ${
              layout === 3 ? "btn-active bg-default border-default" : ""
            }`}
          >
            <BsGrid3X3Gap className="text-xl" />
          </button>
        </div>
      </div>
      {loading ? (
        <Loading></Loading>
      ) : queries.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold mb-4">No Queries Available</h3>
        </div>
      ) : (
        <div className={`grid ${getGridClass()} gap-6`}>
          {queries.map((query) => (
            <QueriesCards key={query._id} query={query}></QueriesCards>
          ))}
        </div>
      )}
    </div>
  );
};

export default Queries;
