import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";

export default function Home() {
  const wordData = {
    word: "aardvark",
    definitions: [
      {
        part: "noun",
        definition:
          "a nocturnal burrowing mammal with long ears, a tubular snout, and a long extensible tongue, feeding on ants and termites. Aardvarks are native to Africa and have no close relatives.",
        examples: ["", ""],
      },
    ],
  };

  return (
    <>
      <main>
        <section>
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-left">
              <span>{wordData.definitions.map((i) => i.part).join(" – ")}</span>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {wordData.word}
              </h1>
              <ol>
                {wordData.definitions.map((i, n) => (
                  <li key={n}>{i.definition}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
