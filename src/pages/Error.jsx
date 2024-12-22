import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-inter">
      <h2 className="text-7xl font-montserrat font-bold mb-2">404</h2>
      <p className="text-2xl">Sorry, we were unable to find that page</p>
      <p className="mt-4">
        Start from{" "}
        <Link to="/" className="underline font-medium hover:font-semibold">
          home page
        </Link>
      </p>
    </div>
  );
};

export default Error;
