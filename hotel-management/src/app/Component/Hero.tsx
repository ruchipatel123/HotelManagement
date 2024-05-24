import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex py-10">
        <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
            <div className="mb-16 lg:my-auto lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                    25% off this summer
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                  Discover Extraordinary Comfort in
                  <span className="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                    {" "}
                    Hotels
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ullam rem voluptatem, animi tempora expedita!Lorem ipsum
                  dolor.
                </p>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                >
                  {" "}
                  Get started{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
            <div className="hidden w-56 items-center space-y-3 lg:flex">
              <div className="overflow-hidden rounded-xl bg-yellow-400">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
              <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
