"use client";
import { FaArrowDown } from "react-icons/fa";
import Contact from "./contact/page";
import Link from "next/link";
import TextAnimation from "./components/TextAnimation";
import Projects from "./projects/page";
import Image from "next/image";
import background from "/public/background.png";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-6 md:p-24  text-cyan-900 scroll-smooth">
      {/* Background Image */}
      <Image
        alt="Background"
        src={background}
        placeholder="empty"
        quality={100}
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover  opacity-50"
      />

      {/* ----ABOUT ME ---- */}
      <span className="sr-only">About me</span>
      <div
        className="z-10 flex flex-col items-center text-center mt-6 font-normal mb-10 text-slate-800 text-6xl
        hover:animate-pulse "
        id="about"
      >
        Farnoosh Moayeri
      </div>
      <div className="z-10 flex flex-col items-center text-center">
        {" "}
        <TextAnimation />
      </div>

      <div className=" z-10 flex flex-col mb-4 md:flex-row md:flex-wrap justify-around  border-dashed">
        {/* <div className="flex flex-col p-6">
          <Image
            src="/farnooshmoayeri.png"
            width={100}
            height={100}
            alt="farnoosh"
            className="fill-container w-full h-full rounded-full border-dashed "
          />
        </div> */}
        <div className="z-10 flex flex-col items-center text-center  ">
          <p className=" md:w-1/2  boarder-double bg-sky-100/10 border-2 border-red-300 rounded-xl whitespace-normal md:mb-6  p-6 text-base text-center text-zinc-900 transition delay-700 duration-700 ease-in hover:scale-110 ">
            A dynamic, forward-thinking software engineer with experience
            building full-stack web applications. As a recent graduated of a
            comprehensive software development training course at
            <Link
              href="https://codeyourfuture.io/"
              className=" font-bold underline decoration-fuchsia-600 "
            >
              {" "}
              CodeYourFuture
            </Link>
            , I am looking to bring my creative mindset and sharp eye for detail
            to a professional engineering team.
          </p>
        </div>
      </div>
      {/* ---- PROJECTS ---- */}
      <span className="sr-only">Projects</span>
      <span className="z-10 flex flex-row text-center mt-4 text-slate-900 text-2xl">
        {" "}
        My projects
      </span>

      {/* ---- ArrowDown--- */}
      <span className="sr-only"> linked to Projects</span>

      <Link
        href="#projects"
        className="transition  duration-1000 delay-1000 ease-in-out"
      >
        <FaArrowDown
          className="z-10 text-4xl mt-4 text-slate-900 
               animate-bounce  "
        />
      </Link>
      <Projects />

      {/* ---- FOOTER ---- */}
      <span className="sr-only"> Contact me via</span>

      <footer className="inset-x-0 absolute bottom-0 z-10 flex flex-col items-center gap-x-2 mb-0">
        <Contact />

        <span className="sr-only"> Footer</span>
        <p className=" flex text-xs font-thin text-center text-stone-900 mt-8 mb-0 border-t-2 border-stone-600 ">
          2023 Image by{" "}
          <a href="https://www.freepik.com/free-vector/orange-green-paper-layers-3d-abstract-gradient-papercut-colorful-origami-shape-concept_20148654.htm#&position=9&from_view=user&uuid=baf6a867-07e5-4768-8aa1-41b126f6fc79#position=9">
            Image by Garry Killian
          </a>
          <span> (on Freepik)</span>
        </p>
      </footer>
    </main>
  );
}
