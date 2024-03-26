// import PropTypes from 'prop-types'
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 border-2 p-5">
        <figure className="p-10 rounded-lg bg-base-200">
          <img src={image} className="rounded-xl w-xl" />
        </figure>
        <div className="mt-5">
          <div className="flex gap-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm font-semibold text-green-500 bg-stone-100 rounded-xl"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold my-5">{bookName}</h2>
          <p className="font-semibold text-stone-700">by : {author}</p>
          <div className=" w-full border-dashed border-t-2 my-5"></div>
          <div className="flex justify-between text-stone-600">
            <div>{category}</div>
            <div className="flex items-center gap-2">
              {rating}
              <CiStar size={20}></CiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Book.propTypes = {}

export default Book;
