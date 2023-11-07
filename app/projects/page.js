import Image from "next/image";

export default function Projects() {
  return (
    <div class="flex items-center justify-center w-screen min-h-screen p-10 bg-gradient-to-tr from-zinc-600 to-zinc-950">
      {/* <!-- Component Start --> */}
      <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        {/* <!-- project 1--> */}
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/goodpr.png"
              width={240}
              height={120}
              alt="Good-PR Project"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">GitHub PR Tracker</h4>
            <p class="text-sm">
              The Good PR App is a web application developed using Next.js,
              Prisma and Tailwind CSS. The app designed to provide users with a
              clear visualization of the progress and activity of Code Your
              Future (CYF) trainees' final projects on GitHub.{" "}
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-pink-800 text-xs uppercase text-white  hover:bg-pink-700 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://good-pr.vercel.app/"
            >
              Demo
            </a>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/video.png"
              width={240}
              height={120}
              alt="Video Recommendation"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">Video Recommendation</h4>
            <p class="text-sm">
              This is an application using React.js, Node.js, and PostgreSQL.
              This app enables you to view, post, delete, watch, and
              upvote/downvote YouTube videos directly on your website.{" "}
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-pink-800 text-xs uppercase text-white  hover:bg-pink-700 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://final-project-assessment.netlify.app/"
            >
              Demo
            </a>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg ">
            {" "}
            <Image
              src="/candycrush.png"
              width={240}
              height={120}
              alt="Candy Crush"
              className="fill-container rounded-lg w-full h-full"
              s
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">Candy Crush</h4>
            <p class="text-sm">
              Candy Crush Saga for Desktop is a fun and engaging game that is
              perfect for people of all ages. With its bright and colorful
              graphics, simple gameplay, and multiple levels to challenge you,
              it's sure to keep you entertained for hours on end. React.js,
              Node.js, and CSS are technologies used for developing this app{" "}
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-pink-800 text-xs uppercase text-white hover:bg-pink-700 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://teamwork-candycrush.netlify.app/"
            >
              Demo
            </a>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg">
            {" "}
            <Image
              src="/eshop.png"
              width={240}
              height={120}
              alt="E-shop"
              className="fill-container rounded-lg w-full h-full"
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">E-shop</h4>
            <p class="text-sm">
              This e-commerce website built with React.js and Firebase, the app
              is easy to use, Secure, Fast and convenient.Use cases: Shopping
              for personal needs, buying gifts for friends and family or Running
              a small business{" "}
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-pink-800 text-xs uppercase text-white hover:bg-pink-700 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
              href="https://london9-amazon-clone-50-react-project.netlify.app/"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
