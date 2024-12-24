import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import QueryCard from "../components/QueryCard";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

const MyQueries = () => {
  const [layout, setLayout] = useState(3);
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/queries");
      const sortedQueries = data.sort((a, b) => {
        const dateA = new Date(a.currentDateAndTime);
        const dateB = new Date(b.currentDateAndTime);
        return dateB - dateA;
      });
      setQueries(sortedQueries);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  // const sortedQueries = [...queries].sort(
  //   (a, b) => parseISO(b.currentDateAndTime) - parseISO(a.currentDateAndTime)
  // );

  // const handleDelete = async (id) => {
  //   const confirmed = document.getElementById("delete_modal");
  //   if (confirmed) {
  //     try {
  //       await axios.delete(`http://localhost:5000/queries/${id}`);
  //       setQueries(queries.filter((query) => query._id !== id));
  //       toast.success("Query deleted successfully!");
  //     } catch (error) {
  //       toast.error(error);
  //     }
  //   }
  // };

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
    <>
      {/* banner */}
      <div
        className="hero h-[18rem] font-inter"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/d08ZFgK/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold font-montserrat">
              Empower Your Voice, Share Your Concerns
            </h1>
            <p className="mb-5">
              Have any queries or concerns about the products? Share them with
              us and get quick recommendations or solutions.
            </p>
            <Link
              to="/addQueries"
              className="btn bg-default border-default text-white hover:bg-light hover:border-light"
            >
              Add Queries
            </Link>
          </div>
        </div>
      </div>
      {/* myQueries */}
      <div className="container w-11/12 mx-auto my-24">
        <div className="flex justify-end items-center mb-6">
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

        {queries.length === 0 ? (
          <div className="text-center font-inter py-10">
            <h3 className="text-xl font-semibold mb-4">No Queries Found</h3>
            <Link
              to="/AddQueries"
              className="btn text-white bg-default border-default hover:bg-light hover:border-light btn-lg"
            >
              Create Your First Query
            </Link>
          </div>
        ) : (
          <div className={`grid ${getGridClass()} gap-6 font-inter`}>
            {queries.map((query) => (
              <QueryCard key={query._id} query={query}></QueryCard>
            ))}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {/* <dialog id="delete_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete this query? This action cannot be
              undone.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-outline mr-2">Cancel</button>
                <button
                  className="btn btn-error"
                  // onClick={() => handleDelete(query._id)}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </dialog> */}
      </div>
    </>
  );
};

export default MyQueries;
