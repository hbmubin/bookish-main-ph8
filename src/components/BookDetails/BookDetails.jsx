// import PropTypes from 'prop-types'

import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook, saveWishlistBook } from "../../utils";
import { Toaster } from "react-hot-toast";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = (readBook) => {
    saveReadBook(readBook);
  };
  const handleWishlist = (wishlistBook) => {
    saveWishlistBook(wishlistBook);
  };

  return (
    <div className="grid grid-cols-2 my-5">
      <Toaster></Toaster>
      <div className="bg-base-200 p-10 flex items-center justify-center rounded-xl">
        <img className="w-[400px]" src={image} alt="" />
      </div>
      <div className="pl-10">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-lg font-semibold text-stone-700 mt-5 mb-4">
          By : {author}
        </p>
        <hr />
        <p className="my-3 text-stone-700 font-semibold">{category}</p>
        <hr />
        <div className="mt-5 mb-10 text-stone-700">
          <span className="font-bold">Review :</span>
          {review}
        </div>

        <div className="flex items-center font-bold mb-3">
          <div className="mr-6"> Tag</div>
          <div className="flex gap-4">
            {tags.map((tag, idx) => (
              <span
                className="bg-base-200 px-2 py-1 rounded-xl text-green-500"
                key={idx}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex my-8 gap-12">
          <div className="text-stone-600 flex flex-col gap-2">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="font-semibold flex flex-col gap-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex flex-grow gap-5">
          <button
            onClick={() => handleRead(book)}
            className="btn px-8 border-2 bg-white"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className="btn px-8 bg-sky-400 text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

// BookDetails.propTypes = {}

export default BookDetails;
