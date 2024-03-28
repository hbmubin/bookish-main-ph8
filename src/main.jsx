import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import LIstedBooks from "./components/ListedBooks/LIstedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import BookDetails from "./components/BookDetails/BookDetails";
import ReadBooks from "./components/ReadBooks/ReadBooks";
import WishlistBooks from "./components/WishlistBooks/WishlistBooks";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <LIstedBooks></LIstedBooks>,
        children: [
          {
            path: "",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlistbooks",
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/about",
        element: <About></About>,
        loader: () => fetch("../about.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
