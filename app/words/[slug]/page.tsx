import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";
// import Head from "next/head";
import words from "@/output.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import Head from "next/head";
import ImageView from "@/components/image-view";

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
      <Head>
        <title>
          {wordData.text} | Georgetown University Student Dictionary
        </title>
        <meta property="og:description" content={wordData.defs[0].text} />
        <meta
          property="og:image"
          content={`https://dictionary.gtowntech.org/api/words/${params.slug}/og`}
        />
      </Head>
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
              {wordData.images.length == 0 ? (
                <></>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl mt-8 mb-4">
                    Images
                  </h2>
                  <ImageView
                    parent={true}
                    images={
                      wordData.images
                      //   .sort(
                      //   (a: number, b: number) => a.aspect - b.aspect
                      // )
                    }
                    direction="horizontal"
                  />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
