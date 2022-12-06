import React from "react";
import shop1 from "../assets/shop1.webp";
import shop2 from "../assets/shop2.webp";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <section className="text-gray-600 body-font p-4 md:p-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={shop1}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                1.5 ton 3 Star Inverter Split Air Conditioner
              </h2>
              {/* <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p> */}
              <button
                onClick={() => navigate("/shop/1")}
                className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              >
                See More
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={shop2}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                1 ton 3 Star Inverter Split Air Conditioner
              </h2>
              {/* <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p> */}
              <button
                onClick={() => navigate("/shop/1")}
                className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
