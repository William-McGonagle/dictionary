import { BackgroundDots } from "@/components/background-dots";
import LetterSection from "@/components/letter-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            How Does it Work?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            veniam animi assumenda nostrum sequi neque, praesentium vel eaque
            architecto dolores dolore ipsam excepturi totam ratione! Accusantium
            magni ipsum ea necessitatibus!
          </p>
        </div>
      </section>
    </>
  );
}
