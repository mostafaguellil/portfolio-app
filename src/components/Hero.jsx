import React from "react";
import Avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="grid max-w-screen-xl px-6 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12 items-center">
        {/* Left Content Section */}
        <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1 className="mb-2 text-3xl font-bold">
            <span>Hi,</span> I'm an Apprentice Site Reliability Engineer
          </h1>
          <p className="max-w-2xl mb-6 lg:mb-8 font-normal md:text-lg lg:text-xl">
            Apprentice Site Reliability Engineer with a foundation in System and Network
            Administration from the Sorbonne. Experienced in network security and optimization, now
            focused on DevOps practices like automation and Infrastructure as Code to build
            reliable, scalable systems.
          </p>
          <div className="flex justify-center lg:justify-start space-x-5">
            <a
              href="https://www.linkedin.com/in/mostafaguellil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-[#0f172a] p-5 py-3 font-semibold text-white hover:bg-rose-700">
                Follow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </a>
            <button className="text-white flex w-full items-center justify-center gap-2 rounded-2xl p-5 py-3 font-semibold bg-[#0f172a] hover:bg-green-800">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Avatar Section */}
        <div className="flex justify-center lg:justify-end lg:col-span-5">
          <img
            src={Avatar}
            alt="Profile Picture"
            className="bg-white bg-opacity-40 rounded-full max-w-xs md:max-w-md lg:max-w-sm shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
