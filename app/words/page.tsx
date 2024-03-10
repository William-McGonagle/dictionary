import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="absolute right-[-50px] top-[-5px] text-xl rotate-12 bg-yellow-300/50 backdrop-blur px-4">
              All For You!
            </span>
            We Have 277,000 Words.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            You can use them to write a song, do an assignment, say goodbye
            while saying hello, learn how to lie down forever, or even send a
            letter to a long lost love.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-lg bg-red-500/50 p-4"></div>
      </section>
    </>
  );
}
