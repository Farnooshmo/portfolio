"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import Contact from "./contact/page";
import Link from "next/link";
import TextAnimation from "./components/TextAnimation";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-stone-300  text-purple-700 scroll-smooth ">
      {/* ----ABOUT ME ---- */}
      <span className="sr-only">About me</span>
      <div
        className="items-center text-center  font-medium mb-4 text-violet-800 
        hover:animate-pulse "
        id="about"
      >
        <TextAnimation />
        Software Engineer
      </div>
      <p className="whitespace-normal mb-8 text-base text-center text-zinc-600">
        A dynamic, forward-thinking software developer with experience building
        full-stack web applications. As a recent graduate of a comprehensive
        software development training course at Code Your Future, I am looking
        to bring my creative mindset and sharp eye for detail to a professional
        engineering team.
      </p>
      {/* ---- PROJECTS ---- */}
      <span className="sr-only">Projectss</span>
      <Projects />

      {/* ---- FOOTER ---- */}
      <footer className="flex flex-col items-center gap-x-2 mb-0">
        <span className="sr-only">
          Contact me via; LinkedIn, GitHub, Email,My CV
        </span>
        <Contact />
        <div className="flex flex-row justify-center mt-4 ml-2 gap-4">
          {/* ----LinkedIn icon---- */}
          <div className="flex">
            <Link href="https://www.linkedin.com/in/farnooshmoayeri/">
              <FaLinkedin
                className="text-2xl hover:text-zinc-800 hover:bg-white  
               hover:animate-bounce"
              />{" "}
            </Link>
          </div>
          {/* ----GitHub icon---- */}
          <div className="flex">
            <Link href="https://github.com/farnooshmo">
              <FaGithub
                className="text-2xl hover:text-zinc-800 hover:bg-white 
               hover:animate-bounce hover:rounded-xl"
              />
            </Link>
          </div>
          {/* ----Email icon---- */}
          <div className="flex">
            <Link href="https://formsubmit.co/el/dehuci">
              <FaEnvelope
                className="text-2xl hover:text-zinc-800 hover:bg-white 
               hover:animate-bounce hover:rounded-xl"
              />
            </Link>
          </div>
          {/* ----CV icon---- */}
          <div className="flex">
            <Link href="https://docs.google.com/document/d/1pYgGkQfO4wpeaESmL_OIzRFKdIWbL-ze/edit?usp=sharing&ouid=107146459050970629203&rtpof=true&sd=true">
              <FaFile
                className="text-2xl hover:text-zinc-800 hover:bg-white 
               hover:animate-bounce hover:rounded-xl"
              />
            </Link>
          </div>
        </div>

        <p className=" flex text-xs text-center text-zinc-700 mt-8 mb-0 border-t-4 border-pink-400">
          Made by Farnoosh, 2023
        </p>
      </footer>
    </main>
  );
}
