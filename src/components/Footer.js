import React from "react";
import { Link } from "react-router-dom";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-2">
      <h3>Resources Used</h3>
      <div className="flex justify-center items-center space-x-5">
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://react-icons.github.io/react-icons"
              className="flex justify-center items-center"
            >
              <DiReact className="text-red-700 mr-2" />
              React-icons
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tailwindcss.com"
              className="flex justify-center items-center"
            >
              <SiTailwindcss className="text-blue-400 mr-2" />
              Tailwindcss
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://firebase.google.com"
              className="flex justify-center items-center"
            >
              <IoLogoFirebase className="text-orange-300 mr-2" />
              Firebase
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://developers.google.com/books/docs/overview?hl=tr"
              className="flex justify-center items-center"
            >
              <FaLessThan className="text-green-600" />
              <FaGreaterThan className="text-orange-400 mr-2" />
              Google Api
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              target="_blank"
              to="https://redux-toolkit.js.org"
              className="flex justify-center items-center"
            >
              <SiRedux className="text-purple-700 mr-2" />
              Redux-Toolkit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
