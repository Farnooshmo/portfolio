import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  return (
    <div
      className="z-10 flex items-center justify-center w-screen min-h-screen  p-10 mb-10 "
      id="projects"
    >
      {/* <!-- Component Start --> */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        {/* <!-- project 1--> */}
        <span className="sr-only"> This project is Good PR</span>

        <div className=" flex flex-col bg-[#62a5b7] text-slate-800  rounded-lg p-4 m-2">
          <div className=" h-40 rounded-lg">
            {" "}
            <span className="sr-only"> Image of landing page of Good PR</span>
            <Image
              src="/goodpr.png"
              width={240}
              height={120}
              alt="Good-PR Project"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Good PR</h4>
            <p className=" text-sm text-slate-800 text-left tracking-tight font-sans leading-normal">
              The Good PR App is a web application developed using Next.js,
              Prisma and Tailwind CSS. The app is designed to provide users with
              a clear visualisation of the progress and activity of team
              members.{" "}
            </p>
            {/* Throughout the development of this project, I had the opportunity to
            learn and work with a variety of new technologies and tools. I found
            the routing in Next.js to be particularly intriguing, and it was an
            interesting aspect to learn during the development process. In
            addition, learning how to use Tailwind CSS for UI development
            provided me with valuable experience and knowledge that I can apply
            to future projects. Lastly, gaining proficiency in using Prisma for
            database interactions was another skill that I was able to add to my
            skill set, and I am excited to continue learning and growing as a
            developer. */}
            <div className=" flex flex-row gap-4">
              <span className="sr-only">link to Good PR app</span>

              <Link
                className="flex  text-slate-800 rounded  mt-4  text-xs uppercase  focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://good-pr.vercel.app/"
              >
                <FaArrowUpRightFromSquare className=" text-2xl" />
              </Link>

              <span className="sr-only">link to GitHub repo of Good PR</span>
              <Link
                className="flex  text-slate-800  rounded  mt-3  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://github.com/Farnooshmo/Final-project-good-pr"
              >
                <FaGithubSquare className=" text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className="flex flex-col bg-[#62a5b7]  text-slate-800  rounded-lg p-4 m-2 ">
          <div className="h-40 rounded-lg">
            {" "}
            <Image
              src="/video.png"
              width={240}
              height={120}
              alt="Video Recommendation"
              className="fill-container rounded-lg w-full h-full "
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Video Discovery</h4>
            <p className="text-sm text-slate-800 text-left tracking-tight font-sans leading-normal">
              This is an app using React.js, CSS, Node.js and PostgreSQL. It
              enables users to seamlessly add, delete, watch and vote selected YouTube videos directly on the app. This is my
              first full-stack app.{" "}
            </p>
            <div className=" flex flex-row gap-4">
              <span className="sr-only">link to video Recommendation app</span>

              <Link
                className="flex  text-slate-800 rounded  mt-4  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300"
                href="https://final-project-assessment.netlify.app/"
              >
                <FaArrowUpRightFromSquare className=" text-2xl " />
              </Link>

              <span className="sr-only">
                link to GitHub repo of video Recommendation
              </span>
              <Link
                className="flex  text-slate-800  rounded  mt-3  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://github.com/Farnooshmo/Full-Stack-Project-Assessment"
              >
                <FaGithubSquare className=" text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="flex flex-col bg-[#62a5b7] text-slate-800  rounded-lg p-4 m-2">
          <div className="h-40 rounded-lg ">
            {" "}
            <Image
              src="/candycrush.png"
              width={240}
              height={120}
              alt="Candy Crush"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Candy Crush</h4>
            <p className="text-sm text-slate-800 text-left tracking-tight font-sans leading-normal">
              A fun and engaging (desktop) game, with colorful graphics, simple
              gameplay, it's sure to keep you entertained for hours. I utilised
              React.js, Node.js, and CSS skills for developing this app!{" "}
            </p>
            <div className="flex flex-row gap-4">
              <span className="sr-only">link to Candy Crush app</span>

              <Link
                className="flex  text-slate-800 rounded  mt-4  text-xs uppercase  focus:outline-none focus:ring focus:ring-pink-300"
                href="https://teamwork-candycrush.netlify.app/"
              >
                <FaArrowUpRightFromSquare className=" text-2xl " />
              </Link>

              <span className="sr-only">
                link to GitHub repo of Candy Crush
              </span>
              <Link
                className="flex  text-slate-800  rounded  mt-3  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://github.com/Farnooshmo/teamwork-candy-crush-react"
              >
                <FaGithubSquare className=" text-3xl " />
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div className="flex flex-col bg-[#62a5b7] text-slate-800  rounded-lg p-4 m-2">
          <div className="h-40 rounded-lg">
            {" "}
            <Image
              src="/eshop.png"
              width={240}
              height={120}
              alt="E-shop"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">E-shop</h4>
            <p className="text-sm text-slate-800 text-left tracking-tight font-sans leading-normal">
              An E-commerce website built using React.js and Firebase. Secure,
              fast and easy to use for maximum convenience, use it to shop for
              yourself, friends and family or for running a small business!{" "}
            </p>
            <div className="flex flex-row gap-4">
              <span className="sr-only">link to e-shop app</span>

              <Link
                className="flex  text-slate-800 rounded  mt-4  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300"
                href="https://london9-amazon-clone-50-react-project.netlify.app/"
              >
                <FaArrowUpRightFromSquare className=" text-2xl " />
              </Link>

              <span className="sr-only">link to GitHub repo of e-shop</span>
              <Link
                className="flex  text-slate-800  rounded  mt-3  text-xs uppercase   focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://github.com/Farnooshmo/team-amazon-clone"
              >
                <FaGithubSquare className=" text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
