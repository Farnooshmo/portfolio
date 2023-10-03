// import Image from "next/image";
import Navbar from "./components/navbar.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-zinc-500  via-teal-1000 via-10% to-zinc-950 to-60% text-red-50 ">
      <Navbar className="mt-12 text-xl border-red-400" />

      <div className=" text-xl font-bold  mb-8">Farnoosh Moayeri</div>

      {/* <div className="flex w-100 h-100 object-center border-red-500 ">
        <Image src="/far.png" layout="fill" objectFit="cover" alt="Farnoosh" />
      </div> */}
      <h1 className="items-center text-pink-800 text-2xl font-semibold mb-8 md:text-red-50">
        Full-Stack Developer
      </h1>
      <p className="whitespace-normal mb-8 text-base">
        I am a dynamic, forward-thinking software developer with experience
        building full-stack web applications. As a recent graduate of a
        comprehensive software development training course, I am looking to
        bring my creative mindset and sharp eye for detail to a professional
        engineering team.
      </p>

      {/* <section>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/projects"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-100  hover:text-gray-700 hover:dark:border-neutral-700 hover:dark:bg-pink-500/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Projects{" "}
              <span className="inline-block text-pink-800 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="/contact"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
          hover:text-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact
              <span className="inline-block  text-pink-800 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="https://github.com/Farnooshmo"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              GitHub
              <span className="inline-block  text-pink-800 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="https://www.linkedin.com/in/farnooshmoayeri/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 
          hover:text-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              LinkedIn
              <span className="inline-block  text-pink-800 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </section> */}
      <footer className="text-xs text-pink-800 mt-8 mb-0">
        Made by Farnoosh, Oktober 2023
      </footer>
    </main>
  );
}
