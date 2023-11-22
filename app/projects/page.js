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
        <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-yellow-400 rounded-lg p-4 m-2 hover:animate-pulse">
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
            <p className="text-sm text-red-50">
              The Good PR App is a web application developed using Next.js,
              Prisma and Tailwind CSS. The app is designed to provide users with
              a clear visualisation of the progress and activity of team
              members.{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gray-300 text-violet-700  text-xs uppercase focus:outline-none "
              href="https://good-pr.vercel.app/"
            >
              View project{" "}
            </Link>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-yellow-400 rounded-lg p-4 m-2 hover:animate-pulse">
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
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Video Recommendation</h4>
            <p className="text-sm text-red-50">
              This is an app using React.js, Node.js, and PostgreSQL. It enables
              users to seamlessly view, post, delete, watch, and upvote/downvote
              YouTube videos directly on the app.{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3 bg-gray-300 text-violet-700 text-xs uppercase  active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://final-project-assessment.netlify.app/"
            >
              View project{" "}
            </Link>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-yellow-400 rounded-lg p-4 m-2 hover:animate-pulse">
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
            <p className="text-sm text-red-50">
              A fun and engaging (desktop) game, suitable for all. With bright,
              colorful graphics, simple gameplay, and multiple levels, it's sure
              to keep you entertained for hours. I utilised React.js, Node.js,
              and CSS skills for developing this app!{" "}
            </p>
            <Link
              className="p-2 leading-none rounded   font-medium mt-3 bg-gray-300 text-violet-700 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://teamwork-candycrush.netlify.app/"
            >
              View project{" "}
            </Link>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-yellow-400 rounded-lg p-4 m-2 hover:animate-pulse">
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
            <p className="text-sm text-red-50">
              An E-commerce website built using React.js and Firebase. Secure,
              fast and easy to use for maximum convenience, use it to shop for
              yourself, friends and family or for running a small business!{" "}
            </p>
            <Link
              className="p-2 leading-none rounded font-medium mt-3  bg-gray-300 text-violet-700 text-xs uppercase   active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://london9-amazon-clone-50-react-project.netlify.app/"
            >
              View project{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
