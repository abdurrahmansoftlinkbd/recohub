import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
              className="h-7 w-7"
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
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10  mt-3 w-52 p-2 shadow"
          >
            {links}
            {user && (
              <>
                <NavLink
                  to="/recommendationsForMe"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                >
                  Recommendations For Me
                </NavLink>
                <NavLink
                  to="/myQueries"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                >
                  My Queries
                </NavLink>
                <NavLink
                  to="/myRecommendations"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                >
                  My Recommendations
                </NavLink>
              </>
            )}
            {user ? (
              <Link className="hover:underline font-medium">Log out</Link>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </ul>
        </div>
        <Link className="flex items-center gap-2">
          <div className="w-12">
            <img
              src="https://i.ibb.co.com/PG005Hk/recommendation.png"
              alt="RecoHub"
            />
          </div>
          <h1 className="text-3xl font-bold font-montserrat">RecoHub</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          {links}
          {user && (
            <>
              <NavLink
                to="/recommendationsForMe"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
              >
                Recommendations For Me
              </NavLink>
              <NavLink
                to="/myQueries"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
              >
                My Queries
              </NavLink>
              <NavLink
                to="/myRecommendations"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
              >
                My Recommendations
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn hidden md:flex">Log out</button>
        ) : (
          <Link to="/login" className="btn hidden md:flex">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
