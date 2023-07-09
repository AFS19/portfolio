/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-gray-300">
            Contact
          </h4>
          <p className="text-gray-700">TACKCHACHT</p>
          <p className="text-gray-700">Guigou, tackchacht, 33053</p>
          <p className="text-gray-700">m.afssas9@gmail.com.com</p>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-gray-300">
            Social
          </h4>
          <div className="flex items-center">
            <a
              href="https://twitter.com/afssas_mohamed"
              className="text-gray-700 hover:text-gray-900 mr-4 dark:hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-afssas-04030a269"
              className="text-gray-700 hover:text-gray-900 mr-4 dark:hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/AFS19"
              className="text-gray-700 hover:text-gray-900 dark:hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h4 className="text-lg font-bold text-gray-900 mb-4 dark:text-gray-300">
            Links
          </h4>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-90 dark:hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-8 mb-4" />
      <p className="text-sm text-center text-gray-700">
        &copy; 2023 M.AFS . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
