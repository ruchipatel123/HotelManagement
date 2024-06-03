"use client";

import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../../../sanity/sanity.utils';
import Link from 'next/link';

const HotelCard = () => {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHotels = async () => {
            try {
                const data = await fetchHotels();
                setHotels(data);
            } catch (error) {
                console.error('Error fetching hotels:', error); // Log error to console
                setError(error);
            }
        };

        getHotels();
    }, []);

    if (error) {
        return <div>Error loading hotels: {error.message}</div>;
    }

    return (
        <>
            {hotels.map((hotel) => (
                <div key={hotel.id} className="w-full shadow-lg max-w-2xl bg-white sm:flex mb-10">
                    <div
                        className="w-full sm:w-1/4 hotel-cover bg-center bg-cover border relative h-48 sm:h-auto shadow-inner"
                        style={{ backgroundImage: `url(${hotel.coverImage?.url})` }}
                    >
                        <div className="w-full absolute bottom-0 flex justify-center bg-gradient-black-transparent">
                            <ul className="text-xs sm:font-semibold my-2 flex sm:block justify-around w-full sm:w-auto text-white">
                            {hotel.offeredAmenities.map((amenity) => (
                                    <li key={amenity._key}>
                                    <i className={`icon-${amenity.icon}`}></i> {amenity.amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-3/4 p-3">
                        <div className="flex justify-between items-center border-b pb-3">
                            <div>
                                <div className="sm:flex items-center mb-1">
                                    <h2 className="text-lg font-semibold text-gray-600">{hotel.name}</h2>
                                    <div className="flex sm:ml-3">
                                        {[...Array(hotel.rating)].map((_, index) => (
                                            <svg
                                                key={index}
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="star"
                                                className="h-4 w-4 text-yellow-400 fill-current mr-1"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6l-146.1-21.3L316.7 17.8C306.1-5.9 269.9-5.9 259.3 17.8z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-500">{hotel.location}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg text-gray-700">${hotel.price}</p>
                                <p className="text-xs text-gray-500">per night</p>
                            </div>
                        </div>
                        <div className="py-4">
                            <p className="text-gray-600 mb-3">{hotel.description}</p>
                            <Link href={`/hotel-detail/${hotel._id}`}>
                                <span className="text-blue-600 hover:underline text-sm">View details</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default HotelCard;
