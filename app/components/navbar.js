"use client";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const links = [
  { title: "Home", url: "/" },
  // { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Contact", url: "/contact" },
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
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
      <Link href="/">
        Farnoos Moayeri
      </Link>

      {isMobile ? (
        <button
          className="rounded-md bg-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      ) : (
        <ul className="flex gap-x-4">
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
        <ul className="fixed top-0 left-0 flex flex-col items-center self-end py-24 bg-white shadow-xl z-20">
          {links.map((link) => (
            <li
              key={link.title}
              className="text-lg font-medium text-gray-800 px-6 py-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
