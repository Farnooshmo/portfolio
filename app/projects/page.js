import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <p>Projects</p>
      <div>
        <Image src="/good.png" width={200} height={200} alt="Good-PR" />
        <Image
          src="/video.png"
          width={200}
          height={200}
          alt="Video-recommendation"
        />
        <Image src="/candy.png" width={200} height={200} alt="Candy-crush" />
      </div>
    </div>
  );
}
