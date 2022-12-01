import React from "react";
import airConditioner1 from "../assets/airConditioner1.jpg";
import airConditioner2 from "../assets/airConditioner2.jpg";
import airConditioner3 from "../assets/airConditioner3.jpg";
import airConditioner4 from "../assets/airConditioner4.jpg";
import airConditioner5 from "../assets/airConditioner5.jpg";
import airConditioner6 from "../assets/airConditioner6.jpg";
import airConditioner7 from "../assets/airConditioner7.jpg";
import energyEfficiency from "../assets/energyEfficiency.png";
import environmentalSafety from "../assets/environmentalSafety.png";
import airQuality from "../assets/airQuality.png";

export default function Home() {
  return (
    <div className="body px-4">
      <section className="text-gray-600 body-font main sm:px-4 md:px-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-3xl md:text-4xl mb-4 font-bold text-gray-900">
              The Best{" "}
              <span style={{ color: "rgb(99 102 241)" }}>
                Cooling&nbsp;Services
              </span>
              <br /> You Can Ever Get!
            </h1>
            {/* <p className="mb-8 leading-relaxed">
              Lanturn Company is the place to call for your air conditioning
              needs.
            </p> */}
            <div className="text mb-4">
              We're dedicated to helping ensure the air in your home is as clean
              as possible. Our filters and air purifiers reduce your exposure to
              viruses, dust, odors, and harmful contaminants. It’s time to
              breathe easier.
            </div>
            <div className="flex justify-center">
              <button
                style={{ border: "1px solid rgb(99, 102, 241)" }}
                className="inline-flex px-3 py-1 text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600"
              >
                See Products
              </button>
              <button
                style={{
                  border: "1px solid rgb(99, 102, 241)",
                  color: "rgb(99, 102, 241)",
                }}
                className="ml-4 inline-flex px-3 py-1 bg-gray-100 border-0 focus:outline-none"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            style={{
              // width: rem",
              // height: "15rem",
              aspectRatio: "4/2",
              backgroundImage: `url(${airConditioner4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src={airConditioner1}
            /> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Comfort You Can Rely On
            </h1>
            {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p> */}
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="m10.3 8.2l-.9.9l.9.9l-1.2 1.2l4.3 4.3c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1l-5.2-5.2zm3.9 6.8c-.4 0-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.3.8.8s-.3.8-.8.8zM3.6 8l.9-.6L6 5.7l.9.9l.9-.9l-.1-.1c.2-.5.3-1 .3-1.6c0-2.2-1.8-4-4-4c-.6 0-1.1.1-1.6.3l2.9 2.9l-2.1 2.1L.3 2.4C.1 2.9 0 3.4 0 4c0 2.1 1.6 3.7 3.6 4z"
                  />
                  <path
                    fill="currentColor"
                    d="m8 10.8l.9-.8l-.9-.9l5.7-5.7l1.2-.4L16 .8l-.7-.7l-2.3 1l-.5 1.2L6.9 8L6 7.1l-.8.9s.8.6-.1 1.5c-.5.5-1.3-.1-2.8 1.4L.2 13s-.6 1 .6 2.2s2.2.6 2.2.6l2.1-2.1c1.4-1.4.9-2.3 1.3-2.7c.9-.9 1.6-.2 1.6-.2zm-3.1-.4l.7.7l-3.8 3.8l-.7-.7z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  2100 Hours Of Testing
                </h2>
                <p className="leading-relaxed text-base">
                  We Put Our Units To The Test By Exposing Them To Five Years’
                  Worth Of Wear And Tear In Just A Few Months. We're Making
                  Systems You Can Rely On For Years To Come.
                </p>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.755 14c.78 0 1.466.397 1.87 1H13.5c-.563 0-1.082.186-1.5.5H6.253a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.095 1.283 2.734 2.016 4.957 2.18V21.5c0 .161.015.32.045.472c-2.677-.169-4.74-1.066-6.143-2.71a3.75 3.75 0 0 1-.898-2.435v-.578A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM12 17.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2v-1Zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm4.25-2.5a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  924 Dealers
                </h2>
                <p className="leading-relaxed text-base">
                  Our Experts Support You Right When You Need It. Dealers Stay
                  Up To Date On The Latest Technology To Provide Fast, Reliable
                  Service On All Of Your HVAC Systems.
                </p>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 9h2V7h-2Zm0 4h2v-2h-2Zm0 4h2v-2h-2Zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18ZM1 21V11l7-5l7 5v10H9v-5H7v5Zm2-2h2v-5h6v5h2v-7L8 8.45L3 12Zm14-9Zm-6 9v-5H5v5v-5h6Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  500 Units On Duty
                </h2>
                <p className="leading-relaxed text-base">
                  We Create Products And Technology That Stretch The World’s
                  Idea Of What's Possible. Our Customers Expect Reliability And
                  Innovation Built Into Their Comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              We are here to make a revolution in the air conditioning industry
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={airQuality}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Indoor Air Quality
                  </h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1> */}
                  <p className="leading-relaxed">
                    We're dedicated to helping ensure the air in your home is as
                    clean as possible. Our filters and air purifiers reduce your
                    exposure to viruses, dust, odors, and harmful contaminants.
                    It’s time to breathe easier.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={energyEfficiency}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Energy Efficiency
                  </h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1> */}
                  <p className="leading-relaxed">
                    Using an electric or hybrid system reduces greenhouse gas
                    emissions and helps protect the environment. Our
                    electric-powered systems deliver a cleaner, healthier, and
                    more eco-friendly cooling experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={environmentalSafety}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Environmental Safety
                  </h2>
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1> */}
                  <p className="leading-relaxed">
                    R-22 refrigerant negatively impacts our environment and has
                    been banned by the Indian Government Protection Agency. To
                    help protect our world, we phased out all R-22 use from our
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Image Gallary
            </h1>
            {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p> */}
          </div>
          <div
            className="flex flex-wrap md:-m-2 -m-1"
            style={{ minHeight: "60vh" }}
          >
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={airConditioner3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-left block"
                  src={airConditioner2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={airConditioner1}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-left block"
                  src={airConditioner7}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-left block"
                  src={airConditioner5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-right block"
                  src={airConditioner6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
