import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWifi, faCoffee, faFireExtinguisher, faSprayCan, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import BookHotel from './BookHotel';

const HotelDescription = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5">
      <div className="md:grid md:grid-cols-12 gap-10 px-3">
        <div className="md:col-span-8 md:w-full">
          <h2 className="font-bold text-left text-lg md:text-2xl">
            Deluxe Suite (600 sq ft)
          </h2>
          <div className="flex my-11">
            <div className="md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center">
              <FontAwesomeIcon icon={faBed} className="md:text-2xl" />
              <p className="text-xs md:text-base pt-3">King-sized bed</p>
            </div>
            <div className="md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center">
              <FontAwesomeIcon icon={faWifi} className="md:text-2xl" />
              <p className="text-xs md:text-base pt-3">Free Wi-Fi</p>
            </div>
            <div className="md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center">
              <FontAwesomeIcon icon={faCoffee} className="md:text-2xl" />
              <p className="text-xs md:text-base pt-3">Coffee Maker</p>
            </div>
          </div>
          <div className="mb-11">
            <h2 className="font-bold text-3xl mb-2">Description</h2>
            <p>
              A spacious and luxurious suite with stunning views. Enjoy the
              comfort and elegance of this beautiful suite, complete with modern
              amenities and breathtaking vistas of the city skyline.
            </p>
          </div>
          <div className="mb-11">
            <h2 className="font-bold text-3xl mb-2">Offered Amenities</h2>
            <div className="grid grid-cols-2">
              <div className="flex items-center md:my-0 my-1">
                <FontAwesomeIcon icon={faBed} />
                <p className="text-xs md:text-base ml-2">King-sized bed</p>
              </div>
              <div className="flex items-center md:my-0 my-1">
                <FontAwesomeIcon icon={faWifi} />
                <p className="text-xs md:text-base ml-2">Free Wi-Fi</p>
              </div>
              <div className="flex items-center md:my-0 my-1">
                <FontAwesomeIcon icon={faCoffee} />
                <p className="text-xs md:text-base ml-2">Coffee Maker</p>
              </div>
            </div>
          </div>
          <div className="mb-11">
            <h2 className="font-bold text-3xl mb-2">Safety And Hygiene</h2>
            <div className="grid grid-cols-2">
              <div className="flex items-center my-1 md:my-0">
                <FontAwesomeIcon icon={faFireExtinguisher} />
                <p className="ml-2 md:text-base text-xs">Daily Cleaning</p>
              </div>
              <div className="flex items-center my-1 md:my-0">
                <FontAwesomeIcon icon={faSprayCan} />
                <p className="ml-2 md:text-base text-xs">Fire Extinguishers</p>
              </div>
              <div className="flex items-center my-1 md:my-0">
                <FontAwesomeIcon icon={faTimesCircle} />
                <p className="ml-2 md:text-base text-xs">
                  Disinfections and Sterilizations
                </p>
              </div>
              <div className="flex items-center my-1 md:my-0">
                <FontAwesomeIcon icon={faTimesCircle} />
                <p className="ml-2 md:text-base text-xs">Smoke Detectors</p>
              </div>
            </div>
          </div>
          <div className="shadow dark:shadow-white rounded-lg p-6">
            <div className="items-center mb-4">
              <p className="md:text-lg font-semibold">Customer Reviews</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
            </div>
          </div>
        </div>
        <div className="md:col-span-4 md:w-full">
        <BookHotel/>
        </div>
      </div>
    </div>
  );
};

export default HotelDescription;
