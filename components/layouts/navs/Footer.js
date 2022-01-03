import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { HeartIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Footer() {
  const [over, setOver] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY <= 32) {
        setOver(true);
      } else {
        setOver(false);
      }
    };
    showButton();

    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  return (
    <>
      <div className="container px-4 mx-auto bg-base">
        <div className="items-center py-8 text-center">
          <p className="flex flex-row justify-center text-sm font-medium text-primary">
            © 2021 Made with <HeartIcon className="w-5 h-5 mx-1 text-red-one" />{" "}
            by Khoironi Kurnia Syah
          </p>
        </div>
        <button
          className={`${
            over ? "invisible translate-x-20" : "visible translate-y-0"
          } fixed rounded-full bg-secondary border-primary border shadow-lg p-3 flex right-5 bottom-5 outline-none z-50 focus:outline-none transition-all ease-in-out duration-700 transform`}
          onClick={() => scroll.scrollToTop()}
        >
          <ChevronUpIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </>
  );
}
