import { BackgroundDots } from "@/components/background-dots";
import LetterSection from "@/components/letter-section";
import Image from "next/image";

import words from "@/output.json";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="absolute right-[-50px] top-[-5px] text-xl rotate-12 bg-yellow-300/50 backdrop-blur px-4">
              All For You!
            </span>
            We Have{" "}
            {new Intl.NumberFormat("en-US", {
              // style: null,
            }).format(Object.keys(words).length)}{" "}
            Words.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            You can use them to write a song, do an assignment, say goodbye
            while saying hello, learn how to lie down forever, or even send a
            letter to a long lost love.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <LetterSection letter="a" />
          <LetterSection letter="b" />
          <LetterSection letter="c" />
          <LetterSection letter="d" />
          <LetterSection letter="e" />
          <LetterSection letter="f" />
          <LetterSection letter="g" />
          <LetterSection letter="h" />
          <LetterSection letter="i" />
          <LetterSection letter="j" />
          <LetterSection letter="k" />
          <LetterSection letter="l" />
          <LetterSection letter="m" />
          <LetterSection letter="n" />
          <LetterSection letter="o" />
          <LetterSection letter="p" />
          <LetterSection letter="q" />
          <LetterSection letter="r" />
          <LetterSection letter="s" />
          <LetterSection letter="t" />
          <LetterSection letter="u" />
          <LetterSection letter="v" />
          <LetterSection letter="w" />
          <LetterSection letter="x" />
          <LetterSection letter="y" />
          <LetterSection letter="z" />
        </div>
      </section>
    </>
  );
}
