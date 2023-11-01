"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "../globals.css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation" ;

import SwiperCore, { Navigation, EffectCoverflow } from "swiper/core"; // Import necessary Swiper components
SwiperCore.use([Navigation, EffectCoverflow]); // Use the components
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-tr from-zinc-600 to-zinc-950 text-red-50">
      <Swiper
        effect={"coverflow"} // Set the coverflow effect
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true} // Enable infinite loop
        navigation={true} // Enable navigation arrows
        className="relative mt-6"
      >
        <SwiperSlide>
          <div className=" flex flex-col object-contain items-center justify-center w-1/4">
            <Link href="https://good-pr.vercel.app/">
              <Image
                src="/good-pr-project.png"
                width={240}
                height={120}
                alt="Good-PR Project"
              />
            </Link>
            <h1 className="mt-2 text-xs text-rose-50 text-center">
              Teamwork GitHub PR Tracker
            </h1>
            <h2 className="mt-1 text-xs text-rose-50 text-center">
              Next.JS, Tailwind CSS, Prisma
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col object-contain w-1/4  justify-center items-center ">
            <Link href="https://final-project-assessment.netlify.app/">
              <Image
                src="/video-recommendation.png"
                width={240}
                height={120}
                alt="Video Recommendation"
              />
            </Link>
            <h1 className="mt-2 text-xs text-rose-50 text-center">
              Video Recommendation
            </h1>
            <h2 className="mt-1 text-xs text-rose-50 text-center">
              React.JS, Node.JS, PostgreSQL
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col object-contain w-1/4 justify-center items-center">
            <Link href="https://teamwork-candycrush.netlify.app/">
              <Image
                src="/candy-project.png"
                width={240}
                height={120}
                alt="Candy Crush"
              />
            </Link>
            <h1 className="mt-2 text-xs text-rose-50 text-center">
              Teamwork Candy Crush
            </h1>
            <h2 className="mt-1 text-xs text-rose-50 text-center">
              React.JS, Node.JS, CSS
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col object-contain w-1/4 items-center justify-center">
            <Link href="https://london9-amazon-clone-50-react-project.netlify.app/">
              <Image
                src="/eshop-project.png"
                width={240}
                height={120}
                alt="E-shop"
              />
            </Link>
            <h1 className="mt-2 text-xs text-rose-50 text-center">
              Teamwork E-commerce
            </h1>
            <h2 className="mt-1 text-xs text-rose-50 text-center">
              React.JS, Firebase
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
