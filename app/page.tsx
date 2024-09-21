import Banner from "./Components/HomeSections/Banner";
import TimerSection from "./Components/HomeSections/TimerSection";
import EventInfo from "./Components/HomeSections/EventInfo";
import DirectionSection from "./Components/HomeSections/DirectionSection";
import GallerySection from "./Components/HomeSections/GallerySection";
import VStack from "./Components/Basic/VStack/VStack";

export default function Home() {
  return (
    <VStack className="gap-[2rem]">
      <Banner />
      <TimerSection />
      <EventInfo />
      <DirectionSection />
      <GallerySection />
    </VStack>
  );
}
