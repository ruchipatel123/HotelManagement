import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-sky-400 px-5 py-5 text-white">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-1/3 mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Room Type
          </label>
          <div className="relative">
            <select className="w-full px-4 py-2 capitalize rounded leading-tight text-black focus:outline-none">
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="w-1/3 mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Search
          </label>
          <input
            id="search"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
            type="search"
            value=""
          />
        </div>
        <button
          type="button"
          className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium tracking-wide text-black shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
