import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";
import words from "@/output.json";
import Link from "next/link";
import { notFound } from "next/navigation";

const parts: Record<string, string> = {
  "n.": "noun",
  "v. i.": "verb",
  "v. t.": "verb",
  "a.": "adjective",
  "adv.": "adverb",
  "pron.": "pronoun",
  "prep.": "preposition",
};

export default async function Home({ params }: { params: { slug: string } }) {
  // @ts-ignore
  const wordData = words[params.slug];

  if (wordData == undefined) return notFound();

  let _parts = wordData.defs.map(
    (i: { def: string; pos: string }) => parts[i.pos]
  );
  _parts = Array.from(new Set(_parts));

  return (
    <>
      <main>
        <section>
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-left">
              <span>{_parts.join(" – ")}</span>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {wordData.text}
              </h1>
              <ol>
                {wordData.defs.map(
                  (i: { def: string; pos: string }, n: number) =>
                    i.def == undefined ? (
                      <></>
                    ) : (
                      <li key={n}>
                        <b>{i.pos}</b> {i.def}
                      </li>
                    )
                )}
              </ol>
              {wordData.syn.length == 0 ? (
                <></>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl mt-8">
                    Synonyms
                  </h2>
                  <ol>
                    {wordData.syn.map((i: string, n: number) => (
                      <li key={n}>
                        <Link className="hover:underline" href={`/words/${i}`}>
                          {
                            // @ts-ignore
                            (words[i] || { text: i }).text
                          }
                        </Link>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
