import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="z-10" id="contact">
      {/* <h1 className=" text-base text-zinc-900 text-md md:text-md text-center">
        Get in touch!
      </h1> */}

      {/* <h2
        className=" mt-4
        text-zinc-900 text-md md:text-md text-center"
      >
        farnooshmoayeri@gmail.com
      </h2> */}

      <span className="sr-only">Contact me via; LinkedIn, GitHub, Email</span>
      <div className="flex flex-row  mt-4 ml-2 gap-4">
        {/* ----LinkedIn icon---- */}
        <span className="sr-only"> Contact me via LinkedIn</span>

        <div className="flex">
          <Link
            href="https://www.linkedin.com/in/farnooshmoayeri/"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-3xl  
               hover:scale-110  text-slate-800"
            />{" "}
          </Link>
        </div>
        {/* ----GitHub icon---- */}
        <span className="sr-only"> Contact me via GitHub</span>

        <div className="flex ">
          <Link
            href="https://github.com/farnooshmo"
            rel="noopener noreferrer"
          
          >
            <FaGithub
              className="text-3xl text-slate-800
               hover:scale-110 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
