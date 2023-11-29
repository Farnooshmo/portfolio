import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="z-10  min-w-full max-w-prose md:w-1/2 boarder-double bg-stone-300 border-2 border-red-300 rounded-xl whitespace-normal md:mb-6  p-10 text-base text-center text-zinc-900">
      <h1 className=" text-base text-zinc-900 text-md md:text-xl text-center">
        Get in touch! Ask me more about my projects!
      </h1>

      <h2
        className=" mt-4
        text-zinc-900 text-md md:text-xl text-center"
      >
        farnooshmoayeri@gmail.com
      </h2>

      <span className="sr-only">Contact me via; LinkedIn, GitHub, Email</span>
      <div className="flex flex-row justify-center mt-4 ml-2 gap-4">
        {/* ----LinkedIn icon---- */}
        <span className="sr-only"> Contact me via LinkedIn</span>

        <div className="flex">
          <Link href="https://www.linkedin.com/in/farnooshmoayeri/">
            <FaLinkedin
              className="text-2xl  
               hover:scale-110 "
            />{" "}
          </Link>
        </div>
        {/* ----GitHub icon---- */}
        <span className="sr-only"> Contact me via GitHub</span>

        <div className="flex">
          <Link href="https://github.com/farnooshmo">
            <FaGithub
              className="text-2xl
               hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
