"use client";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const links = [
  // { title: "Home", url: "/" },
  { title: "About me", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
  {
    title: "My CV",
    url: "https://www.canva.com/design/DAF1HkD5Zkg/CSm4KPVivlju-TAP0S3jzQ/view?utm_content=DAF1HkD5Zkg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
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
    <nav className="bg-stone-300 px-4 py-3 flex items-center place-content-end sm:gap-4 md:gap-20  font-bold rounded-md ">
      {/* ----Icons on Navbar ---- */}

      {isMobile ? (
        <button className="p-2 ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      ) : (
        <ul className="flex gap-x-4">
          {links.map((link) => (
            <li
              key={link.title}
              className="  text-slate-600 hover:text-violet-800 "
            >
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
          className="fixed top-0 left-0 flex flex-col items-center self-end py-24 bg-gradient-to-r from-pink-700  rounded-md shadow-xl  bg-opacity-100 z-10 h-full"
        >
          {links.map((link) => (
            <li
              key={link.title}
              className="text-lg font-medium  text-pink-50 underline underline-offset-8 px-6 py-2"
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
