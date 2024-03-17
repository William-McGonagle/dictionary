import { BackgroundDots } from "@/components/background-dots";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Find a Word in Seconds.
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Powered by advanced natural language processing algorithms and
              machine learning systems, Georgetown University Student Dictionary
              tracks words, their origins, meanings, and more.
            </p>
            <div className="mx-auto mt-8 max-w-xl w-full">
              <form action="/search" className="sm:flex sm:gap-2 w-full">
                <div className="sm:flex-1">
                  <label htmlFor="word" className="sr-only">
                    Word
                  </label>

                  <input
                    type="text"
                    name="q"
                    placeholder="Word or phrase..."
                    className="w-full border rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary-400"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary-700 px-5 py-3 text-white transition focus:outline-none hover:bg-primary-600 focus:ring focus:ring-primary-400 sm:mt-0 sm:w-auto"
                >
                  <Search size={22} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
