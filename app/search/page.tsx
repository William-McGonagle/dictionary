import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";
import Link from "next/link";

import words from "@/output.json";
import levenshtein from "js-levenshtein";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const parts: Record<string, string> = {
  "n.": "noun",
  "v. i.": "verb",
  "v. t.": "verb",
  "a.": "adjective",
  "adv.": "adverb",
  "pron.": "pronoun",
  "prep.": "preposition",
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let query = searchParams.q?.toString() || "";
  const results = Object.keys(words)
    .filter((i) => i.replace(/\_/g, " ").includes(query))
    .sort((a, b) => levenshtein(a, query) - levenshtein(b, query));

  return (
    <>
      <main>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
            <div className="mx-auto mt-8 max-w-xl w-full">
              <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Search...
              </h1>
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
        <section>
          {results.slice(0, 40).map((i, n) => {
            // @ts-ignore
            let wordData = words[i];

            let _parts = wordData.defs.map(
              (i: { def: string; pos: string }) => parts[i.pos]
            );
            _parts = Array.from(new Set(_parts));

            return (
              <Link key={n} href={`/words/${i}`}>
                <article className="max-w-xl mx-auto w-full mt-8">
                  <h2 className="text-xl">{wordData.text}</h2>
                  <span>{_parts.join(" – ")}</span>
                </article>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
}
