// import PropTypes from 'prop-types'

import { getReadBooks } from "../../utils";
import ReadBook from "../Readbook/ReadBook";

const ReadBooks = () => {
  const readBooks = getReadBooks();
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
