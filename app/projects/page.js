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
        <div className="flex flex-col bg-gradient-to-r  from-slate-700 via-slate-800 to-slate-900 text-pink-600 rounded-lg p-4 m-2">
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
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Good PR</h4>
            <p className="text-sm text-slate-200 text-justify tracking-tight font-sans">
              The Good PR App is a web application developed using Next.js,
              Prisma and Tailwind CSS. The app is designed to provide users with
              a clear visualisation of the progress and activity of team
              members.{" "}
            </p>
            <div className="flex flex-row gap-1">
              <Link
                className="flex  p-2 leading-none rounded font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://good-pr.vercel.app/"
              >
                View project{" "}
              </Link>
              <Link
                className="flex  p-2 leading-none rounded font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 "
                href="https://github.com/Farnooshmo/Final-project-good-pr"
              >
                source code{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className="flex flex-col bg-gradient-to-r  from-slate-700 via-slate-800 to-slate-900 text-pink-600 rounded-lg p-4 m-2 ">
          <div className="h-40 bg-gray-400 rounded-lg">
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
            <p className="text-sm text-slate-200 text-justify tracking-tight font-sans">
              This is an app using React.js, Node.js, and PostgreSQL. It enables
              users to seamlessly view, post, delete, watch, and upvote or
              downvote YouTube videos directly on the app.{" "}
            </p>
            <div className="flex flex-row gap-1">
              <Link
                className="flex  p-2 leading-none rounded font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://final-project-assessment.netlify.app/"
              >
                View project{" "}
              </Link>
              <Link
                className="p-2 leading-none rounded font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://github.com/Farnooshmo/Full-Stack-Project-Assessment"
              >
                source code{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="flex flex-col bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-pink-600 rounded-lg p-4 m-2">
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
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Candy Crush</h4>
            <p className="text-sm text-slate-200 first-letter:text-justify tracking-tight font-sans text-clip">
              A fun and engaging (desktop) game, with colorful graphics, simple
              gameplay, it's sure to keep you entertained for hours. I utilised
              React.js, Node.js, and CSS skills for developing this app!{" "}
            </p>
            <div className="flex flex-row gap-1">
              <Link
                className="p-2 leading-none rounded   font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://teamwork-candycrush.netlify.app/"
              >
                View project{" "}
              </Link>
              <Link
                className="p-2 leading-none rounded   font-normal mt-3 border-solid border border-yellow-200 bg-slate-800 text-pink-600 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://github.com/Farnooshmo/teamwork-candy-crush-react"
              >
                Source code{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div className="flex flex-col bg-gradient-to-r  from-slate-700 via-slate-800 to-slate-900 text-pink-600 rounded-lg p-4 m-2">
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
          <div className="flex flex-col items-center mt-4">
            <h4 className="text-xl font-semibold mb-2">E-shop</h4>
            <p className="text-sm text-slate-200 text-justify tracking-tight font-sans">
              An E-commerce website built using React.js and Firebase. Secure,
              fast and easy to use for maximum convenience, use it to shop for
              yourself, friends and family or for running a small business!{" "}
            </p>
            <div className="flex flex-row gap-1">
              <Link
                className="p-2 leading-none border-solid border border-yellow-200 rounded font-normal mt-3  bg-slate-800 text-pink-600 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://london9-amazon-clone-50-react-project.netlify.app/"
              >
                View project{" "}
              </Link>
              <Link
                className="p-2 leading-none border-solid border border-yellow-300 rounded font-normal mt-3  bg-slate-800 text-pink-600 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                href="https://github.com/Farnooshmo/team-amazon-clone"
              >
                source code{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
