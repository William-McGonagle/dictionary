import { Metadata } from "next";
import * as React from "react";
import words from "@/output.json";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  // @ts-ignore
  const wordData = words[slug] || words["lost"];

  return {
    metadataBase: new URL("https://dictionary.gtowntech.org"),
    title: wordData.text,
    description: wordData.defs[0].def,
    openGraph: {
      images: `/api/words/${slug}/og`,
    },
    // keywords: blog.keywords,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
