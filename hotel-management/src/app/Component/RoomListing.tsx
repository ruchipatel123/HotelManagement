"use client";

import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../../../sanity/sanity.utils';
import Link from 'next/link';

interface Hotel {
  _id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  rating: number;
  coverImage?: {
    url: string;
  };
}

const RoomListing = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const getHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error); // Add this line
        setError(error as Error);
      }
    };

    getHotels();
  }, []);

  if (error) {
    return <div>Error loading hotels: {error.message}</div>;
  }

  return (
    <div>
      <section className="py-20">
        <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">
          Explore Our Exquisite Hotel<span className="text-blue-600">.</span>
        </h1>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <article key={hotel._id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <Link href={`/hotel-detail/${hotel._id}`}>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={hotel.coverImage?.url || '/images/default.png'} // Provide a default image if coverImage is missing
                    alt={`${hotel.name} Cover`}
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{hotel.name}</h2>
                  <p className="text-slate-400 mt-1 text-sm">
                    {hotel.location || 'Unknown location'}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p>
                      <span className="text-lg font-bold text-blue-500">
                        ${hotel.price || 'N/A'}
                      </span>
                      <span className="text-slate-400 text-sm">/night</span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoomListing;
