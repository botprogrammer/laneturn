import React, { useState } from "react";
import airConditioner1 from "../assets/airConditioner1.jpg";
import airConditioner2 from "../assets/airConditioner2.jpg";
import airConditioner3 from "../assets/airConditioner3.jpg";
import airConditioner4 from "../assets/airConditioner4.jpg";
import airConditioner5 from "../assets/airConditioner5.jpg";
import airConditioner6 from "../assets/airConditioner6.jpg";
import airConditioner7 from "../assets/airConditioner7.jpg";
import warranty from "../assets/warrenty.jfif";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

export default function Home() {
  let screenSize = window.innerWidth;
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(screenSize);
  const navigate = useNavigate();
  const changeWindowWidth = () => {
    setSize(window.innerWidth);
  };
  window.onresize = changeWindowWidth;

  const getCarouselWidth = () => {
    if (size >= 1600) {
      return 700;
    } else if (size >= 1400) {
      return 600;
    } else if (size >= 1200) {
      return 500;
    } else if (size >= 1024) {
      return 400;
    } else if (size >= 768) {
      return 600;
    } else if (size >= 600) {
      return 500;
    } else if (size >= 500) {
      return 400;
    } else if (size >= 400) {
      return 350;
    } else {
      return 300;
    }
  };

  return (
    <div className="body px-4">
      <section className="text-gray-600 body-font main sm:px-4 lg:px-20">
        <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 mr-2 lg:mr-8 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
            <h1 className="text-4xl mb-8 sm:text-3xl md:text-4xl mb-4 font-bold text-gray-900">
              Welcome To <span style={{ color: "#14B8A6" }}>LaneTurn</span>{" "}
              India.
            </h1>
            {/* <p className="mb-8 leading-relaxed">
              Lanturn Company is the place to call for your air conditioning
              needs.
            </p> */}
            {/* <div className="text mb-4">
              We're dedicated to helping ensure the air in your home is as clean
              as possible. Our filters and air purifiers reduce your exposure to
              viruses, dust, odors, and harmful contaminants. It’s time to
              breathe easier.
            </div> */}
            <div className="flex justify-center">
              <button
                style={{ border: "1px solid #14B8A6", background: "#14B8A6" }}
                className="inline-flex px-4 py-2 text-white border-0 focus:outline-none hover:bg-indigo-600"
                onClick={() => navigate("/shop")}
              >
                See Products
              </button>
              <button
                style={{
                  border: "1px solid #14B8A6",
                  color: "#14B8A6",
                }}
                className="ml-4 inline-flex px-4 py-2 bg-gray-100 border-0 focus:outline-none"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <Box
            sx={{
              "& div": {
                // width: "20rem",
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Carousel
              showStatus={false}
              width={getCarouselWidth()}
              showIndicators={false}
            >
              <div
                // className="lg:max-w-lg lg:w-full md:w-full"
                style={{
                  // height: "15rem",
                  // aspectRatio: "4/2",
                  backgroundImage: `url(${airConditioner4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                // className="lg:max-w-lg lg:w-full md:w-1/2 "
                style={{
                  // width: rem",
                  // height: "15rem",
                  aspectRatio: "4/2",
                  backgroundImage: `url(${airConditioner1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                // className="lg:max-w-lg lg:w-full md:w-1/2 "
                style={{
                  // width: rem",
                  // height: "15rem",
                  aspectRatio: "4/2",
                  backgroundImage: `url(${airConditioner2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                // className="lg:max-w-lg lg:w-full md:w-1/2 "
                style={{
                  // width: rem",
                  // height: "15rem",
                  aspectRatio: "4/2",
                  backgroundImage: `url(${airConditioner3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                // className="lg:max-w-lg lg:w-full md:w-1/2 "
                style={{
                  // width: rem",
                  // height: "15rem",
                  aspectRatio: "4/2",
                  backgroundImage: `url(${airConditioner5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </Carousel>
          </Box>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10 items-center justify-center mx-auto">
              <div className=" text-center">
                <div className="w-30 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={warranty} alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    With 3 Years of warranty
                  </h2>
                  <div
                    className="w-12 h-1 rounded mt-2 mb-4"
                    style={{ background: "#14B8A6" }}
                  />
                  {/* <p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p> */}
                </div>
              </div>
              {/* <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  We provide our customers with ashtinoshing 5 years of
                  warranty. In this period we provide free services to our
                  customer if they are facing some issues with our product. This
                  service for our customers is completely free.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Why Are We So Special
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Our products have the widest selection on the market, and we pride
              ourselves on our brand’s high quality, cutting-edge technology,
              and sleek design.
            </p>
            <div className="flex mt-6 justify-center">
              <div
                className="w-16 h-1 rounded-full inline-flex"
                style={{ background: "#14B8A6" }}
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-8 lg:p-20 md:w-1/2 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0"
                style={{ border: "1px solid #14B8A6" }}
                // style={{ background: "#14B8A6" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#14B8A6"
                    d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6z"
                  />
                  <path
                    fill="#14B8A6"
                    fillRule="evenodd"
                    d="M14.136 1.2a3.61 3.61 0 0 0-4.272 0L8.489 2.21a2.11 2.11 0 0 1-.929.384l-1.686.259a3.61 3.61 0 0 0-3.021 3.02L2.594 7.56a2.11 2.11 0 0 1-.384.929L1.2 9.864a3.61 3.61 0 0 0 0 4.272l1.01 1.375c.2.274.333.593.384.929l.259 1.686a3.61 3.61 0 0 0 3.02 3.021l1.687.259c.336.051.655.183.929.384l1.375 1.01a3.61 3.61 0 0 0 4.272 0l1.375-1.01a2.11 2.11 0 0 1 .929-.384l1.686-.259a3.61 3.61 0 0 0 3.021-3.02l.259-1.687a2.11 2.11 0 0 1 .384-.929l1.01-1.375a3.61 3.61 0 0 0 0-4.272l-1.01-1.375a2.11 2.11 0 0 1-.384-.929l-.259-1.686a3.61 3.61 0 0 0-3.02-3.021l-1.687-.259a2.11 2.11 0 0 1-.929-.384L14.136 1.2zm-3.384 1.209a2.11 2.11 0 0 1 2.496 0l1.376 1.01a3.61 3.61 0 0 0 1.589.658l1.686.258a2.11 2.11 0 0 1 1.765 1.766l.26 1.686a3.61 3.61 0 0 0 .657 1.59l1.01 1.375a2.11 2.11 0 0 1 0 2.496l-1.01 1.376a3.61 3.61 0 0 0-.658 1.589l-.258 1.686a2.11 2.11 0 0 1-1.766 1.765l-1.686.26a3.61 3.61 0 0 0-1.59.657l-1.375 1.01a2.11 2.11 0 0 1-2.496 0l-1.376-1.01a3.61 3.61 0 0 0-1.589-.658l-1.686-.258a2.11 2.11 0 0 1-1.766-1.766l-.258-1.686a3.61 3.61 0 0 0-.658-1.59l-1.01-1.375a2.11 2.11 0 0 1 0-2.496l1.01-1.376a3.61 3.61 0 0 0 .658-1.589l.258-1.686a2.11 2.11 0 0 1 1.766-1.766l1.686-.258a3.61 3.61 0 0 0 1.59-.658l1.375-1.01z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Design for you
                </h2>
                <p className="leading-relaxed text-base">
                  Our products are carved out of the world’s leading American
                  technology, which speaks volumes about the quality. Special
                  focus is given to safety and Innovation occupies the core of
                  our philosophy. As a result, we are the first brand to
                  introduce the revolutionary 3 years full machines warranty
                  with Quality service in an air conditioner in India.
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
            <div className="p-8 lg:p-20 md:w-1/2 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0"
                style={{ border: "1px solid #14B8A6" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#14B8A6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <circle cx={12} cy={12} r={2} />
                    <path d="M12 19c-4 0-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7c-.42.736-.858 1.414-1.311 2.033M15 19l2 2l4-4" />
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Appealing to the eye
                </h2>
                <p className="leading-relaxed text-base">
                  Chances are, the last thing you think about is your air
                  conditioner. You just expect to be cool and comfortable.
                  LaneTurn has it covered with the finest air conditioners in
                  the business—top-quality, innovative cooling solutions with
                  the latest technology and dependable performance—all backed by
                  great warranties and excellent service and support.
                  {/* If you
                  have any questions on which LaneTurn air conditioner is the
                  best for your home, just reach out to a trustworthy,
                  independent LaneTurn Pro in your area. */}
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
            {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
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
            </div> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <h2 className="text-gray-900 text-4xl title-font text-center font-medium mb-2">
          Join The Team
        </h2>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div
              className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              style={{ border: "1px solid #14B8A6" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4.5rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#14B8A6"
                  d="M14.77 5.87a1 1 0 0 0 1.36-.37A1 1 0 0 1 18 6a1 1 0 0 1-1 1a1 1 0 0 0 0 2a3 3 0 1 0-2.6-4.5a1 1 0 0 0 .37 1.37Zm4.3 7.13a1 1 0 0 0-1.12.86A7 7 0 0 1 11 20H5.41l.65-.65a1 1 0 0 0 0-1.41A7 7 0 0 1 11 6a1 1 0 0 0 0-2a9 9 0 0 0-7 14.61l-1.71 1.68a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.93-7.87a1 1 0 0 0-.86-1.13Zm-1.69-2.93a1 1 0 0 0-.58-.07l-.18.06l-.18.09l-.15.13a1 1 0 0 0-.21.32a.84.84 0 0 0-.08.4a1 1 0 0 0 .07.39a1 1 0 0 0 .22.32A1 1 0 0 0 17 12a1 1 0 0 0 1-1a.84.84 0 0 0-.08-.38a1.07 1.07 0 0 0-.54-.54Z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Why Become a LaneTurn Pro
              </h2>
              <p className="leading-relaxed text-base">
                In a word, support. Laneturn offers our independent contractors
                and dealers a variety of ways to grow their businesses. From
                online and in-person training opportunities to marketing
                assistance, everything we do is designed to contribute to your
                success.
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
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Lead Generation
              </h2>
              <p className="leading-relaxed text-base">
                Whether by encouraging contacts to you through our Find a Pro
                tool on this site or by making available laneturn branding
                elements for you to use on your own website, we work hard to
                provide ways for our independent Pros to drive sales and service
                visits with stronger, better-qualified leads.
              </p>
            </div>
            <div
              className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              style={{ border: "1px solid #14B8A6" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#14B8A6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M15 19H9V8.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V19Zm0-14H9m11.4 14H15v-3.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v3.3a.6.6 0 0 1-.6.6ZM9 19v-5.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v5.3a.6.6 0 0 0 .6.6H9Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div
              className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              style={{ border: "1px solid #14B8A6" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#14B8A6"
                  strokeWidth="1.2"
                  d="M9.68 13.69L12 11.93l2.31 1.76l-.88-2.85L15.75 9h-2.84L12 6.19L11.09 9H8.25l2.31 1.84l-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2l6 2v-7.72A7.96 7.96 0 0 0 20 10zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6zm0 15l-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1L12 19z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Become a Pro Partner
              </h2>
              <p className="leading-relaxed text-base">
                Our most elite cooling Pros have an opportunity to become
                Laneturn Pro Partners. Pro Partners are eligible for additional
                knowledge, resources, opportunities and recognition.
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex mx-auto mt-20 text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            style={{ background: "#14B8A6" }}
          >
            Join The Team
          </button>
          <JoinDialog open={open} setOpen={setOpen} />
        </div>
      </section>
    </div>
  );
}

const JoinDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <div className="body">
          <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">
                Join Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
                Thank you for your interest. Join our team by filling the form
                below!
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-600">
                    First Name
                  </label>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-600">
                    Last Name
                  </label>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-600">
                    Your Email
                  </label>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                    placeholder="john@gmail.com"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-md font-medium text-gray-600">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                    placeholder="Enter your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  style={{ background: "#14B8A6" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
