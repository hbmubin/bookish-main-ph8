// import PropTypes from 'prop-types'

import { RiH2 } from "react-icons/ri";
import { getReadBooks, getWishlistBooks } from "../../utils";
import WishlistBook from "../WishlistBook/WishlistBook";
import { useContext, useEffect, useState } from "react";
import { AssetContext } from "../ListedBooks/LIstedBooks";

const WishlistBooks = () => {
  const wishlistBooks = getWishlistBooks();
  const readBooks = getReadBooks();

  const wishlistWithoutRead = wishlistBooks.filter((wishlistBook) => {
    return !readBooks.some(
      (readBook) => readBook.bookId === wishlistBook.bookId
    );
  });

  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([
    ...wishlistWithoutRead,
  ]);

  const filter = useContext(AssetContext);

  useEffect(() => {
    if (filter === "rating") {
      const sorted = [...wishlistWithoutRead].sort(
        (a, b) => a.rating - b.rating
      );
      setDisplayWishlistBooks(sorted);
    }
    if (filter === "pages") {
      const sorted = [...wishlistWithoutRead].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setDisplayWishlistBooks(sorted);
    }
    if (filter === "year") {
      const sorted = [...wishlistWithoutRead].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setDisplayWishlistBooks(sorted);
    }
  }, [filter]);
  console.log(displayWishlistBooks);

  if (displayWishlistBooks.length === 0) {
    return (
      <h2 className=" my-7 text-2xl text-stone-500">
        No Books are added to Wishlist
      </h2>
    );
  }

  return (
    <div className="flex flex-col gap-6 my-10">
      {displayWishlistBooks.map((wishlistBook, idx) => (
        <WishlistBook key={idx} wishlistBook={wishlistBook}></WishlistBook>
      ))}
    </div>
  );
};

// WishlistBooks.propTypes = {}

export default WishlistBooks;
