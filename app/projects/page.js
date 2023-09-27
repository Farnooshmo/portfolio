import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-gradient-to-tr from-zinc-500 to-zinc-950 text-red-50">
      <div className="flex justify-between mb-4">
        <h1 className="mt-8 ml-8 text-2xl">PROJECTS</h1>

        <Link href="/" className="mt-8 mr-8">
          <h1 className="text-2xl">HOME</h1>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-zinc-900 border-pink-800 border-2 rounded-lg p-4">
          <Link href="https://good-pr.vercel.app/">
            <div className="w-96 h-48 relative">
              <Image
                src="/good-pr-project.png"
                layout="fill"
                objectFit="cover"
                alt="Good-PR"
              />
            </div>
          </Link>

          <h1 className="mt-2 text-xl text-rose-50">Teamwork GitHub Tracker</h1>
          <h2 className="mt-1 text-lg text-rose-50">
            Next.JS, Tailwind CSS, Prisma
          </h2>
        </div>

        <div className="flex flex-col items-center bg-zinc-900 border-pink-800 border-2 rounded-lg p-4">
          <Link href="https://final-project-assessment.netlify.app/">
            <div className="w-96 h-48 relative">
              <Image
                src="/video-project.png"
                layout="fill"
                objectFit="cover"
                alt="Video-recommendation"
              />
            </div>
          </Link>

          <h1 className="mt-2 text-xl text-rose-50">Video Recommendation</h1>
          <h2 className="mt-1 text-lg text-rose-50">
            React.JS, Node.JS, PostgreSQL
          </h2>
        </div>

        {/* <div className="flex flex-col items-center bg-zinc-900 border-pink-800 border-2 rounded-lg p-4">
          <Link href="https://teamwork-candycrush.netlify.app/">
            <div className="w-96 h-48 relative">
              <Image
                src="/candy-project.png"
                layout="fill"
                objectFit="cover"
                alt="Candy-crush"
              />
            </div>
          </Link>

          <h1 className="mt-2 text-xl text-rose-50">Teamwork Candy Crush</h1>
          <h2 className="mt-1 text-lg text-rose-50">React.JS, Node.JS, CSS</h2>
        </div> */}

        {/* <div className="flex flex-col items-center bg-zinc-900 border-pink-800 border-2 rounded-lg p-4">
          <Link href="https://london9-amazon-clone-50-react-project.netlify.app/">
            <div className="w-96 h-48 relative">
              <Image
                src="/ecommerce-project.png"
                layout="fill"
                objectFit="cover"
                alt="e-shop"
              />
            </div>
          </Link>

          <h1 className="mt-2 text-xl text-rose-50">Teamwork E-commerce</h1>
          <h2 className="mt-1 text-lg text-rose-50">React.JS, Firebase</h2>
        </div> */}
      </div>
    </div>
  );
}
