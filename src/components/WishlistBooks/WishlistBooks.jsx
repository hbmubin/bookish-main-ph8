// import PropTypes from 'prop-types'

import { RiH2 } from "react-icons/ri";
import { getReadBooks, getWishlistBooks } from "../../utils";
import WishlistBook from "../WishlistBook/WishlistBook";

const WishlistBooks = () => {
  const wishlistBooks = getWishlistBooks();
  const readBooks = getReadBooks();

  const wishlistWithoutRead = wishlistBooks.filter((wishlistBook) => {
    return !readBooks.some(
      (readBook) => readBook.bookId === wishlistBook.bookId
    );
  });
  if (wishlistWithoutRead.length === 0) {
    return (
      <h2 className=" my-7 text-2xl text-stone-500">
        No Books is added to Wishlist
      </h2>
    );
  }

  return (
    <div className="flex flex-col gap-6 my-10">
      {wishlistWithoutRead.map((wishlistBook, idx) => (
        <WishlistBook key={idx} wishlistBook={wishlistBook}></WishlistBook>
      ))}
    </div>
  );
};

// WishlistBooks.propTypes = {}

export default WishlistBooks;
