// import PropTypes from 'prop-types'

import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Root = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

// Root.propTypes = {}

export default Root;
