import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgUrl, discription, ratings, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img
          className="p-5 rounded-t-lg h-68 w-full object-cover"
          src={imgUrl}
          alt="product image"
        />
      </Link >
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {discription}
          </h5>
        </Link >

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(ratings) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  fillRule="evenodd"
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534
                   1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535
                   1.535 0 0 0 1.463 9.2l3.656 3.563-.863
                   5.031a1.532 1.532 0 0 0 2.226
                   1.616L11 17.033l4.518 2.375a1.534
                   1.534 0 0 0 2.226-1.617l-.863-5.03
                   3.656-3.563a1.523 1.523 0 0 0
                   .387-1.575Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {ratings}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
