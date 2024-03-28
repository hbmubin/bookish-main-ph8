import { IoLocationOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishlistBook = ({ wishlistBook }) => {
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
  } = wishlistBook;

  return (
    <div className="hero">
      <div className="hero-content md:w-full w-2/3 justify-start items-start  flex-col md:flex-row border-2 rounded-xl">
        <div className="py-8 px-14 bg-base-200 rounded-xl">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p className="my-3 font-semibold text-stone-600">By : {author}</p>

          <div className="flex flex-col md:flex-row md:items-center gap-5 my-3">
            <div className="flex items-center font-bold">
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
            <div className="flex gap-3 items-center text-stone-600 font-semibold">
              <span>
                <IoLocationOutline size={24}></IoLocationOutline>
              </span>
              <span className="">Year of Publishing: {yearOfPublishing}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-stone-600">
            <div className="flex items-center gap-2">
              <span>
                <RiGroupLine></RiGroupLine>
              </span>
              <span>Publisher: {publisher}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <RiPagesLine></RiPagesLine>
              </span>
              <span>Page {totalPages}</span>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex md:flex-row flex-col md:w-auto w-6/12  gap-3">
            <div className="bg-sky-100  text-sky-500 py-1 px-3 rounded-box font-medium">
              Category: {category}
            </div>
            <div className="bg-orange-100 text-orange-500 py-1 px-3 rounded-box font-medium">
              Rating: {rating}
            </div>
            <Link
              to={`/book/${bookId}`}
              className="bg-green-500 text-white py-1 px-3 rounded-box font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;
