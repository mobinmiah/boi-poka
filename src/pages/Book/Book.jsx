import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="m-5 md:m-0 p-6 border border-gray-200 rounded-2xl md:shadow-xl cursor-pointer">
        <div className="primary-bg flex justify-center items-center py-8 px-24 mb-6 rounded-2xl">
          <img className="h-44" src={image} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-3 font-medium mt-4">
            {tags.map((tag, index) => (
              <p
                key={index}
                className=" bg-[#23BE0A30] text-[#23BE0A] rounded-3xl px-4 py-2"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="mb-5 mt-4">
            <h3 className="font-bold text-2xl mb-3">{bookName}</h3>
            <p className="font-medium text-[#13131390]">By : {author}</p>
          </div>
          <div className="flex justify-between items-center pt-5 border-t border-dashed border-gray-300">
            <p className="font-medium text-[#13131390]">{category}</p>
            <p className="font-medium text-[#13131390] flex items-center gap-2">
              <span>{rating}</span> <FaRegStarHalfStroke />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
