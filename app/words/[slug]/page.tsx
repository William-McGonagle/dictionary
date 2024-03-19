import { BackgroundDots } from "@/components/background-dots";
import Image from "next/image";
// import Head from "next/head";
import words from "@/output.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import Head from "next/head";
import ImageView from "@/components/image-view";

import { parts } from "@/lib/parts";

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
              <span className="text-slate-900 dark:text-slate-50">
                {_parts.join(" – ")}
              </span>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 md:text-3xl">
                {wordData.text}
              </h1>
              <ol className="text-slate-900 dark:text-slate-50">
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
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 md:text-2xl mt-8">
                    Synonyms
                  </h2>
                  <ol>
                    <pre>{JSON.stringify(wordData, null, 4)}</pre>
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
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 md:text-2xl mt-8 mb-4">
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
