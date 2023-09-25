import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-zinc-500  via-teal-1000 via-10% to-zinc-950 to-60% text-red-50 ">
      <div className=" text-xl font-bold  mb-8">Farnoosh Moayeri</div>

      <div>
        <Image
          src="/far.png"
          width={100}
          height={100}
          alt="Farnoosh Moayeri"
          className="rounded-full row-span-3"
        />
      </div>
      <h1 className="items-center text-pink-800 text-2xl font-semibold mb-8 md:text-red-50">
        Full-Stack Developer
      </h1>
      <p className="whitespace-normal mb-8 text-base">
        As a dynamic and forward-thinking professional, I hold a Bachelor of
        Arts in Theatre and Performance and have gained valuable experience in
        education and administration. However, my true passion lies in the world
        of Web Development. Recently, I have decided to take on the exciting
        challenge of changing my career path by enrolling in an intensive course
        that covers both front-end and back-end aspects of web development.
        Through this comprehensive course, I have honed my skills and completed
        successful projects, gaining a sharp eye for detail and a creative
        mindset that make me a valuable asset to any team. I am now eager to
        apply my knowledge and expertise professionally and contribute to the
        dynamic and ever-evolving world of web development.{" "}
      </p>

      <section></section>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-100  hover:text-gray-700 hover:dark:border-neutral-700 hover:dark:bg-pink-500/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Access to projects{" "}
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
            Contact{" "}
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
            GitHub{" "}
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
            LinkedIn{" "}
            <span className="inline-block  text-pink-800 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}
