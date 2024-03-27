// import PropTypes from 'prop-types'

import { useContext, useEffect, useState } from "react";
import { getReadBooks } from "../../utils";
import ReadBook from "../Readbook/ReadBook";
import { AssetContext } from "../ListedBooks/LIstedBooks";

const ReadBooks = () => {
  const readBooks = getReadBooks();
  const [displayReadBooks, setDisplayReadBooks] = useState([...readBooks]);

  const filter = useContext(AssetContext);

  useEffect(() => {
    if (filter === "rating") {
      const sorted = [...readBooks].sort((a, b) => a.rating - b.rating);
      setDisplayReadBooks(sorted);
    }
    if (filter === "pages") {
      const sorted = [...readBooks].sort((a, b) => a.totalPages - b.totalPages);
      setDisplayReadBooks(sorted);
    }
    if (filter === "year") {
      const sorted = [...readBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setDisplayReadBooks(sorted);
    }
  }, [filter]);

  if (displayReadBooks.length === 0) {
    return (
      <h2 className="my-7 text-2xl text-stone-500">
        No Books is added to Read
      </h2>
    );
  }
  return (
    <div className="flex flex-col gap-6 my-10">
      {displayReadBooks.map((readBook) => (
        <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
      ))}
    </div>
  );
};

// ReadBooks.propTypes = {};

export default ReadBooks;
