import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Flashcard" },
  { id: 3, text: "Contact" },
  { id: 4, text: "FAQ" },
  { id: 5, text: "Login" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className=" border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-1 sm:mx-14 py-4">
        <a href="https://www.hyggexworld.com/" className="cursor-pointer">
          <img src="/assets/logo.png" className="h-12 w-40" alt="Hyggex Logo" />
        </a>
        <button
          onClick={handleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
        >
          <MenuIcon />
        </button>
        <div
          className={
            nav ? "w-full md:block md:w-auto" : "hidden md:block md:w-auto"
          }
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
            {navItems.map((items) => {
              return (
                <li key={items.id}>
                  <a
                    href="#"
                    className={`block py-2 px-3 text-black font-light  rounded md:bg-transparent md:py-2 ${
                      items.id === 5
                        ? "gradient md:px-8 md:py-2 rounded-full flex items-center justify-center text-white"
                        : ""
                    }`}
                    aria-current="page"
                  >
                    {items.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
