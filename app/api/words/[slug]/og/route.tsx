import { loadGoogleFont } from "@/lib/fonts";
import { ImageResponse } from "@vercel/og";
import React from "react";

import words from "@/output.json";
import { Noto_Serif_Display } from "next/font/google";
const inter = Noto_Serif_Display({ subsets: ["latin"] });
import useNextBlurhash from "use-next-blurhash";

// export const runtime = "edge";

import { parts } from "@/lib/parts";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  // @ts-ignore
  const wordData = words[slug] || words["lost"];
  const fontData = await loadGoogleFont("Noto+Serif+Display");

  const [blurDataUrl] = useNextBlurhash(
    wordData.images[0].blur,
    5,
    5 * wordData.images[0].aspect
  );

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
        <div className="relative flex flex-col">
          <span className="z-20">{_parts.join(" – ")}</span>
          <h1 className="text-2xl font-bold text-gray-900 z-20">
            {wordData.text}
          </h1>
        </div>
        <img
          className="absolute left-0 top-0 bottom-0 right-0 z-10"
          src={blurDataUrl}
          alt="Image Background"
        />
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
