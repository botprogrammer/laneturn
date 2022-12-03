import React from "react";
import laneturnLogo from "../assets/laneturnLogo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      className="p-4 shadow md:px-6 md:py-8"
      style={{ background: "rgba(99, 102, 241, 0.1)" }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          onClick={() => navigate("/")}
          className="flex items-center mb-4 sm:mb-0"
        >
          <img src={laneturnLogo} className="mr-3 h-8" alt="Lane Turn" />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              onClick={() => navigate("/")}
              className="mr-4 md:mr-6 cursor-pointer text-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/about")}
              className="mr-4 md:mr-6 cursor-pointer text-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/shop")}
              className="mr-4 md:mr-6 cursor-pointer text-gray-700"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/contact")}
              className="mr-4 md:mr-6 cursor-pointer text-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-400 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center text-gray-600">
        © 2022{" "}
        <a href="https://flowbite.com/" className="text-gray-700">
          Lane Turn
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
