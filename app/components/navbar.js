"use client";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const links = [
  { title: "About me", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
  {
    title: "My CV",
    url: "https://www.canva.com/design/DAF19vza82E/eXCGGODgxdyl9OQolE5Ocw/view?utm_content=DAF19vza82E&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });

      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleOutsideClick = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const isMobile = windowSize.width < 768;

  return (
    <nav className="md:sticky z-50 md:top-0 bg-[#cbd3cf] px-4 py-3 flex items-center place-content-end sm:gap-4 md:gap-20  font-normal rounded-md ">
      {/* ----Icons on Navbar ---- */}

      {isMobile ? (
        <button className="p-2 ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </button>
      ) : (
        <ul className="flex gap-x-4">
          {links.map((link) => (
            <li key={link.title} className="  text-slate-800 hover:scale-110 ">
              <button className=" hover:underline hover:underline-offset-8    p-2  ">
                <Link href={link.url}>{link.title}</Link>
              </button>
            </li>
          ))}
        </ul>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-25 z-10"></div>
      )}

      {isOpen && (
        <ul
          ref={mobileMenuRef}
          className="fixed top-0 left-0 flex flex-col items-center self-end py-24 bg-gradient-to-r from-slate-700  rounded-md shadow-xl  bg-opacity-100 z-50 h-full"
        >
          {links.map((link) => (
            <li
              key={link.title}
              className=" text-lg font-medium  text-pink-50 underline underline-offset-8 px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
