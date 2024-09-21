import React from "react";
import VStack from "../Basic/VStack/VStack";
import Image, { StaticImageData } from "next/image";
import Button from "../Basic/Button/Button";
import Link from "next/link";

export default function DirectionCard({
  icon,
  title,
  description,
  distance,
  link,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
  distance: string;
  link: string;
}) {
  return (
    <VStack
      style={{
        background:
          "linear-gradient(180deg, rgba(20,32,43,1) 10%, rgba(0,34,65,1) 100%)",
      }}
      className="text-white p-[1rem] rounded-[13px] gap-[1.2rem] sm:gap-[1.5rem] flex-1 w-[100%] sm:w-auto lg:w-[18rem]"
    >
      <div className="relative w-[1.5rem] h-[1.5rem]">
        <Image
          src={icon?.src}
          fill
          alt={title}
        />
      </div>
      <h6 className="text-small uppercase text-[#eeeeee63]">
        {title}
      </h6>
      <VStack>
        <p className="text-basic">
          {description}
        </p>
        <p className="text-small">
          {distance}
        </p>
      </VStack>
      <Button className="btn-secondary hover:bg-transparent w-max mt-[auto]">
        <div className="flex gap-2 items-center">
          <Link href={link}>
            Get Direction
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75781 17.4612L17.7578 1.46118"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.75781 1.46118H17.7578V14.4612"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Button>
    </VStack>
  );
}
