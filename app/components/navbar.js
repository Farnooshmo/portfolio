"use client";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const links = [
  // { title: "Home", url: "/" },
  { title: "About me", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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
    }
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <nav className="bg-gradient-to-r from-stone-600 px-4 py-3 flex items-center place-content-end   sm:gap-4 md:gap-20  border-double border-2 border-pink-400  text-violet-900  font-bold rounded-md ">
      {/* ----Icons on Navbar ---- */}
      <div className="flex items-center  gap-2 sm:mr-4 md:mr-44">
        {/* ----LinkedIn icon---- */}

        <div className="flex">
          <Link href="https://www.linkedin.com/in/farnooshmoayeri/">
            <FaLinkedin className="text-2xl text-pink-400 md:text-stone-300 drop-shadow-2xl  hover:text-violet-900" />{" "}
          </Link>
        </div>

        {/* ----GitHub icon---- */}

        <div className="flex">
          <Link href="https://github.com/farnooshmo">
            <FaGithub className="text-2xl text-pink-400 md:text-stone-300 drop-shadow-2xl hover:text-violet-800 " />
          </Link>
        </div>

        {/* ----Email icon---- */}
        <div className="flex">
          <Link href="https://formsubmit.co/el/dehuci">
            <FaEnvelope
              className="text-2xl text-pink-400 md:text-stone-300 drop-shadow-2xl hover:text-violet-800  
                "
            />
          </Link>
        </div>

        {/* ----CV icon---- */}
        <div className="flex">
          <Link href="https://docs.google.com/document/d/1pYgGkQfO4wpeaESmL_OIzRFKdIWbL-ze/edit?usp=sharing&ouid=107146459050970629203&rtpof=true&sd=true">
            <FaFile
              className="text-2xl  text-pink-400 md:text-stone-300 drop-shadow-2xl hover:text-violet-800 
               "
            />
          </Link>
        </div>
      </div>

      {isMobile ? (
        <button
          className="rounded-md bg-gray-700 p-2 ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      ) : (
        <ul className="flex gap-x-4 ">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-25 z-10"></div>
      )}

      {isOpen && (
        <ul className="fixed top-0 left-0 flex flex-col items-center self-end py-24 bg-gradient-to-l from-pink-500 to-violet-700  rounded-md shadow-xl  bg-opacity-100 z-40 h-full">
          {links.map((link) => (
            <li
              key={link.title}
              className="text-lg font-medium  text-pink-50 underline underline-offset-8
               px-6 py-2"
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
