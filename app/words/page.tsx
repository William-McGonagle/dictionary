import { BackgroundDots } from "@/components/background-dots";
import LetterSection from "@/components/letter-section";
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
        <div className="mx-auto max-w-screen-lg p-4 grid grid-cols-2">
          <LetterSection letter="a" first="aardvark" last="awardee" />
          <LetterSection letter="b" first="baalism" last="awardee" />
          <LetterSection letter="c" first="aardvark" last="awardee" />
          <LetterSection letter="d" first="aardvark" last="awardee" />
          <LetterSection letter="e" first="aardvark" last="awardee" />
          <LetterSection letter="f" first="aardvark" last="awardee" />
          <LetterSection letter="g" first="aardvark" last="awardee" />
          <LetterSection letter="h" first="aardvark" last="awardee" />
          <LetterSection letter="i" first="aardvark" last="awardee" />
          <LetterSection letter="j" first="aardvark" last="awardee" />
          <LetterSection letter="k" first="aardvark" last="awardee" />
          <LetterSection letter="l" first="aardvark" last="awardee" />
          <LetterSection letter="m" first="aardvark" last="awardee" />
          <LetterSection letter="n" first="aardvark" last="awardee" />
          <LetterSection letter="o" first="aardvark" last="awardee" />
          <LetterSection letter="p" first="aardvark" last="awardee" />
          <LetterSection letter="q" first="aardvark" last="awardee" />
          <LetterSection letter="r" first="aardvark" last="awardee" />
          <LetterSection letter="s" first="aardvark" last="awardee" />
          <LetterSection letter="t" first="aardvark" last="awardee" />
          <LetterSection letter="u" first="aardvark" last="awardee" />
          <LetterSection letter="v" first="aardvark" last="awardee" />
          <LetterSection letter="w" first="aardvark" last="awardee" />
          <LetterSection letter="x" first="aardvark" last="awardee" />
          <LetterSection letter="y" first="aardvark" last="awardee" />
          <LetterSection letter="z" first="aardvark" last="awardee" />
        </div>
      </section>
    </>
  );
}
