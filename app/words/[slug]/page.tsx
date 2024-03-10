import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Find a Word in Seconds.
              </h2>

              <p className="hidden text-gray-500 sm:mt-4 sm:block">
                Powered by advanced natural language processing algorithms and
                machine learning systems, Georgetown Dictionary tracks words,
                their origins, meanings, and more.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label htmlFor="word" className="sr-only">
                    Word
                  </label>

                  <input
                    type="text"
                    placeholder="Word or phrase..."
                    className="w-full border rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary-400"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primary-700 px-5 py-3 text-white transition focus:outline-none hover:bg-primary-600 focus:ring focus:ring-primary-400 sm:mt-0 sm:w-auto"
                >
                  <span className="text-sm font-medium"> Search </span>

                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
