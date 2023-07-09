/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <a href="/">
        <h1 className="text-xl font-burtons dark:text-white hover:border-b-2 cursor-pointer">
          m.afs
        </h1>
      </a>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li className="">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:scale-110"
          >
            <a
              href="https://drive.google.com/file/d/1y6QU9edw5NaI7bSXjcY9GQK90o992vYc/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
