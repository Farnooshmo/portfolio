import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-zinc-900">
      <p className="mt-4 mb-4 ml-4 text-2xl">Projects</p>
      <div className="grid grid-rows justify-items-center ml-0 gap-4">
        <div className="grid fit-content justify-items-center align-middle md:flex md:flex-row content-evenly gap-8 border-solid border-2 border-pink-800  text-rose-50 rounded-lg ">
          <Link href="https://good-pr.vercel.app/">
            <Image
              src="/good-pr-project.png"
              width={200}
              height={200}
              alt="Good-PR"
              className="mt-2 md:ml-2 md:mb-2"
            />
          </Link>
          <h1 className="mt-10 text-xl">GitHub Pull Request Tracker</h1>
          <h2 className="mt-10 mb-2 mr-2 ml-2 text-xl md:mr-2">
            Next.JS, Tailwind CSS, Prisma
          </h2>
        </div>
        <div>
          <Image
            src="/video-project.png"
            width={200}
            height={200}
            alt="Video-recommendation"
          />
        </div>
        <div>
          <Image
            src="/candy-project.png"
            width={200}
            height={200}
            alt="Candy-crush"
          />
        </div>
        <div>
          <Image
            src="/eshop-project.png"
            width={200}
            height={200}
            alt="e-shop"
          />
        </div>
      </div>
    </div>
  );
}
