import React from "react";

const BookHotel = () => {
  return (
    <div>
      <div className="px-7 py-6">
        <h3>
          <span className="text-gray-400 font-bold text-xl">$ 500</span>
          <span className="font-bold text-xl">
            {" "}
            | discount 20%. Now{" "}
            <span className="text-tertiary-dark">$ 400</span>
          </span>
        </h3>
        <div className="w-full border-b-2 border-b-secondary my-2"></div>
        <h4 className="my-8">
          Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave
          behind any items, please contact the receptionist.
        </h4>
        <div className="flex">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="check-in-date"
              className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Check In date
            </label>
            <div className="react-datepicker-wrapper">
              <div className="react-datepicker__input-container">
                <input
                  id="check-in-date"
                  className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="check-out-date"
              className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Check Out date
            </label>
            <div className="react-datepicker-wrapper">
              <div className="react-datepicker__input-container">
                <input
                  id="check-out-date"
                  disabled
                  className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Adults
            </label>
            <input
              id="adults"
              min="1"
              max="5"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              type="number"
              value="1"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="children"
              className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Children
            </label>
            <input
              id="children"
              min="0"
              max="3"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              type="number"
              value="0"
            />
          </div>
        </div>
        <button
          disabled
          className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Booked
        </button>
      </div>
    </div>
  );
};

export default BookHotel;
