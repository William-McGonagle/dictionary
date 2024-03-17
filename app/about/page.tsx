import { BackgroundDots } from "@/components/background-dots";
import LetterSection from "@/components/letter-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            What is GUSD?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Georgetown University Student Dictionary, or GUSD for short, is a
            short index dictionary compiled using natural language processing,
            web scraping, and machine learning techniques.
          </p>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 flex-col-reverse flex md:flex-row items-start md:gap-8">
          <div className="w-full">
            <h1 className="relative mb-4 mt-16 text-3xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Dedication.
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl max-w-xl dark:text-gray-400">
              I made this so I could find a word to describe your beauty, charm,
              and intellect. But, now I know: if you gave me a new word every
              minute for the rest of my life, not a single one could come close
              to describing you.
            </p>
          </div>
          <div className="w-full">
            <Image
              className="w-full rounded"
              width={800}
              height={500}
              src="https://images.unsplash.com/photo-1627909932572-08da7af9bbd2"
              alt="Black Rock Light House in Bridgeport"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
