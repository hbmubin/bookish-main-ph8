// import PropTypes from 'prop-types'

import { Outlet } from "react-router-dom";
import { getReadBooks } from "../../utils";

const LIstedBooks = () => {
  // const readBooks = getReadBooks();

  // const book = readBooks.map((b) => b);
  // console.log(book);
  return (
    <div>
      <div className="text-center">
        <div className="py-8 bg-base-200 text-3xl font-bold rounded-xl">
          <h2>Books</h2>
        </div>
        <details className="dropdown">
          <summary className=" btn px-6 bg-green-500 rounded-xl my-6 text-white">
            Short By
          </summary>
          <ul className="px-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-xl">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
        >
          <span>Read Books</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
        >
          <span>Wishlist Books</span>
        </a>
      </div>
      <div>
        <h2>ertnrsapeoariorwefo</h2>
      </div>
    </div>
  );
};

// LIstedBooks.propTypes = {}

export default LIstedBooks;
