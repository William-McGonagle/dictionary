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
        <div className="mx-auto max-w-screen-lg p-4 grid grid-cols-3">
          <LetterSection letter="a" first="aardvark" last="azymous" />
          <LetterSection letter="b" first="baalism" last="byzant" />
          <LetterSection letter="c" first="cab" last="cyzicene" />
          <LetterSection letter="d" first="dab" last="dyvour" />
          <LetterSection letter="e" first="each" last="eyrir" />
          <LetterSection letter="f" first="fab" last="fyzabad" />
          <LetterSection letter="g" first="gab" last="gytrash" />
          <LetterSection letter="h" first="haaf" last="hyzz" />
          <LetterSection letter="i" first="iamb" last="iztle" />
          <LetterSection letter="j" first="jab" last="jynx" />
          <LetterSection letter="k" first="kabob" last="kymogram" />
          <LetterSection letter="l" first="lab" last="lyzard" />
          <LetterSection letter="m" first="maat" last="myzont" />
          <LetterSection letter="n" first="naan" last="nyxis" />
          <LetterSection letter="o" first="oaf" last="ozonic" />
          <LetterSection letter="p" first="paca" last="pyx" />
          <LetterSection letter="q" first="qabalah" last="quizzify" />
          <LetterSection letter="r" first="rab" last="rynd" />
          <LetterSection letter="s" first="sab" last="syzygy" />
          <LetterSection letter="t" first="tab" last="tyzzle" />
          <LetterSection letter="u" first="uakari" last="uzzell" />
          <LetterSection letter="v" first="vac" last="vizz" />
          <LetterSection letter="w" first="wab" last="wyzz" />
          <LetterSection letter="x" first="xanthate" last="xylyl" />
          <LetterSection letter="y" first="yack" last="yuzz" />
          <LetterSection letter="z" first="zack" last="zyzzyva" />
        </div>
      </section>
    </>
  );
}
