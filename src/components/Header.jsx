import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import laneturnLogo from "../assets/laneturnLogo.png";
import { Drawer, Box } from "@mui/material";

let screenSize = window.innerWidth;

export default function Header() {
  const [size, setSize] = useState(screenSize);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const changeWindowWidth = () => {
    setSize(window.innerWidth);
  };

  window.onresize = changeWindowWidth;

  return (
    <header>
      <nav
        className="bg-white flex border-gray-200 px-4 lg:px-6 py-2.5 bg-white fixed w-full h-20 shadow-xl"
        style={{ zIndex: "1000" }}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl w-full">
          <a
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer w-full"
          >
            <img
              src={laneturnLogo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div
            className="justify-between items-center w-full flex lg:flex lg:w-auto lg:order-1 ml-auto"
            id="mobile-menu-2"
          >
            {size > 500 ? (
              <Box
                sx={{
                  "& a": {
                    color: "#14B8A6!important",
                  },
                }}
              >
                <ul className="flex font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full">
                  <li className="ml-auto">
                    <a
                      onClick={() => navigate("/")}
                      className="block cursor-pointer py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-gray-800"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/about")}
                      className="block cursor-pointer py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/shop")}
                      className="block cursor-pointer py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/contact")}
                      className="block cursor-pointer py-2 pr-4 pl-3  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact&nbsp;Us
                    </a>
                  </li>
                </ul>
              </Box>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                style={{ marginLeft: "auto" }}
                onClick={() => setOpen(true)}
              >
                <path
                  fill="#14B8A6"
                  d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            padding: "1rem",
            "& li": {
              marginBottom: ".25rem",
              borderBottom: "1px solid #14B8A6",
            },
            "& li:last-child": {
              borderBottom: "none",
            },
            "& a": {
              color: "#131313!important",
            },
          }}
        >
          <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full">
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                  navigate("/");
                }}
                className="block cursor-pointer py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                  navigate("/about");
                }}
                className="block cursor-pointer py-2 pr-4 pl-3  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                  navigate("/shop");
                }}
                className="block cursor-pointer py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
                className="block cursor-pointer py-2 pr-4 pl-3  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact&nbsp;Us
              </a>
            </li>
          </ul>
        </Box>
      </Drawer>
      <div className="h-20"></div>
    </header>
  );
}
