"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import TextAnimation from "./components/TextAnimation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-gradient-to-tr from-zinc-500  via-teal-1000 via-10% to-zinc-950 to-60%  text-red-50 ">
     

      <div
        className="items-center text-pink-800 font-semibold mb-4 md:text-red-50
        hover:animate-pulse "
      >
        <TextAnimation />
        Software Developer
      </div>
      <p className="whitespace-normal mb-8 text-base text-center">
        I am a dynamic, forward-thinking software developer with experience
        building full-stack web applications. As a recent graduate of a
        comprehensive software development training course, I am looking to
        bring my creative mindset and sharp eye for detail to a professional
        engineering team.
      </p>

      <footer className="flex flex-col items-center gap-x-2 mb-0">
        <div className="flex flex-row justify-center ml-2 gap-4">
          <div className="flex">
            <Link href="https://www.linkedin.com/in/farnooshmoayeri/">
              <FaLinkedin
                className="text-2xl hover:text-zinc-800 hover:bg-white  
               hover:animate-bounce"
              />{" "}
            </Link>
          </div>

          <div className="flex">
            <Link href="https://github.com/farnooshmo">
              <FaGithub
                className="text-2xl hover:text-zinc-800 hover:bg-white 
               hover:animate-bounce hover:rounded-xl"
              />
            </Link>
          </div>
        </div>
        <p className=" flex text-xs text-center text-red-50 mt-8 mb-0 border-t-4 border-pink-800">
          Made by Farnoosh, 2023
        </p>
      </footer>
    </main>
  );
}
