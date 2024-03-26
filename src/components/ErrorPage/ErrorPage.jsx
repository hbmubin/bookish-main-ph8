// import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex gap-5 flex-col font-bold items-center">
      <h2 className="text-4xl text-error">Opps!!</h2>
      <h2 className="text-4xl text-stone-600">Page note found</h2>
      <Link to="/">
        <div className="btn bg-green-500 text-white">Back to Home</div>
      </Link>{" "}
    </div>
  );
};

// ErrorPage.propTypes = {}

export default ErrorPage;
