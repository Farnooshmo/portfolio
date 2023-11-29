"use client";
import { FaArrowDown } from "react-icons/fa";
import Contact from "./contact/page";
import Link from "next/link";
import TextAnimation from "./components/TextAnimation";
import Projects from "./projects/page";
import Image from "next/image";
import background from "/public/background.jpg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-stone-300 text-cyan-900 scroll-smooth">
      {/* Background Image */}
      <Image
        alt="Background"
        src={background}
        placeholder="empty"
        quality={100}
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* ----ABOUT ME ---- */}
      <span className="sr-only">About me</span>
      <div
        className="z-10 flex flex-col items-center text-center mt-6 font-light mb-10 text-violet-800 text-4xl
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
        <div className="flex flex-col p-6">
          <Image
            src="/farnooshmoayeri.png"
            width={100}
            height={100}
            alt="farnoosh"
            className="fill-container w-full h-full rounded-full border-dashed "
          />
        </div>
        <div className="z-10 flex flex-col items-center text-center  ">
          <p className=" md:w-1/2  boarder-double bg-stone-300 border-2 border-red-300 rounded-xl whitespace-normal md:mb-6  p-6 text-base text-center text-zinc-900 hover:underline hover:underline-offset-6">
            A dynamic, forward-thinking software engineer with experience
            building full-stack web applications. As a recent graduate of a
            comprehensive software development training course at
            <Link
              href="https://codeyourfuture.io/"
              className="underline decoration-fuchsia-600 "
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

      <Link href="#projects">
        <FaArrowDown
          className="z-10 text-4xl mt-4 text-slate-900 
               animate-bounce "
        />
      </Link>
      <Projects />

      {/* ---- FOOTER ---- */}
      <span className="sr-only"> Contact me via</span>

      <Contact />
      <footer className=" z-10 flex flex-col items-center gap-x-2 mb-0">
        <span className="sr-only"> Footer</span>
        <p className=" flex text-xs text-center text-stone-900 mt-8 mb-0 border-t-4 border-stone-600 ">
          Made by Farnoosh, 2023 Image by{" "}
          <a href="https://www.freepik.com/free-vector/realistic-liquid-marble-background-with-gold_13118034.htm">
            Freepik
          </a>
        </p>
      </footer>
    </main>
  );
}
