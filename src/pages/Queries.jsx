import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import QueriesCards from "../components/QueriesCards";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState(3);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/queries?search=${search}`
        );
        const sortedQueries = data.sort((a, b) => {
          const dateA = new Date(a.currentDateAndTime);
          const dateB = new Date(b.currentDateAndTime);
          return dateB - dateA;
        });
        setQueries(sortedQueries);
      } catch (error) {
        toast.error(error?.message);
      }
    };
    fetchQueries();
  }, [search]);

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
    <div className="container w-11/12 mx-auto my-8 font-inter">
      <h2 className="text-default text-center text-5xl uppercase font-bold font-montserrat mt-2 mb-8">
        Queries
      </h2>
      {/* search and gridBtns */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by product name..."
          className="input input-bordered w-full max-w-md bg-white border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      {/* queries */}
      {queries.length === 0 ? (
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
