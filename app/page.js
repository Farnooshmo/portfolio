"use client";
import { FaArrowDown, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Contact from "./contact/page";
import Link from "next/link";
import TextAnimation from "./components/TextAnimation";
import Projects from "./projects/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-stone-300  text-purple-700 scroll-smooth ">
      {/* ----ABOUT ME ---- */}
      <span className="sr-only">About me</span>
      <div
        className=" flex flex-col items-center text-center mt-6 font-medium mb-4 text-violet-800 
        hover:animate-pulse "
        id="about"
      >
        <TextAnimation />
        Software Engineer
      </div>
      <div className="flex mb-4">
        <Image
          src="/farnooshmoayeri.png"
          width={100}
          height={100}
          alt="farnoosh"
          className="fill-container w-full h-full rounded-full border-dashed"
        />
      </div>
      <p className="  whitespace-normal mb-8 text-base text-center text-zinc-700 hover:resize">
        A dynamic, forward-thinking software engineer with experience building
        full-stack web applications. As a recent graduate of a comprehensive
        software development training course at
        <Link href="https://codeyourfuture.io/" className="text-fuchsia-600">
          {" "}
          CodeYourFuture
        </Link>
        , I am looking to bring my creative mindset and sharp eye for detail to
        a professional engineering team.
      </p>
      {/* ---- PROJECTS ---- */}
      <span className="sr-only">Projects</span>
      <span className="flex flex-row text-center  text-rose-400 text-2xl">
        {" "}
        My projects
      </span>
      <FaArrowDown
        className="text-4xl mt-4 text-rose-300 
               animate-bounce "
      />

      <Projects />

      {/* ---- FOOTER ---- */}
      <footer className="flex flex-col items-center gap-x-2 mb-0">
        <span className="sr-only">Contact me via; LinkedIn, GitHub, Email</span>
        <Contact />
        <div className="flex flex-row justify-center mt-4 ml-2 gap-4">
          {/* ----LinkedIn icon---- */}
          <div className="flex">
            <Link href="https://www.linkedin.com/in/farnooshmoayeri/">
              <FaLinkedin
                className="text-2xl hover:text-zinc-700  
               hover:animate-bounce "
              />{" "}
            </Link>
          </div>
          {/* ----GitHub icon---- */}
          <div className="flex">
            <Link href="https://github.com/farnooshmo">
              <FaGithub
                className="text-2xl hover:text-zinc-700 
               hover:animate-bounce "
              />
            </Link>
          </div>
          {/* ----Email icon---- */}
          <div className="flex">
            <Link href="https://formsubmit.co/el/dehuci">
              <FaEnvelope
                className="text-2xl hover:text-zinc-700 
               hover:animate-bounce "
              />
            </Link>
          </div>
        </div>

        <p className=" flex text-xs text-center text-stone-900 mt-8 mb-0 border-t-4 border-pink-400">
          Made by Farnoosh, 2023
        </p>
      </footer>
    </main>
  );
}
