import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <p>Projects</p>
      <div className="grid md:grid-rows-3 md:grid-flow-col gap-4">
        <Image
          src="/good.png"
          width={400}
          height={400}
          alt="Good-PR"
          className="md:row-start-2 row-span-2"
        />
        <Image
          src="/video.png"
          width={400}
          height={400}
          alt="Video-recommendation"
          className="md:row-end-3 row-span-2"
        />
        <Image src="/candy.png" width={400} height={400} alt="Candy-crush" />
        <Image
          src="/film.png"
          width={400}
          height={400}
          alt="Good-PR"
          className="md:row-start-2 row-span-2"
        />
      </div>
    </div>
  );
}
