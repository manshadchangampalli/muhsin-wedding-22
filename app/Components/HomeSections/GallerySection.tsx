import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import ToTopButton from "./ToTopButton";

export default function GallerySection() {
  return (
    <Center className="p-[1rem] sm:p-[2rem]">
      <VStack
        style={{
          background:
            "linear-gradient(180deg, rgba(20,32,43,1) 10%, rgba(0,34,65,1) 100%)",
        }}
        className="items-center rounded-[20px] text-white text-center gap-[2rem] w-[100%] p-[1rem] sm:p-[2rem]"
      >
        <h2 className="text-[1.5rem] sm:text-[3rem] font-sora font-[500]">
          Thankyou for your <br />{" "}
          Blessing and wishes✨
        </h2>
        <p className="text-basic max-w-[50rem] font-thin">
          "Explore the highlights of our
          special day in the gallery.
          We’ll be adding more photos
          after the wedding, so check
          back soon for updated
          memories!"
        </p>
        <span className="border-dull bg-[#393742] w-[100%] h-[1px]" />
        <ToTopButton />
      </VStack>
    </Center>
  );
}
