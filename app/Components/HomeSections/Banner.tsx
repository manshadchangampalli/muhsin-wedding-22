"use client";

import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import Header from "../Header/Header";
import Button from "../Basic/Button/Button";
import bg from "../../Assets/banner-bg.jpg";
import { Ms_Madi } from "next/font/google";

const madi_font = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function Banner() {
  return (
    <Center className="h-[100vh] p-[1rem]">
      <VStack
        className="w-[100%] h-[100%] rounded-[15px] items-center justify-center gap-[2rem] px-[1rem]"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(188,238,245,0.5) 100%), url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <VStack>
          <h1
            className={`text-center  text-white banner-title ${madi_font.className}`}
          >
            Muhsin Weds Yousaira <br />{" "}
            & <br /> Mubashir Weds Hafla
          </h1>
          <p className="banner-subtitle text-white text-center">
            Join us in celebrating our
            wedding on 22/09/2024
          </p>
        </VStack>
        <Button
          className="btn-primary"
          onClick={() =>
          (window.location.href =
            "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240922T113000Z%2F20240922T113000Z&details=&location=Kadampuzha&text=Muhsin%20%26%20Mubashir%27s%20Wedding%20Celebration")
          }
        >
          <div className="flex gap-3 items-center">
            <p>Save the date</p>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3334 4.2L2.46673 16.0667C2.22229 16.3111 1.91118 16.4333 1.5334 16.4333C1.15562 16.4333 0.844509 16.3111 0.600065 16.0667C0.35562 15.8222 0.233398 15.5111 0.233398 15.1333C0.233398 14.7556 0.35562 14.4444 0.600065 14.2L12.4667 2.33334H2.3334C1.95562 2.33334 1.63918 2.20534 1.38407 1.94934C1.12895 1.69334 1.00095 1.37689 1.00006 1.00001C0.999176 0.623116 1.12718 0.306672 1.38407 0.0506719C1.64095 -0.205328 1.9574 -0.333328 2.3334 -0.333328H15.6667C16.0445 -0.333328 16.3614 -0.205328 16.6174 0.0506719C16.8734 0.306672 17.001 0.623116 17.0001 1.00001V14.3333C17.0001 14.7111 16.8721 15.028 16.6161 15.284C16.3601 15.54 16.0436 15.6676 15.6667 15.6667C15.2898 15.6658 14.9734 15.5378 14.7174 15.2827C14.4614 15.0276 14.3334 14.7111 14.3334 14.3333V4.2Z"
                fill="black"
              />
            </svg>
          </div>
        </Button>
      </VStack>
    </Center>
  );
}
