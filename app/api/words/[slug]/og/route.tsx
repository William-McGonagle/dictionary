import { loadGoogleFont } from "@/lib/fonts";
import { ImageResponse } from "@vercel/og";
import React from "react";

import words from "@/output.json";
import { Noto_Serif_Display } from "next/font/google";
const inter = Noto_Serif_Display({ subsets: ["latin"] });

// export const runtime = "edge";

const parts: Record<string, string> = {
  "n.": "noun",
  "v. i.": "verb",
  "v. t.": "verb",
  "a.": "adjective",
  "adv.": "adverb",
  "pron.": "pronoun",
  "prep.": "preposition",
};

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  // @ts-ignore
  const wordData = words[slug] || words["lost"];
  const fontData = await loadGoogleFont("Noto+Serif+Display");

  let _parts = wordData.defs.map(
    (i: { def: string; pos: string }) => parts[i.pos]
  );
  _parts = Array.from(new Set(_parts));

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "left",
          fontFamily: "NotoSerif",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{_parts.join(" – ")}</span>
        <h1 className="text-2xl font-bold text-gray-900">{wordData.text}</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "NotoSerif",
          data: fontData,
          style: "normal",
        },
      ],
      // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent', 'fluentFlat'
      // Default to 'twemoji'
      // emoji: "twemoji",
    }
  );
}
