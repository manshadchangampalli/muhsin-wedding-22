import Image, {
  StaticImageData,
} from "next/image";
import React from "react";

export default function IconText({
  icon,
  text,
}: {
  icon: StaticImageData;
  text: string;
}) {
  return (
    <div className="flex gap-[1rem] py-[1rem] sm:px-[1rem] border-[#333440]">
      <div className="relative w-[1.2rem] h-[1.2rem]">
        <Image
          src={icon?.src}
          fill
          alt={text}
        />
      </div>
      <p className="text-basic shrink-[10] text-white max-w-[15rem]">
        {text}
      </p>
    </div>
  );
}
