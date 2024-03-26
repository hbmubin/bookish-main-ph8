// import PropTypes from 'prop-types'

import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-32">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {books.map((book, idx) => (
          <Book key={idx} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

// Books.propTypes = {}

export default Books;
