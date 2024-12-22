import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "font-bold underline" : "hover:underline font-medium"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/queries"
        className={({ isActive }) =>
          `${isActive ? "font-bold underline" : "hover:underline font-medium"}`
        }
      >
        Queries
      </NavLink>
    </>
  );

  return (
    <div className="navbar container w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-2">
          <div className="w-12">
            <img
              src="https://i.ibb.co.com/PG005Hk/recommendation.png"
              alt="RecoHub"
            />
          </div>
          <h1 className="text-3xl font-bold">RecoHub</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
