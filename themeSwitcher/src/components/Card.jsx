import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <img
        className="p-8 rounded-t-lg"
        src="./img/me2.jpg"
        alt="product_image1"
      />
      <div className="px-5 pb-5">
        <h1 className="text-3xl font-serif tracking-tight text-gray-900 dark:text-white">
          Abhinav Bhardwaj <span className="text-amber-700 font-serif text-[15px]">Suraj</span>
        </h1>

        <div className="flex items-center justify-between mt-4">
          <span className=" font-serif text-yellow-700 font-extrabold text-[21px]">
            Software Engineer
          </span>
          <button
            className="bg-blue-800 p-2 rounded text-white w-[100px] text-[13px] font-serif"
          >
            Meet Now
          </button>
        </div>
      </div>
    </div>
  );
}
