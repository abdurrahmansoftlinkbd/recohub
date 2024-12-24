import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import RecentQueriesCards from "./RecentQueriesCards";
import { Link } from "react-router-dom";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);

  const fetchRecentQueries = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/queries");
      const sortedQueries = data.sort((a, b) => {
        const dateA = new Date(a.currentDateAndTime);
        const dateB = new Date(b.currentDateAndTime);
        return dateB - dateA;
      });
      setQueries(sortedQueries.slice(0, 6));
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchRecentQueries();
  }, []);

  return (
    <section className="container w-11/12 mx-auto mt-24">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold font-montserrat mb-2">
          Recent <span className="text-default">Queries</span>
        </h2>
        <p className="text-gray-600">
          Explore the latest product alternatives our community is looking for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {queries.map((query) => (
          <RecentQueriesCards
            key={query._id}
            query={query}
          ></RecentQueriesCards>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/queries"
          className="btn btn-lg text-white bg-default border-default hover:bg-light hover:border-light"
        >
          Show All Queries
        </Link>
      </div>
    </section>
  );
};

export default RecentQueries;
