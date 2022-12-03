import React from "react";
import { useNavigate } from "react-router-dom";
import laneturnLogo from "../assets/laneturnLogo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <nav
        className="bg-white flex border-gray-200 px-4 lg:px-6 py-2.5 bg-white fixed w-full h-20 shadow-xl"
        style={{ zIndex: "1000" }}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl w-full">
          <a
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              src={laneturnLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ml-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  onClick={() => navigate("/")}
                  className="block cursor-pointer py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-gray-800"
                  aria-current="page"
                  style={{ color: "rgb(99 102 241)" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/about")}
                  className="block cursor-pointer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={{ color: "rgb(99 102 241)" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/shop")}
                  className="block cursor-pointer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={{ color: "rgb(99 102 241)" }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/contact")}
                  className="block cursor-pointer py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  style={{ color: "rgb(99 102 241)" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </header>
  );
}
