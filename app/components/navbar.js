"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "contact", url: "/contact" },
  { title: "GitHub", url: "https://github.com/Farnooshmo" },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/farnooshmoayeri/",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <button
        onClick={handleClick}
        className="flex flex-col text-pink-800 z-1 ml-8 mt-4  w-40 h-20 "
      >
        <span
          className={` text-2xl rounded-md bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        >-</span>
        <span
          className={`text-2xl bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        >-</span>
        <span
          className={`text-2xl bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        >-</span>
      </button>
      {isOpen && (
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
