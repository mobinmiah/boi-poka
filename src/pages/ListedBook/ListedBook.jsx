import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const ListedBook = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div className="mt-5 p-6 border border-gray-200 rounded-2xl flex justify-baseline items-center gap-8">
      <div className="primary-bg flex  justify-center items-center p-8 mb-6 rounded-2xl">
        <img className="h-44" src={image} alt="" />
      </div>
      <div>
        <div className="mb-5 mt-4">
          <h3 className="font-bold text-2xl mb-3">{bookName}</h3>
          <p className="font-medium text-[#13131390]">By : {author}</p>
        </div>
        <div className="flex items-center gap-4 border-b pb-7 border-gray-200">
          <h4 className="font-bold">Tag</h4>{" "}
          {tags.map((tag, index) => (
            <p
              key={index}
              className=" bg-[#23BE0A30] text-[#23BE0A] rounded-3xl px-4 py-2"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-between items-center pt-5 border-t border-dashed border-gray-300">
          <p className="font-medium text-[#13131390]">{category}</p>
          <p className="font-medium text-[#13131390] flex items-center gap-2">
            <span>{rating}</span> <FaRegStarHalfStroke />
          </p>
        </div>
      </div>
      <Link to={`/bookDetails/${bookId}`}>
        <button className="btn bg-[#23BE0A] text-white font-semibold rounded-[8px]">View Details</button>
      </Link>
    </div>
  );
};

export default ListedBook;
