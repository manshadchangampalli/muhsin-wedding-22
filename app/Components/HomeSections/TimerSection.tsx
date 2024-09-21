/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, {
  useEffect,
  useState,
} from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import { Ms_Madi } from "next/font/google";

const madi_font = Ms_Madi({ weight: '400', subsets: ['latin'] });

export default function TimerSection() {
  const [days, setDays] = useState("0");
  const [hours, setHours] =
    useState("0");
  const calculateDifference = () => {
    const currentDate: any = new Date();
    const weddingDate: any = new Date(
      "2024-09-22:11:30"
    );
    const diff = Math.floor(
      weddingDate - currentDate
    );
    let days: string = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    )?.toString();
    let hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    )?.toString();
    // const minutes = Math.floor(
    //   (diff % (1000 * 60 * 60)) /
    //   (1000 * 60)
    // );
    // const seconds = Math.floor(
    //   (diff % (1000 * 60)) / 1000
    // );
    days = days?.padStart(2, "0");
    hours = hours?.padStart(2, "0");
    setDays(days);
    setHours(hours);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      calculateDifference();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Center className="common-space-x">
      <VStack className="text-center text-white">
        <h2 className={`banner-title ${madi_font.className}`}>
          {days}{" "}
          {Number(days) < 2
            ? " Day "
            : " Days "}
          {hours}{" "}
          {Number(hours) < 2
            ? " Hour"
            : " Hours"}
        </h2>
        <p className="banner-subtitle text-[#eeeeee63]">
          To Celebrate with you!
        </p>
      </VStack>
    </Center>
  );
}
