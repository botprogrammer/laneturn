import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={about1}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5"
                style={{ border: "1px solid #14B8A6" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path fill="#14B8A6" d="M21 20v10l9-5l-9-5z" />
                  <circle cx={14} cy={14} r={2} fill="#14B8A6" />
                  <path
                    fill="#14B8A6"
                    d="M14 20a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4Z"
                  />
                  <path
                    fill="#14B8A6"
                    d="M25.951 12.91h-.006A12.05 12.05 0 1 0 17 25.605v-2.066a9.981 9.981 0 1 1 6.623-6.81l1.925.544A12.034 12.034 0 0 0 26 14q0-.55-.049-1.09Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Customers Are Our First Priority
                </h2>
                <p className="leading-relaxed text-base">
                  Our approach as a company is to keep the dialogue ongoing and
                  to listen. Then act. The innovations we’ve developed
                  throughout the years in the cooling industries are a direct
                  result of that process. And we have a long list of industry
                  firsts to show for it, with more to come.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                style={{ border: "1px solid #14B8A6" }}
                className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#14B8A6"
                    d="M221.9 83.2a104 104 0 0 1-20.4 118.3a103.8 103.8 0 0 1-147 0a103.8 103.8 0 0 1 0-147A104 104 0 0 1 195.7 49l22.6-22.7a8.1 8.1 0 0 1 11.4 11.4l-62.1 62l-33.9 34a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l27.8-27.7a40.2 40.2 0 1 0 17.8 31.1a8 8 0 0 1 7.6-8.4a7.9 7.9 0 0 1 8.4 7.5a56 56 0 1 1-22.4-41.6l22.8-22.8a87.9 87.9 0 1 0 23.1 29.7a8 8 0 0 1 14.5-6.9Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Well Known For Quality
                </h2>
                <p className="leading-relaxed text-base">
                  LaneTurn is an industry leader for total cooling solutions. In
                  fact, laneturn is one of the few brands with product offerings
                  covering residential and commercial cooling, conventional
                  replacement parts and accessories for all categories – making
                  us a one-stop solutions provider. All laneturn cooling
                  products meet and exceed rigorous industry standards for
                  quality and reliability. From raw material delivery to
                  finished product assembly, each phase in the manufacturing
                  process is effectively overseen to ensure the highest quality
                  in air conditioner manufacturing. Lanturn products are
                  frequently tested and certified by various government and
                  third-party testing labs to ensure quality standards.
                </p>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="#14B8A6"
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
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                style={{ border: "1px solid #14B8A6" }}
                className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#14B8A6"
                    d="M11.691 1.038A.5.5 0 0 1 12 1.5V4h2.5a.5.5 0 0 1 .354.854l-2 2A.5.5 0 0 1 12.5 7H9.707l-.74.741A1.001 1.001 0 0 1 8 9a1 1 0 0 1-1-1l.001-.046a1 1 0 0 1 1.258-.92L9 6.293V3.5a.5.5 0 0 1 .146-.354l2-2a.5.5 0 0 1 .545-.108ZM12.293 6l1-1H11.5a.5.5 0 0 1-.5-.5V2.707l-1 1V6h2.293Zm1.652 1.176a6 6 0 1 1-5.122-5.12l-.383.383a1.5 1.5 0 0 0-.354.562L8 3a5 5 0 1 0 5 4.914a1.5 1.5 0 0 0 .56-.353l.384-.385ZM8 4.5A3.5 3.5 0 1 0 11.5 8h-1A2.5 2.5 0 1 1 8 5.5v-1Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Quality Policy
                </h2>
                <p className="leading-relaxed text-base">
                  It is our policy to promote a culture of continual improvement
                  that is committed to exceeding customer expectations and
                  requirements, by providing products and services of excellent
                  quality.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                style={{ border: "1px solid #14B8A6" }}
                className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#14B8A6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.695 12.985A5.972 5.972 0 0 0 6.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 1 1 18 0c-.966-.664-2.14-1-3.4-1a6 6 0 0 0-5.605 8.144"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Wide Range Of Cooling Solutions
                </h2>
                <p className="leading-relaxed text-base">
                  Today’s economy isn’t about product lines; it’s about product
                  solutions. It isn’t about the number of models or the
                  capacity, but how you can use these various products to meet
                  the equally various demands of each application. Whatever your
                  interests or needs; whatever your cooling application,
                  laneturn has a reliable, cost-effective solution to meet it.
                  LaneTurn is your one-stop source for all your cooling needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div
                style={{ border: "1px solid #14B8A6" }}
                className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path fill="#14B8A6" d="M21 20v10l9-5l-9-5z" />
                  <circle cx={14} cy={14} r={2} fill="#14B8A6" />
                  <path
                    fill="#14B8A6"
                    d="M14 20a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4Z"
                  />
                  <path
                    fill="#14B8A6"
                    d="M25.951 12.91h-.006A12.05 12.05 0 1 0 17 25.605v-2.066a9.981 9.981 0 1 1 6.623-6.81l1.925.544A12.034 12.034 0 0 0 26 14q0-.55-.049-1.09Z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  World Class Customer Support
                </h2>
                <p className="leading-relaxed text-base">
                  Customer support is priority one at LaneTurn. We are dedicated
                  to providing timely and accurate support for your peace of
                  mind. Consumers rely on our support for warranty details and
                  basic product information. Dealers and Contractors rely on us
                  for technical assistance and application support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who Are We?
            </h1>
            <p className="mb-8 text-lg">
              Lane Turn India Pvt. Ltd. is a 100% subsidiary of Lane
              TurnIndustries Ltd., Indian, a global leader in the manufacturing
              of commercial-use and residential air conditioning systems. Backed
              by the superior technology, the organization offers a wide range
              of energy efficient air conditioning solutions to the Indian
              customers. It has been successfully offering premium air
              conditioning solutions in the Indian market for large-scale
              projects. Robust growth is forecasted in India’s air-conditioning
              market in the future and Lane Turn intends to further increase its
              market share of residential and large-scale projects.
            </p>
            {/* <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p> */}
            <div className="flex lg:flex-row md:flex-col">
              <button
                onClick={() => navigate("/shop")}
                className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center  md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#14B8A6"
                    d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"
                  />
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Interested?
                  </span>
                  <span className="title-font font-medium">See Products</span>
                </span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#14B8A6"
                    d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475Q3 14.05 3 10.5q0-3.55 2.475-6.025Q7.95 2 11.5 2q1.775 0 3.312.662q1.538.663 2.701 1.825q1.162 1.163 1.824 2.7Q20 8.725 20 10.5q0 3.8-2.275 6.812Q15.45 20.325 12 22Zm-.525-6.025q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM11.5 12.8q.275 0 .5-.2q.225-.2.3-.55q.05-.325.275-.588q.225-.262.775-.812q.45-.45.75-.975q.3-.525.3-1.125q0-1.275-.862-1.913Q12.675 6 11.5 6q-.875 0-1.512.4q-.638.4-1.038 1q-.175.275-.063.575q.113.3.463.425q.25.1.5 0t.45-.375q.2-.275.488-.45q.287-.175.712-.175q.675 0 1.013.375q.337.375.337.825q0 .425-.25.762q-.25.338-.6.688q-.7.6-.938.975q-.237.375-.287 1.025q-.025.3.188.525q.212.225.537.225ZM14 17v1.35q1.775-1.5 2.887-3.512Q18 12.825 18 10.5q0-2.725-1.887-4.613Q14.225 4 11.5 4Q8.775 4 6.888 5.887Q5 7.775 5 10.5q0 2.725 1.888 4.613Q8.775 17 11.5 17Zm-2.5-5.825Z"
                  />
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Any Questions?
                  </span>
                  <span className="title-font font-medium">Contact Us</span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
