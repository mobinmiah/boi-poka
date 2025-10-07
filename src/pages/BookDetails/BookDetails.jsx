import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const bookData = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = bookData;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-24 gap-4 md:gap-10 mx-4 md:mx-0">
      <div className="primary-bg p-16 rounded-2xl md:w-[100%] h-[574px] flex items-center">
        <img src={image} alt="" />
      </div>
      <div className="space-y-2">
        <div className="space-y-4">
          <h3 className="font-bold text-4xl">{bookName}</h3>
          <p className="font-medium text-[1.25rem]">By : {author}</p>
        </div>
        <div className="border-y border-gray-200 py-4">
          <p className="font-medium text-[1.25rem] text-[#13131390]">
            {category}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Review : </span>{" "}
            <span className="text-[#13131390]">{review}</span>
          </p>
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
        <div className="flex items-center gap-16">
          <div className="space-y-2 text-[#13131390]">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing : </p>
            <p>Rating :</p>
          </div>
          <div className="space-y-2 font-semibold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-x-3">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn font-semibold text-[1.125rem] rounded-[8px]"
          >
            Mark as Read
          </button>
          <button className="btn bg-[#50B1C9] text-white font-semibold text-[1.125rem] rounded-[8px]">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
