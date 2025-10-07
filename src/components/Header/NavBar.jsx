import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const links = (
    <div className="flex items-center gap-3.5">
      <Link to="/" className="text-[1.23rem] text-[#131313] px-5 py-2">
        Home
      </Link>

      <Link to="/" className="text-[1.23rem] text-[#131313] px-5 py-2">
        Listed Books
      </Link>
      <Link to="/" className="text-[1.23rem] text-[#131313] px-5 py-2">
        Pages to Read
      </Link>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn bg-[#23BE0A] text-white font-semibold text-[18px] rounded-[8px] p-5">
          Sign In
        </button>
        <button className="btn bg-[#59C6D2] text-white font-semibold text-[18px] rounded-[8px] p-5">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
