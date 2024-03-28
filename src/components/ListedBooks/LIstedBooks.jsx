// import PropTypes from 'prop-types'

import { Link, Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export const AssetContext = createContext("filter");

const LIstedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [filter, setFilter] = useState("");

  const handleShortBy = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <div className="text-center">
        <div className="py-8 bg-base-200 text-3xl font-bold rounded-xl">
          <h2>Books</h2>
        </div>
        <details className="dropdown">
          <summary className=" btn px-6 bg-green-500 rounded-xl my-6 text-white">
            Short By
            <span>
              <IoIosArrowDown />
            </span>
          </summary>
          <ul className="px-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-xl">
            <li>
              <a onClick={() => handleShortBy("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleShortBy("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleShortBy("year")}>Publishing year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center -mx-4  overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlistbooks`}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <div className="  px-5 mx-auto md:px-0">
        <AssetContext.Provider value={filter}>
          <Outlet></Outlet>
        </AssetContext.Provider>
      </div>
    </div>
  );
};

// LIstedBooks.propTypes = {}

export default LIstedBooks;
