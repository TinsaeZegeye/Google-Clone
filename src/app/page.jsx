import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Home header */}
      <HomeHeader />
      

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image width='300' height='100' src='/google.png' alt="Google Image" priority={false} />
        <HomeSearch/>
      </div>
    </>
  );
}
