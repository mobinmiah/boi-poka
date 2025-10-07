import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("/booksData.json"),
        element: (
          <Suspense
            fallback={<span className="loading loading-ring loading-xl"></span>}
          >
            <BookDetails></BookDetails>
          </Suspense>
        ),
        // Component: BookDetails,
      },
    ],
  },
]);
