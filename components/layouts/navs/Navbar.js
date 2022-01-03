import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MenuIcon,
  XIcon,
  PlayIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY <= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-10 md:py-0 top-0 text-white transition-all duration-500 ${
          scroll ? "py-4 bg-primary bg-opacity-50" : "py-3 shadow-md bg-primary"
        }`}
      >
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <div className="flex items-center space-x-1">
              <GlobeAltIcon className="w-6 h-6" />
              <a href="/" className="text-xl font-bold text-white uppercase">
                Coronavirus
              </a>
            </div>
            <button
              className="text-white rounded md:hidden"
              onClick={handleClick}
            >
              {click ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <nav
            className={`md:flex flex-col md:flex-row md:ml-auto py-2 md:mt-0 font-medium text-center md:text-left md:space-y-0 space-y-2 ${
              click ? "flex" : "hidden"
            }`}
            id="navbar-collapse"
          >
            <div className="py-2 lg:px-4 md:mx-2">
              <Link
                href="https://www.youtube.com/watch?v=FC4soCjxSOQ"
                passHref={true}
              >
                <div className="flex flex-row items-center space-x-2 cursor-pointer hover:text-gray-300 focus:outline-none focus:shadow-outline">
                  <PlayIcon className="w-7 h-7" />
                  <a>How to protect yourself</a>
                </div>
              </Link>
            </div>
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/coronavirus-self-checker.html"
              passHref={true}
            >
              <button className="py-2 border border-white rounded-md cursor-pointer hover:bg-primary bg-secondary md:px-5 md:mx-2 focus:outline-none focus:shadow-outline">
                Are you sick?
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
