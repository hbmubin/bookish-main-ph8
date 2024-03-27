// import PropTypes from 'prop-types'

import { getReadBooks } from "../../utils";
import ReadBook from "../Readbook/ReadBook";

const ReadBooks = () => {
  const readBooks = getReadBooks();

  if (readBooks.length === 0) {
    return (
      <h2 className=" my-7 text-2xl text-stone-500">
        No Books is added to Read
      </h2>
    );
  }
  return (
    <div className="flex flex-col gap-6 my-10">
      {readBooks.map((readBook) => (
        <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
      ))}
    </div>
  );
};

// ReadBooks.propTypes = {};

export default ReadBooks;
