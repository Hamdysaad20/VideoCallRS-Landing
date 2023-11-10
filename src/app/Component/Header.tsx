import React from "react";

import Link from "next/link";
import Image from "next/image";
import css from "styled-jsx/css";

const Header = () => {
  return (
    <section
    style={{ fontFamily: "MyFontBold" }}
      className=" box-content w-full py-3 md:py-6 overflow-hidden bg-gray-300 shadow-sm fixed top-0 left-0 right-0 z-50"
      data-path="0.0"
    >
      <div
        className="container mx-auto px-6 lg:px-20 flex items-center justify-between"
        data-path="0.0.0"
      >
        <div className="w-auto" data-path="0.0.0.0">
          <div className="flex flex-wrap items-center" data-path="0.0.0.0.0">
            <div className="w-auto">
              <Link href="/" >
             
              <h1
                className="font-heading font-extrabold text-3xl  text-gray-900 hover:text-gray-700 mx-auto lg:text-center w-48"
                style={{ display: "block" }}
              >
                VideoCall-rs
              </h1>
              
              </Link>
            </div>
            <div className="w-auto hidden lg:block" data-path="0.0.0.0.1">
              <ul className="flex items-center mr-10" data-path="0.0.0.0.0.1">
                <li
                  className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"
                  data-path="0.0.0.0.0.1.0"
                >
                  <Link
                    href="/features"
                    data-config-id="auto-txt-1-2"
                    data-path="0.0.0.0.0.1.0.0"
                  >
                   Features
                  </Link>
                </li>
                <li
                  className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"
                  data-path="0.0.0.0.0.1.1"
                >
                  <Link
                    href="/solutions"
                    data-config-id="auto-txt-2-2"
                    data-path="0.0.0.0.0.1.1.0"
                  >
                   Solutions
                  </Link>
                </li>
                <li
                  className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"
                  data-path="0.0.0.0.0.1.2"
                >
                  <Link
                    href="/resources"
                    data-config-id="auto-txt-3-2"
                    data-path="0.0.0.0.0.1.2.0"
                  >
                    Resources
                  </Link>
                </li>
                <li
                  className="font-heading text-gray-900 hover:text-gray-700 text-lg"
                  data-path="0.0.0.0.0.1.3"
                >
                  <Link
                    href="/pricing"
                    data-config-id="auto-txt-4-2"
                    data-path="0.0.0.0.0.1.3.0"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto" data-path="0.0.1">
          <div className="flex flex-wrap items-center" data-path="0.0.1.0">
            <div className="w-auto hidden lg:block" data-path="0.0.1.0.0">
              <div className="flex flex-wrap" data-path="0.0.1.0.0.0">
                <div className="w-auto" data-path="0.0.1.0.0.0.0">

                </div>
                <div className="w-auto" data-path="0.0.1.0.0.0.1">
                  <button
                    className="group relative font-heading block py-2 px-5 text-lg text-gray-900 border-2 border-gray-900 overflow-hidden rounded-10"
                    data-path="0.0.1.0.0.0.1.0"
                  >
                    <div
                      className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"
                      data-path="0.0.1.0.0.0.1.0.0"
                    ></div>
                    <p
                      className="relative z-10 group-hover:text-white"
                      data-config-id="auto-txt-6-2"
                      data-path="0.0.1.0.0.0.1.0.1"
                    >
                      Try for free
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-auto p-2 lg:hidden" data-path="0.0.1.0.1">
           
                <svg
                  className="navbar-burger text-gray-800"
                  width="51"
                  height="51"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="auto-svg-1-2"
                  data-path="0.0.1.0.1.0"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="currentColor"
                    data-path="0.0.1.0.1.0.0"
                  ></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-path="0.0.1.0.1.0.1"
                  ></path>
                </svg>
           
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
        data-path="0.0.1"
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
          data-path="0.0.1.0"
        ></div>
        <nav
          className="relative z-10 px-9 py-8 bg-white h-full"
          data-config-id="toggle-mobile-2"
          data-config-target=".navbar-menu"
          data-config-class="hidden"
          data-path="0.0.1.1"
        >
          <div
            className="flex flex-wrap justify-between h-full"
            data-path="0.0.1.1.0"
          >
            <div className="w-full" data-path="0.0.1.1.0.0">
              <div
                className="flex items-center justify-between -m-2"
                data-path="0.0.1.1.0.0.0"
              >
                <div className="w-auto p-2" data-path="0.0.1.1.0.0.0.0">
                  <Link href="/" data-path="0.0.1.1.0.0.0.0.0">
                
                      <Image
                        src="/gradia-assets/logos/gradia-name-black.svg"
                        alt=""
                        data-config-id="auto-img-2-2"
                        data-path="0.0.1.1.0.0.0.0.0.0"
                        width={200}
                        height={50}
                      />
                 
                  </Link>
                </div>
                <div className="w-auto p-2" data-path="0.0.1.1.0.0.0.1">
                
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-2-2"
                      data-path="0.0.1.1.0.0.0.1.0.0"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-path="0.0.1.1.0.0.0.1.0.0.0"
                      ></path>
                    </svg>
               
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center py-8 w-full"
              data-path="0.0.1.1.0.1"
            >
              <ul data-path="0.0.1.1.0.1.0">
                <li className="mb-12" data-path="0.0.1.1.0.1.0.0">
                  <Link
                    href="/features"
                    data-config-id="auto-txt-7-2"
                    data-path="0.0.1.1.0.1.0.0.0"
                  >
                    <div
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      data-config-id="auto-txt-7-2"
                      data-path="0.0.1.1.0.1.0.0.0"
                    >
                      Features
                    </div>
                  </Link>
                </li>
                <li className="mb-12" data-path="0.0.1.1.0.1.0.1">
                  <Link
                    href="/solutions"
                    data-config-id="auto-txt-8-2"
                    data-path="0.0.1.1.0.1.0.1.0"
                  >
                    <div
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      data-config-id="auto-txt-8-2"
                      data-path="0.0.1.1.0.1.0.1.0"
                    >
                      Solutions
                    </div>
                  </Link>
                </li>
                <li className="mb-12" data-path="0.0.1.1.0.1.0.2">
                  <Link
                    href="/resources"
                    data-config-id="auto-txt-9-2"
                    data-path="0.0.1.1.0.1.0.2.0"
                  >
                    <div
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      data-config-id="auto-txt-9-2"
                      data-path="0.0.1.1.0.1.0.2.0"
                    >
                      Resources
                    </div>
                  </Link>
                </li>
                <li data-path="0.0.1.1.0.1.0.3">
                  <Link
                    href="/pricing"
                    data-config-id="auto-txt-10-2"
                    data-path="0.0.1.1.0.1.0.3.0"
                  >
                    <div
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      data-config-id="auto-txt-10-2"
                      data-path="0.0.1.1.0.1.0.3.0"
                    >
                      Pricing
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col justify-end w-full"
              data-path="0.0.1.1.0.2"
            >
              <div className="flex flex-wrap" data-path="0.0.1.1.0.2.0">
                <div className="w-full" data-path="0.0.1.1.0.2.0.0">
                  <button
                    className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10"
                    data-path="0.0.1.1.0.2.0.0.0"
                  >
                    <div
                      className="py-2 px-5 rounded-10"
                      data-path="0.0.1.1.0.2.0.0.0.0"
                    >
                      <p
                        data-config-id="auto-txt-11-2"
                        data-path="0.0.1.1.0.2.0.0.0.0.0"
                      >
                        Login
                      </p>
                    </div>
                  </button>
                </div>
                <div className="w-full" data-path="0.0.1.1.0.2.0.1">
                  <button
                    className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10"
                    data-path="0.0.1.1.0.2.0.1.0"
                  >
                    <div
                      className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"
                      data-path="0.0.1.1.0.2.0.1.0.0"
                    ></div>
                    <div
                      className="py-2 px-5 bg-white rounded-lg"
                      data-path="0.0.1.1.0.2.0.1.0.1"
                    >
                      <p
                        className="relative z-10"
                        data-config-id="auto-txt-12-2"
                        data-path="0.0.1.1.0.2.0.1.0.1.0"
                      >
                        Try for free
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

