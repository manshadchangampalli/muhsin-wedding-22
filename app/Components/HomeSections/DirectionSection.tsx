import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import DirectionCard from "../DirectionCard/DirectionCard";
import Railway from "../../Assets/railway.png";
import Bus from "../../Assets/bus.png";
import Airport from "../../Assets/airport.png";

const directions = [
  {
    icon: Railway,
    title: "Nearest railway Station",
    description:
      "TIRUR RAILWAY STATION",
    distance: "17 KMs away",
    link: "https://maps.app.goo.gl/wJwXdvYhA7RpwFoQ8",
  },
  {
    icon: Bus,
    title: "Nearest bus station",
    description: "Kadampuzha Bus Stand",
    distance: "650 m away",
    link: "https://maps.app.goo.gl/wCCrVnqvEZra4NPk7",
  },
  {
    icon: Airport,
    title: "Nearest Airport",
    description:
      "Calicut International Airport",
    distance: "36 KMs away",
    link: "https://maps.app.goo.gl/Zr3YWEzWNDNdEyj69",
  },
];

export default function DirectionSection() {
  return (
    <Center id="direction">
      <VStack className="common-space-x gap-[1rem] items-center">
        <p className="text-white border-[2px] border-[#024D83] p-[0.5rem] px-[1rem] rounded-full">
          Event Info
        </p>
        <h3 className="section-heading text-[#eeeeee63] max-w-[30rem] text-center">
          How to{" "}
          <span className="text-white">
            reach
          </span>{" "}
          the{" "}
          <span className="text-white">
            venue
          </span>{" "}
          if you are{" "}
          <span className="text-white">
            coming
          </span>{" "}
          from{" "}
          <span className="text-white">
            far
          </span>
          ?
        </h3>

        <div className="flex flex-col sm:flex-row gap-[1.5rem] w-[100%]">
          {directions.map(
            (direction, i) => (
              <DirectionCard
                key={i}
                {...direction}
              />
            )
          )}
        </div>
      </VStack>
    </Center>
  );
}
