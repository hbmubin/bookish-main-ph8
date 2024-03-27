// import PropTypes from 'prop-types'

import { getWishlistBooks } from "../../utils";
import WishlistBook from "../WishlistBook/WishlistBook";

const WishlistBooks = () => {
  const wishlistBooks = getWishlistBooks();
  return (
    <div className="flex flex-col gap-6 my-10">
      {wishlistBooks.map((wishlistBook) => (
        <WishlistBook
          key={wishlistBook.bookId}
          wishlistBook={wishlistBook}
        ></WishlistBook>
      ))}
    </div>
  );
};

// WishlistBooks.propTypes = {}

export default WishlistBooks;
