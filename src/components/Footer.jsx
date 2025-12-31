import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "../icons";

const Footer = () => {
  return (
    <footer className="bg-gray-50 flex flex-col items-center justify-center h-full w-full mt-10 px-0">
      <div className="text-start w-full max-w-[1400px] mx-auto p-5 md:p-10">
        <ul className="flex flex-row flex-wrap justify-between gap-20 w-full mt-2 py-5">
          <li className="flex flex-col gap-5 w-full md:w-fit justify-start">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
            <div className="flex gap-4 mt-1 md:mt-2 w-full">
              <Link>
                <RiFacebookBoxFill
                  className="text-gray-600 hover:text-purple-500"
                  size={27}
                />
              </Link>

              <Link>
                <RiTwitterFill
                  className="text-gray-600 hover:text-purple-500"
                  size={27}
                />
              </Link>

              <Link>
                <RiInstagramFill
                  className="text-gray-600 hover:text-purple-500"
                  size={27}
                />
              </Link>

              <Link>
                <RiLinkedinBoxFill
                  className="text-gray-600 hover:text-purple-500"
                  size={27}
                />
              </Link>
            </div>

            <div className="flex flex-col items-start gap-1">
              <Link
                to="/"
                className="hover:text-purple-500 transition font-medium text-gray-500 text-[17px]"
              >
                Terms of Use
              </Link>

              <Link
                to="/"
                className="hover:text-purple-500 transition font-medium text-gray-500 text-[17px]"
              >
                Privacy Policy
              </Link>
            </div>
          </li>

          <li className="flex flex-col">
            <h1 className="text-xl text-gray-700 font-bold">About</h1>
            <ul className="flex flex-col gap-2 mt-6 text-md font-medium">
              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">About Us</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Services</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Pricing</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Blog</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Contact</Link>
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <h1 className="text-xl text-gray-700 font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-2 mt-6 text-md font-medium">
              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Gallery</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Library</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Partners</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Career</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">News & Blogs</Link>
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <h1 className="text-xl text-gray-700 font-bold">Support</h1>
            <ul className="flex flex-col gap-2 mt-6 text-md font-medium">
              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">FAQs</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Forum</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Sitemap</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Documentation</Link>
              </li>

              <li>
                <Link className="hover:text-purple-600 transition font-medium text-gray-500 text-[17px]">Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="w-full text-center text-[13px] font-medium mt-4 border-t border-gray-300 py-5">
        Copyright &copy; {new Date().getFullYear()} DeshGory. All rights reserved  | Sister Concern of iTechss
      </p>
    </footer>
  );
};
export default Footer;
