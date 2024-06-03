"use client";

import React, { useEffect, useState } from "react";

import { fetchBanner } from "../../../sanity/sanity.utils";

interface Image {
  url: string;
}

interface Button {
  text: string;
  url: string;
  href:string;
}

interface Banner {
  tag: string;
  title: string;
  description: string;
  button?: Button;
  images?: Image[];
}

const Hero = () => {
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    const getBanner = async () => {
      const data = await fetchBanner();
      setBanner(data);
      console.log(banner);
    };

    getBanner();
  }, []);
  if (!banner) {
    return <div>Loading...</div>;
  }

  const images = banner.images || [];

  return (
    <div>
      <div className="flex py-10">
        <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
            <div className="mb-16 lg:my-auto lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                    {banner.tag}
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                  {banner.title}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {banner.description}
                </p>
              </div>
              <div className="flex items-center">
              {banner.button && (
                  <a
                    href={banner.button.url}
                    className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                  >
                    {banner.button.text}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
            <div className="hidden w-56 items-center space-y-3 lg:flex">
              <div className="overflow-hidden rounded-xl bg-yellow-400">
                {images[0] && (
                  <img
                    className="h-full w-full object-cover"
                    src={images[0].url}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
              <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                {images[1] && (
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src={images[1].url}
                    alt=""
                  />
                )}
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                {images[2] && (
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src={images[2].url}
                    alt=""
                  />
                )}
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                {images[3] && (
                  <img
                    className="mx-auto h-full w-full object-cover"
                    src={images[3].url}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
