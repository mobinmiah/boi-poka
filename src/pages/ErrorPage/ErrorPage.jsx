import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
