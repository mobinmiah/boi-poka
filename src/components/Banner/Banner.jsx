import React from "react";
import heroImg from "../../assets/heroImg.png";

const Banner = () => {
  return (
    <div className="primary-bg md:mt-12 md:rounded-2xl flex flex-col md:flex-row justify-between items-center p-5 md:px-30 md:py-20">
      <div className="flex flex-col items-center md:items-baseline">
        <h1 className="font-bold text-2xl md:text-6xl text-color md:w-xl text-center md:text-left">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn mt-12 bg-[#23BE0A] text-white font-semibold rounded-[8px] text-xl py-5 px-7 hover:bg-[#23BE0A90] hover:text-[#131313]">
          View The List
        </button>
      </div>
      <div className="mt-5">
        <img
          className="w-3/4 mx-auto"
          src={heroImg}
          alt="A book as the hero image"
        />
      </div>
    </div>
  );
};

export default Banner;
