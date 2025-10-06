import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  //   const bookPromise = fetch("/booksData.json").then((res) => res.json());

  return (
    <div className="mt-24">
      <h2 className="text-center text-[2.5rem] font-bold text-color">Books</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-9">
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
