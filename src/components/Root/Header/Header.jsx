// import PropTypes from 'prop-types'

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="work py-5">
      <div className="navbar bg-base-100">
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
              className="menu text-stone-600 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border-2 border-green-400 text-green-600"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listedbooks"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border-2 border-green-400 text-green-600"
                      : ""
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pagestoread"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border-2 border-green-400 text-green-600"
                      : ""
                  }
                >
                  Pages to Read
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border-2 border-green-400 text-green-600"
                      : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border-2 border-green-400 text-green-600"
                      : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Bookish</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  text-stone-500 menu-horizontal px-1 flex gap-4 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-2 border-green-400 text-green-600"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedbooks"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-2 border-green-400 text-green-600"
                    : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagestoread"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-2 border-green-400 text-green-600"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-2 border-green-400 text-green-600"
                    : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border-2 border-green-400 text-green-600"
                    : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-6 bg-green-500 text-white mr-3">Sign In</a>
          <a className="btn px-6 bg-sky-400 text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

// Header.propTypes = {}

export default Header;
