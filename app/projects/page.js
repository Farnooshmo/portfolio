import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="flex items-center justify-center w-screen min-h-screen  p-10 "
      id="projects"
    >
      {/* <!-- Component Start --> */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        {/* <!-- project 1--> */}
        <div className="flex flex-col bg-zinc-800 text-red-50 rounded-lg p-4 m-2">
          <div className="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/goodpr.png"
              width={240}
              height={120}
              alt="Good-PR Project"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Good PR</h4>
            <p className="text-sm">
              The Good PR App is a web application developed using Next.js,
              Prisma and Tailwind CSS. The app designed to provide users with a
              clear visualization of the progress and activity of Code Your
              Future (CYF) trainees' final projects on GitHub.{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gradient-to-r from-slate-800 via-gray-500 to-pink-800  text-xs uppercase text-pink-100    focus:outline-none "
              href="https://good-pr.vercel.app/"
            >
              Demo
            </Link>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className="flex flex-col bg-zinc-800 text-red-50 rounded-lg p-4 m-2">
          <div className="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/video.png"
              width={240}
              height={120}
              alt="Video Recommendation"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Video Recommendation</h4>
            <p className="text-sm">
              This is an application using React.js, Node.js, and PostgreSQL.
              This app enables you to view, post, delete, watch, and
              upvote/downvote YouTube videos directly on your website.{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gradient-to-r from-slate-800 via-gray-500 to-pink-800 text-xs uppercase text-white  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://final-project-assessment.netlify.app/"
            >
              Demo
            </Link>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="flex flex-col bg-zinc-800 text-red-50  rounded-lg p-4 m-2">
          <div className="h-40 bg-gray-400 rounded-lg ">
            {" "}
            <Image
              src="/candycrush.png"
              width={240}
              height={120}
              alt="Candy Crush"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Candy Crush</h4>
            <p className="text-sm">
              Candy Crush Saga for Desktop is a fun and engaging game that is
              perfect for people of all ages. With its bright and colorful
              graphics, simple gameplay, and multiple levels to challenge you,
              it's sure to keep you entertained for hours on end. React.js,
              Node.js, and CSS are technologies used for developing this app{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gradient-to-r from-slate-800 via-gray-500 to-pink-800 text-xs uppercase text-white  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://teamwork-candycrush.netlify.app/"
            >
              Demo
            </Link>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div className="flex flex-col bg-zinc-800 text-red-50  rounded-lg p-4 m-2">
          <div className="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/eshop.png"
              width={240}
              height={120}
              alt="E-shop"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">E-shop</h4>
            <p className="text-sm">
              This e-commerce website built with React.js and Firebase, the app
              is easy to use, Secure, Fast and convenient.Use cases: Shopping
              for personal needs, buying gifts for friends and family or Running
              a small business{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gradient-to-r from-slate-800 via-gray-500 to-pink-800 text-xs uppercase text-white  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://london9-amazon-clone-50-react-project.netlify.app/"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
